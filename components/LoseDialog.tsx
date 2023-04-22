import { Blob } from '@/lib/blob';
import React from 'react';
import SvgBlob from './SvgBlob';

type LoseDialogProps = {
  onRetryClick: () => void,
  points: number,
  captured?: Blob[],
}
const LoseDialog: React.FC<LoseDialogProps> = ({ onRetryClick, points, captured = [] }) => (
  <div className="dialog-backdrop">
    <dialog className="dialog" open>
      <h1>
        You LOOSE
      </h1>
      <p>
        <span style={{ color: '#2b2b2b' }}>SCORE</span>
        <br />
        {points}
        {' '}
        PT
        <br />
      </p>
      {!!captured.length && (
        <p>
          <span style={{ color: '#2b2b2b' }}>CAPTURED</span>
          <br />
          {captured.map((blob) => (
            <div
              key={blob.id}
              style={{
                width: '65px',
                margin: '3px',
                border: '1px solid black',
                background: '#adabab',
                display: 'inline-block',
              }}
            >
              <SvgBlob key={blob.id} {...blob} />
            </div>
          ))}
        </p>
      )}
      <button type="button" className="action-button" onClick={onRetryClick}>
        RETRY
      </button>
    </dialog>
  </div>
);

export default LoseDialog;
