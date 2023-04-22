'use client';

import { getStatus, initialRound, nextRound } from '@/lib/game';
import { Blob } from '@/lib/blob';
import WantedPoster from '@/components/WantedPoster';
import SvgBlob from '@/components/SvgBlob';
import { useEffect, useState } from 'react';
import StartDialog from '@/components/StartDialog';
import LoseDialog from '@/components/LoseDialog';

const initialGame = initialRound(0);

const useGame = () => {
  const [game, setGame] = useState(initialGame);
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
  const next = (blob: Blob) => {
    if (blob.id === wanted.id) {
      setGame(nextRound);
    }
  };
  const restart = () => {
    setGame(initialRound(1));
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

const Game = () => {
  const game = useGame();
  const {
    blobs, captured, wanted, points, time, elapsed, status,
  } = game;
  const progress = (time - elapsed) / time;
  const onBlobClick = (blob: Blob) => {
    game.next(blob);
  };
  return (
    <>
      <header>
        <h1 className="title">
          BLOBS
          <span className="title-doa">DEAD OR ALIVE</span>
        </h1>
      </header>
      <div className="content">
        <div className="content-header">
          <div className="controls">
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
              <label htmlFor="time-progress" className="time-progress-label">
                {Math.round(time - elapsed)}
                ms
              </label>
            </div>
            <div className="score">
              PT
              {' '}
              {points}
            </div>
          </div>
          <WantedPoster>
            {wanted && <SvgBlob {...wanted} />}
          </WantedPoster>
        </div>
        <div className="board">
          {blobs.map((blob) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div key={blob.id} role="button" tabIndex={-1} className="box" onClick={() => onBlobClick(blob)}>
              <SvgBlob {...blob} animated />
            </div>
          ))}
        </div>
        {status === 'start' && (
          <StartDialog
            onClickStart={() => game.restart()}
          />
        )}
        {status === 'loose' && (
          <LoseDialog
            points={points}
            captured={captured}
            onRetryClick={() => game.restart()}
          />
        )}
      </div>
    </>
  );
};

export default Game;
