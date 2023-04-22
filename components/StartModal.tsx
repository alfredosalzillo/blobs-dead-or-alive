import { randomBlob } from '@/lib/blob';
import React from 'react';
import Modal from '@/components/Modal';
import ActionButton from '@/components/ActionButton';
import Blob from '@/components/Blob';
import WantedPoster from './WantedPoster';

const blob = randomBlob(200, 200);

type StartDialogProps = {
  onStart: () => void,
  open?: boolean,
}
const StartModal: React.FC<StartDialogProps> = ({ onStart, open }) => (
  <Modal open={open}>
    <h1>
      Instructions
    </h1>
    <WantedPoster>
      <Blob {...blob} />
    </WantedPoster>
    <p>
      Find the WANTED BLOB before the time end.
    </p>
    <ActionButton type="button" fullWidth onClick={onStart}>
      START
    </ActionButton>
  </Modal>
);

export default StartModal;
