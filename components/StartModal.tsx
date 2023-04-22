import React from 'react';
import Modal from '@/components/Modal';
import ActionButton from '@/components/ActionButton';
import WantedPoster from './WantedPoster';

type StartDialogProps = {
  blob: React.ReactNode,
  onStart: () => void,
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
    <ActionButton type="button" fullWidth onClick={onStart}>
      START
    </ActionButton>
  </Modal>
);

export default StartModal;
