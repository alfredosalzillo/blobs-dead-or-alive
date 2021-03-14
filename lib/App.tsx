import React, { useState, useEffect } from 'react'
import SvgBlob from './components/SvgBlob.tsx';
import { Blob } from './blob.ts';
import WantedPoster from './components/WantedPoster.tsx';
import { getStatus, initialRound, nextRound } from './game.ts';

const initialGame = initialRound(0)
const App = () => {
  const [game, setGame] = useState(initialGame)
  const { blobs, wanted, points, time, elapsed } = game;
  const status = getStatus(game)
  useEffect(() => {
    let request = null;
    let last = 0;
    const updateElapsed = () => {
      request = window.requestAnimationFrame((time) => {
        const elapsed = time - last;
        setGame((prev) => {
          if (prev.round === 0) return prev;
          return ({
            ...prev,
            elapsed: Math.min(prev.elapsed + elapsed, prev.time),
          });
        });
        last = time;
        updateElapsed();
      });
    };
    updateElapsed();
    return () => window.cancelAnimationFrame(request);
  }, []);
  const onBlobClick = (blob: Blob) => {
    if (blob.id === wanted.id) {
      setGame(nextRound)
    }
  }
  return (
    <>
      <header>
        <h1 className="title">BLOBS <span className="title-doa">DEAD OR ALIVE</span></h1>
      </header>
      <div className="content">
        <div className="content-header">
          <div className="controls">
            <div>
              <progress
                value={(time - elapsed) / time}
                max={1}
                data-animated={elapsed > 0}
              >
                {elapsed}ms
              </progress>
            </div>
            <div className="score">
              PT {points}
            </div>
          </div>
          <WantedPoster>
            {wanted && <SvgBlob {...wanted} />}
          </WantedPoster>
        </div>
        <div className="board">
          {blobs.map((blob) => (
            <div className="box" onClick={() => onBlobClick(blob)}>
              <SvgBlob key={blob.id} {...blob} animated />
            </div>
          ))}
        </div>
        {status === 'start' && (
          <div className="dialog-backdrop">
            <dialog className="dialog" open>
              <h1>
                Instructions
              </h1>
              <p>
                Find the WANTED BLOB before the time end.
              </p>
              <button className="action-button" onClick={() => setGame(initialRound(1))}>
                START
              </button>
            </dialog>
          </div>
        )}
        {status === 'loose' && (
          <div className="dialog-backdrop">
            <dialog className="dialog" open>
              <h1>
                You LOOSE
              </h1>
              <p>
                <h3>SCORE</h3>
                {points} PT
              </p>
              <button className="action-button" onClick={() => setGame(initialRound(1))}>
                RETRY
              </button>
            </dialog>
          </div>
        )}
      </div>
    </>
  )
}

export default App
