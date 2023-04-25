import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

type ComingSoonModalProps = {
  onContinue?: () => void,
  open?: boolean,
}
const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ onContinue, open }) => (
  <Modal open={open}>
    <h1>
      Coming Soon
    </h1>
    <p>
      We are working on this feature. Stay tuned!
    </p>
    <Button color="accent" type="button" fullWidth onClick={onContinue}>
      CONTINUE
    </Button>
  </Modal>
);

export default ComingSoonModal;
