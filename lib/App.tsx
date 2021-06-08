import React, { useState, useEffect } from 'react'
import SvgBlob from './components/SvgBlob.tsx';
import { Blob, randomBlob } from './blob.ts';
import WantedPoster from './components/WantedPoster.tsx';
import { getStatus, initialRound, nextRound } from './game.ts';

type StartDialogProps = {
  onClickStart: () => void,
}
const StartDialog = ({ onClickStart }: StartDialogProps) => (
  <div className="dialog-backdrop">
    <dialog className="dialog" open>
      <h1>
        Instructions
      </h1>
      <WantedPoster>
        <SvgBlob {...randomBlob(200, 200)} />
      </WantedPoster>
      <p>
        Find the WANTED BLOB before the time end.
      </p>
      <button className="action-button" onClick={onClickStart}>
        START
      </button>
    </dialog>
  </div>
)

type LoseDialogProps = {
  onRetryClick: () => void,
  points: number,
  captured?: Blob[],
}
const LoseDialog = ({ onRetryClick, points, captured = [] }: LoseDialogProps) => (
  <div className="dialog-backdrop">
    <dialog className="dialog" open>
      <h1>
        You LOOSE
      </h1>
      <p>
        <span style={{ color: '#2b2b2b' }}>SCORE</span><br />
        {points} PT<br />
      </p>
      {!!captured.length && (
        <p>
          <span style={{ color: '#2b2b2b' }}>CAPTURED</span><br />
          {captured.map((blob) => (
            <div
              style={{
                width: '65px',
                margin: '3px',
                border: '1px solid black',
                background: '#adabab',
                display: 'inline-block',
              }}
            >
              <SvgBlob key={blob.id} {...blob} style={{ width: '80px', margin: '5px', border: '1px solid black', background: '#adabab' }} />
            </div>
          ))}
        </p>
      )}
      <button className="action-button" onClick={onRetryClick}>
        RETRY
      </button>
    </dialog>
  </div>
)

const initialGame = initialRound(0)
const App = () => {
  const [game, setGame] = useState(initialGame)
  const { blobs, captured, wanted, points, time, elapsed } = game;
  const status = getStatus(game)
  useEffect(() => {
    let request: number = 0;
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
              <progress id="time-progress"
                value={(time - elapsed) / time}
                max={1}
                data-animated={elapsed > 0}
              >
                {elapsed}ms
              </progress>
              <label htmlFor="time-progress" className="time-progress-label">
                {Math.round(time - elapsed)}ms
              </label>
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
          <StartDialog
            onClickStart={() => setGame(initialRound(1))}
          />
        )}
        {status === 'loose' && (
          <LoseDialog
            points={points}
            captured={captured}
            onRetryClick={() => setGame(initialRound(1))}
          />
        )}
      </div>
    </>
  )
}

export default App
