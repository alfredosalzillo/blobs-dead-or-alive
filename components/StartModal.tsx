import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import WantedPoster from './WantedPoster';

type StartDialogProps = {
  blob: React.ReactNode,
  onStart?: () => void,
  open?: boolean,
}
const StartModal: React.FC<StartDialogProps> = ({ blob, onStart, open }) => (
  <Modal open={open}>
    <h1>
      Instructions
    </h1>
    <WantedPoster picture={blob} />
    <p>
      Find the WANTED BLOB before the time end.
    </p>
    <Button color="accent" type="button" fullWidth onClick={onStart}>
      START
    </Button>
  </Modal>
);

export default StartModal;
