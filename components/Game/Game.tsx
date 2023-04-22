'use client';

import {
  GameState, generateRound, getStatus, nextRound,
} from '@/lib/game';
import { BlobDescriptor } from '@/lib/blob';
import WantedPoster from '@/components/WantedPoster';
import React, { useEffect, useState } from 'react';
import Blob from '@/components/Blob';
import dynamic from 'next/dynamic';
import classes from './Game.module.scss';

const StartModal = dynamic(() => import('@/components/StartModal'), { ssr: false });
const LoseModal = dynamic(() => import('@/components/LoseModal'), { ssr: false });

function complementaryColor(color: string | [number, number, number]) {
  if (typeof color === 'string') {
    return `#${
      (`0${(255 - parseInt(color.substring(1, 3), 16)).toString(16)}`).slice(-2)
    }${(`0${(255 - parseInt(color.substring(3, 5), 16)).toString(16)}`).slice(-2)
    }${(`0${(255 - parseInt(color.substring(5, 7), 16)).toString(16)}`).slice(-2)}`;
  }
  return [(255 - color[0]), (255 - color[1]), (255 - color[2])];
}

const useGame = (initialState: GameState) => {
  const [game, setGame] = useState(initialState);
  const {
    blobs, captured, wanted, points, time, elapsed, round,
  } = game;
  useEffect(() => {
    let request: number = 0;
    let last = 0;
    const updateElapsed = () => {
      request = window.requestAnimationFrame((timestamp) => {
        const diff = timestamp - last;
        setGame((prev) => {
          if (prev.round === 0) return prev;
          return ({
            ...prev,
            elapsed: Math.min(prev.elapsed + diff, prev.time),
          });
        });
        last = timestamp;
        updateElapsed();
      });
    };
    updateElapsed();
    return () => window.cancelAnimationFrame(request);
  }, []);

  const status = getStatus(game);
  const next = (blob: BlobDescriptor) => {
    if (blob.id === wanted.id) {
      setGame(nextRound);
    }
  };
  const restart = () => {
    setGame(generateRound(1));
  };
  return {
    blobs,
    captured,
    wanted,
    points,
    time,
    elapsed,
    status,
    round,
    next,
    restart,
  };
};

export type GameProps = {
  initialGame: GameState,
}
const Game: React.FC<GameProps> = ({ initialGame }) => {
  const game = useGame(initialGame);
  const {
    blobs, captured, wanted, points, time, elapsed, status,
  } = game;
  const progress = (time - elapsed) / time;
  const onBlobClick = (blob: BlobDescriptor) => {
    game.next(blob);
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.controls}>
          <div>
            <progress
              id="time-progress"
              value={progress}
              max={1}
              data-animated={elapsed > 0}
            >
              {elapsed}
              ms
            </progress>
            <label htmlFor="time-progress" className={classes.timeProgressLabel}>
              {Math.round(time - elapsed)}
              ms
            </label>
          </div>
          <div className={classes.score}>
            PT
            {' '}
            {points}
          </div>
        </div>
        <WantedPoster picture={<Blob {...wanted} />} />
      </div>
      <div className={classes.board}>
        {blobs.map((blob) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            key={blob.id}
            role="button"
            tabIndex={-1}
            className={classes.box}
            onClick={() => onBlobClick(blob)}
            style={{ backgroundColor: blob.colors.dark }}
          >
            <Blob {...blob} animated />
          </div>
        ))}
      </div>
      <StartModal
        blob={<Blob {...wanted} />}
        onStart={() => game.restart()}
        open={status === 'start'}
      />
      <LoseModal
        points={points}
        captured={captured}
        onRetry={() => game.restart()}
        open={status === 'loose'}
      />
    </div>
  );
};

export default Game;
