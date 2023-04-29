import React from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

type ComingSoonModalProps = {
  onContinue?: () => void,
  open?: boolean,
}
const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ onContinue, open }) => (
  <Modal open={open}>
    <Typography variant="h1">
      Coming Soon
    </Typography>
    <Typography variant="body" paragraph>
      We are working on this feature. Stay tuned!
    </Typography>
    <Button color="accent" type="button" fullWidth onClick={onContinue}>
      CONTINUE
    </Button>
  </Modal>
);

export default ComingSoonModal;
