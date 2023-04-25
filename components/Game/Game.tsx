'use client';

import {
  GameState, generateRound, getStatus, nextRound,
} from '@/lib/game';
import { BlobDescriptor } from '@/lib/blob';
import WantedPoster from '@/components/WantedPoster';
import React, { useEffect, useState } from 'react';
import Blob from '@/components/Blob';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import classes from './Game.module.scss';
import Controls from './Controls';

const StartModal = dynamic(() => import('@/components/StartModal'), { ssr: false });
const LoseModal = dynamic(() => import('@/components/LoseModal'), { ssr: false });

const gridSize = (size: number): React.CSSProperties => {
  const rows = Math.sqrt(size);
  const columns = Math.sqrt(size);
  return {
    gridTemplateColumns: `repeat(${columns}, calc( 100% / ${columns}))`,
    gridTemplateRows: `repeat(${rows}, calc( 100% / ${rows}))`,
  };
};

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
  const router = useRouter();
  const game = useGame(initialGame);
  const {
    blobs,
    captured,
    wanted,
    points,
    round,
    status,
  } = game;
  const onBlobClick = (blob: BlobDescriptor) => {
    game.next(blob);
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Controls game={game} />
        <WantedPoster picture={<Blob {...wanted} />} />
      </div>
      <div
        className={classes.board}
        style={gridSize(blobs.length)}
      >
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
        round={round}
        points={points}
        captured={captured}
        onRetry={() => game.restart()}
        onBack={() => router.back()}
        open={status === 'loose'}
      />
    </div>
  );
};

export default Game;
