import type { BlobDescriptor } from '@/lib/blob';
import type { GameControllerState, GameControllerStrategy } from '@/lib/game/use-game-controller';

export type Round = {
  blobs: BlobDescriptor[],
  wanted: BlobDescriptor,
  time: number,
  points: number,
}
export type Stage = Round[]

export const createInitialState = (stage: Stage): GameControllerState => ({
  ...stage[0],
  captured: [],
  round: 1,
  points: 0,
  elapsed: 0,
  status: 'start',
});

// eslint-disable-next-line no-unused-vars
type RoundStrategyFactory = (stage: Stage) => GameControllerStrategy
export const createStageStrategy: RoundStrategyFactory = (
  stage,
) => (state, action) => {
  const currentRound = stage[state.round - 1];
  const updateElapsed = (elapsed: number): GameControllerState => ({
    ...state,
    elapsed,
    status: state.time === elapsed ? 'loose' : state.status,
  });
  switch (action.type) {
    case 'restart':
      return {
        ...createInitialState(stage),
        status: 'run',
      };
    case 'capture':
      if (state.status !== 'run') return state;
      if (!(action.payload.id === state.wanted.id)) return state;
      if (state.round < stage.length) {
        return {
          ...state,
          ...(stage[state.round] || {}),
          captured: [...state.captured, state.wanted],
          points: state.points
            + Math.round((currentRound.points * (state.time - state.elapsed)) / state.time),
          time: state.time - state.elapsed + stage[state.round].time,
          elapsed: 0,
          round: state.round + 1,
          status: 'run',
        };
      }
      return {
        ...state,
        captured: [...state.captured, state.wanted],
        points: state.points
          + Math.round((currentRound.points * (state.time - state.elapsed)) / state.time),
        status: 'win',
      };
    case 'update-elapsed':
      if (state.status !== 'run') return state;
      return updateElapsed(Math.min(state.elapsed + action.payload, state.time));
    default:
      return state;
  }
};
