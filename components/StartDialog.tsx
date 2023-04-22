import { randomBlob } from '@/lib/blob';
import React from 'react';
import WantedPoster from './WantedPoster';
import SvgBlob from './SvgBlob';

type StartDialogProps = {
  onClickStart: () => void,
}
const StartDialog = ({ onClickStart }: StartDialogProps) => (
  <div className="dialog-backdrop">
    <dialog className="dialog" open>
      <h1>
        Instructions
      </h1>
      <WantedPoster>
        <SvgBlob {...randomBlob(200, 200)} />
      </WantedPoster>
      <p>
        Find the WANTED BLOB before the time end.
      </p>
      <button type="button" className="action-button" onClick={onClickStart}>
        START
      </button>
    </dialog>
  </div>
);

export default StartDialog;
