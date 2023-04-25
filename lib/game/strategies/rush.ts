import { GameControllerState, GameControllerStatus, GameControllerStrategy } from '@/lib/game/use-game-controller';
import { generateBlob } from '@/lib/blob';
import { randomItem } from '@/lib/random';

export const MAX_ROUND_POINTS = 100;
export const MAX_BONUS_TIME = 2000;

export const generateRandomBlobs = (size = 9) => Array(size)
  .fill(0)
  .map(() => generateBlob(200, 200));

export const generateRound = (stage: number, status: GameControllerStatus): GameControllerState => {
  const blobs = generateRandomBlobs(9);
  return ({
    blobs,
    captured: [],
    wanted: randomItem(blobs),
    time: 3 * 1000,
    elapsed: 0,
    points: 0,
    round: stage,
    status,
  });
};

export const generateInitialState = () => generateRound(1, 'start');

const calculatePoints = (game: GameControllerState) => Math
  .round((MAX_ROUND_POINTS * (game.time - game.elapsed)) / game.time);
const calculateTimeBonus = (game: GameControllerState) => ((MAX_BONUS_TIME / 2)
  + (MAX_BONUS_TIME / (2 ** (game.round - 1))));
const nextRound = (game: GameControllerState): GameControllerState => {
  const blobs = generateRandomBlobs(game.round <= 3 ? 9 : 16);
  return ({
    blobs,
    captured: [...game.captured, game.wanted],
    wanted: randomItem(blobs),
    time: game.time - game.elapsed + calculateTimeBonus(game),
    elapsed: 0,
    points: game.points + calculatePoints(game),
    round: game.round + 1,
    status: 'run',
  });
};
const rush: GameControllerStrategy = (state, action) => {
  const updateElapsed = (elapsed: number): GameControllerState => ({
    ...state,
    elapsed,
    status: state.time === elapsed ? 'loose' : state.status,
  });
  switch (action.type) {
    case 'restart':
      return generateRound(1, 'run');
    case 'next':
      if (action.payload.id === state.wanted.id) {
        return nextRound(state);
      }
      return state;
    case 'update-elapsed':
      if (state.status !== 'run') return state;
      return updateElapsed(Math.min(state.elapsed + action.payload, state.time));
    default:
      return state;
  }
};

export default rush;
