import { BlobDescriptor } from '@/lib/blob';
import React from 'react';
import Modal from '@/components/Modal';
import Blob from '@/components/Blob';
import Button from '@/components/Button';
import classes from './LoseModal.module.scss';

export type LoseDialogProps = {
  onRetry?: () => void,
  onBack?: () => void,
  points: number,
  round: number
  captured?: BlobDescriptor[],
  open?: boolean,
}
const LoseModal: React.FC<LoseDialogProps> = ({
  onRetry,
  onBack,
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
    <div className={classes.actions}>
      <Button color="accent" type="button" fullWidth onClick={onRetry}>
        RETRY
      </Button>
      <Button color="accent" type="button" fullWidth onClick={onBack}>
        BACK TO MENU
      </Button>
    </div>
  </Modal>
);

export default LoseModal;
