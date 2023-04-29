'use client';

import React from 'react';

import Modal from '@/components/Modal';
import { generateBlob } from '@/lib/blob';
import Blob from '@/components/Blob';
import WantedPoster from '@/components/WantedPoster';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

const blob = generateBlob(200, 200);
type InstructionsModalProps = {
  onContinue?: () => void,
  open?: boolean,
}
const InstructionsModal: React.FC<InstructionsModalProps> = ({ onContinue, open }) => (
  <Modal open={open}>
    <Typography variant="h1">
      Instructions
    </Typography>
    <WantedPoster picture={<Blob {...blob} />} />
    <Typography variant="body" paragraph gutterTop>
      Find the WANTED BLOB before the time end.
    </Typography>
    <Button color="accent" type="button" fullWidth onClick={onContinue}>
      CONTINUE
    </Button>
  </Modal>
);

export default InstructionsModal;
