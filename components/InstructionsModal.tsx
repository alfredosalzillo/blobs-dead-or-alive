"use client";

import type React from "react";
import { generateBlob } from "@alfredo.salzillo/blobs";
import Blob from "@alfredo.salzillo/blobs/Blob";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";
import WantedPoster from "@/components/WantedPoster";

const blob = generateBlob(200, 200);
type InstructionsModalProps = {
  onContinue?: () => void;
  open?: boolean;
};
const InstructionsModal: React.FC<InstructionsModalProps> = ({
  onContinue,
  open,
}) => (
  <Modal open={open}>
    <Typography variant="h1">Instructions</Typography>
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
