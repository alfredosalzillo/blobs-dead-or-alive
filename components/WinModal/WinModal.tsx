import React from 'react';

import type { BlobDescriptor } from '@/lib/blob';

import Modal from '@/components/Modal';
import Blob from '@/components/Blob';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

import classes from './WinModal.module.scss';

export type WinModalProps = {
  onRetry?: () => void,
  onBack?: () => void,
  points: number,
  round: number
  captured?: BlobDescriptor[],
  open?: boolean,
}
const WinModal: React.FC<WinModalProps> = ({
  onRetry,
  onBack,
  points,
  round,
  captured = [],
  open = false,
}) => (
  <Modal open={open}>
    <Typography variant="h1">
      You WON!
    </Typography>
    <div className={classes.content}>
      <Typography variant="h2">RESULTS</Typography>
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
        CONTINUE
      </Button>
    </div>
  </Modal>
);

export default WinModal;
