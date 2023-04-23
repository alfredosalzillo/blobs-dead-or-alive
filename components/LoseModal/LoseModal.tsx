import { BlobDescriptor } from '@/lib/blob';
import React from 'react';
import Modal from '@/components/Modal';
import ActionButton from '@/components/ActionButton';
import Blob from '@/components/Blob';
import classes from './LoseModal.module.scss';

export type LoseDialogProps = {
  onRetry: () => void,
  points: number,
  round: number
  captured?: BlobDescriptor[],
  open?: boolean,
}
const LoseModal: React.FC<LoseDialogProps> = ({
  onRetry,
  points,
  round,
  captured = [],
  open = false,
}) => (
  <Modal open={open}>
    <h1>
      You LOOSE
    </h1>
    <div className={classes.content}>
      <h2>RESULTS</h2>
      <div className={classes.info}>
        {points}
        {' '}
        <small>
          POINTS
        </small>
      </div>
      <div className={classes.info}>
        {round}
        {' '}
        <small>
          ROUNDS
        </small>
      </div>
      <div className={classes.info}>
        {captured.length}
        {' '}
        <small>BLOBS CAPTURED</small>
      </div>
      <div className={classes.blobs}>
        {captured.map((blob) => (
          <div
            key={blob.id}
            className={classes.blob}
          >
            <Blob key={blob.id} {...blob} />
          </div>
        ))}
      </div>
    </div>
    <ActionButton type="button" fullWidth onClick={onRetry}>
      RETRY
    </ActionButton>
  </Modal>
);

export default LoseModal;
