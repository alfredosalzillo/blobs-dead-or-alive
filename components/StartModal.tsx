import React from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { generateBlob } from '@/lib/blob';
import Blob from '@/components/Blob';
import WantedPoster from '@/components/WantedPoster';
import Typography from '@/components/Typography';

const blob = generateBlob(200, 200);
type StartDialogProps = {
  onStart?: () => void,
  open?: boolean,
}
const StartModal: React.FC<StartDialogProps> = ({ onStart, open }) => (
  <Modal open={open}>
    <Typography variant="h1">
      Instructions
    </Typography>
    <WantedPoster picture={<Blob {...blob} />} />
    <Typography variant="body" paragraph gutterTop>
      Find the WANTED BLOB before the time end.
    </Typography>
    <Button color="accent" type="button" fullWidth onClick={onStart}>
      START
    </Button>
  </Modal>
);

export default StartModal;
