import { BlobDescriptor } from '@/lib/blob';
import { Reducer, useEffect, useReducer } from 'react';

export type GameControllerStatus = 'start' | 'run' | 'loose';

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
export type GameControllerNextAction = GameControllerGenericAction<'next', BlobDescriptor>;
export type GameControllerUpdateElapsedAction = GameControllerGenericAction<'update-elapsed', number>;
export type GameControllerAction = GameControllerRestartAction
  | GameControllerNextAction
  | GameControllerUpdateElapsedAction;
export type GameControllerStrategy = Reducer<GameControllerState, GameControllerAction>;

export type GameController = GameControllerState & {
  // eslint-disable-next-line no-unused-vars
  next(blob: BlobDescriptor): void,
  restart(): void,
}
const useGameController = (
  strategy: GameControllerStrategy,
  initialState: GameControllerState,
): GameController => {
  const [state, dispatch] = useReducer(strategy, initialState);
  useEffect(() => {
    let request: number = 0;
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
  const next = (blob: BlobDescriptor) => dispatch({ type: 'next', payload: blob });
  const restart = () => dispatch({ type: 'restart', payload: undefined });
  return {
    ...state,
    next,
    restart,
  };
};

export default useGameController;
