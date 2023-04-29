import React from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { generateBlob } from '@/lib/blob';
import Blob from '@/components/Blob';
import WantedPoster from '@/components/WantedPoster';

const blob = generateBlob(200, 200);
type StartDialogProps = {
  onStart?: () => void,
  open?: boolean,
}
const StartModal: React.FC<StartDialogProps> = ({ onStart, open }) => (
  <Modal open={open}>
    <h1>
      Instructions
    </h1>
    <WantedPoster picture={<Blob {...blob} />} />
    <p>
      Find the WANTED BLOB before the time end.
    </p>
    <Button color="accent" type="button" fullWidth onClick={onStart}>
      START
    </Button>
  </Modal>
);

export default StartModal;
