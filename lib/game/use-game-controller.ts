import { useEffect, useReducer } from 'react';

import type { Reducer } from 'react';
import type { BlobDescriptor } from '@/lib/blob';

export type GameControllerStatus = 'start' | 'run' | 'loose' | 'win';

export type GameControllerState = {
  blobs: BlobDescriptor[],
  captured: BlobDescriptor[],
  wanted: BlobDescriptor,
  points: number,
  elapsed: number,
  time: number,
  round: number,
  status: GameControllerStatus,
}

export type GameControllerGenericAction<Type, Payload> = {
  type: Type,
  payload: Payload,
}
export type GameControllerRestartAction = GameControllerGenericAction<'restart', void>;
export type GameControllerCaptureAction = GameControllerGenericAction<'capture', BlobDescriptor>;
export type GameControllerUpdateElapsedAction = GameControllerGenericAction<'update-elapsed', number>;
export type GameControllerAction = GameControllerRestartAction
  | GameControllerCaptureAction
  | GameControllerUpdateElapsedAction;
export type GameControllerStrategy = Reducer<GameControllerState, GameControllerAction>;

export type GameController = GameControllerState & {
  // eslint-disable-next-line no-unused-vars
  capture(blob: BlobDescriptor): void,
  restart(): void,
}
const useGameController = (
  strategy: GameControllerStrategy,
  initialState: GameControllerState,
): GameController => {
  const [state, dispatch] = useReducer(strategy, initialState);
  useEffect(() => {
    let request = 0;
    let last = 0;
    const updateElapsed = () => {
      request = window.requestAnimationFrame((timestamp) => {
        const diff = timestamp - last;
        dispatch({ type: 'update-elapsed', payload: diff });
        last = timestamp;
        updateElapsed();
      });
    };
    updateElapsed();
    return () => window.cancelAnimationFrame(request);
  }, []);
  const capture = (blob: BlobDescriptor) => dispatch({ type: 'capture', payload: blob });
  const restart = () => dispatch({ type: 'restart', payload: undefined });
  return {
    ...state,
    capture,
    restart,
  };
};

export default useGameController;
