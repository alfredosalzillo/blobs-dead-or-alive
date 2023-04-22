import { Blob } from '@/lib/blob';
import React from 'react';
import Modal from '@/components/Modal';
import SvgBlob from './SvgBlob';

type LoseDialogProps = {
  onRetry: () => void,
  points: number,
  captured?: Blob[],
  open?: boolean,
}
const LoseModal: React.FC<LoseDialogProps> = ({
  onRetry, points, captured = [], open = false,
}) => (
  <Modal open={open}>
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
    <button type="button" className="action-button" onClick={onRetry}>
      RETRY
    </button>
  </Modal>
);

export default LoseModal;
