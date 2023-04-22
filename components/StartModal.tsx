import { randomBlob } from '@/lib/blob';
import React from 'react';
import Modal from '@/components/Modal';
import WantedPoster from './WantedPoster';
import SvgBlob from './SvgBlob';

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
      <SvgBlob {...blob} />
    </WantedPoster>
    <p>
      Find the WANTED BLOB before the time end.
    </p>
    <button type="button" className="action-button" onClick={onStart}>
      START
    </button>
  </Modal>
);

export default StartModal;
