import type React from "react";
import classes from "./LoseModal.module.scss";
import Blob from "@alfredo.salzillo/blobs/Blob";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";
import type { BlobDescriptor } from "@alfredo.salzillo/blobs";

export type LoseDialogProps = {
  onRetry?: () => void;
  onBack?: () => void;
  points: number;
  round: number;
  captured?: BlobDescriptor[];
  open?: boolean;
};
const LoseModal: React.FC<LoseDialogProps> = ({
  onRetry,
  onBack,
  points,
  round,
  captured = [],
  open = false,
}) => (
  <Modal open={open}>
    <Typography variant="h1">You LOOSE</Typography>
    <div className={classes.content}>
      <Typography variant="h2">RESULTS</Typography>
      <div className={classes.info}>
        {points} <small>POINTS</small>
      </div>
      <div className={classes.info}>
        {round} <small>ROUNDS</small>
      </div>
      <div className={classes.info}>
        {captured.length} <small>BLOBS CAPTURED</small>
      </div>
      <div className={classes.blobs}>
        {captured.map((blob) => (
          <div key={blob.id} className={classes.blob}>
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
