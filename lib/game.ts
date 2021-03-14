import { Blob, randomBlob } from './blob.ts';
import { randomItem } from './random.ts';

export type Game = {
  blobs: Blob[],
  captured: Blob[],
  wanted: Blob,
  points: number,
  elapsed: number,
  time: number,
  round: number,
}
export type GameStatus = 'start' | 'run' | 'loose'

export const BOARD_SIZE = 4;
export const MAX_ROUND_POINTS = 100;
export const MAX_BONUS_TIME = 2000;

export const generateRandomBlobs = () => Array(BOARD_SIZE * BOARD_SIZE)
  .fill(0)
  .map(() => randomBlob(200, 200));

export const initialRound = (stage = 1): Game => {
  const blobs = generateRandomBlobs();
  return ({
    blobs: blobs,
    captured: [],
    wanted: randomItem(blobs),
    time: 3*1000,
    elapsed: 0,
    points: 0,
    round: stage,
  });
}

export const calculatePoints = (game: Game) => Math
  .round(MAX_ROUND_POINTS * (game.time - game.elapsed) / game.time)
export const calculateTimeBonus = (game: Game) => (MAX_BONUS_TIME / 2) + (MAX_BONUS_TIME /  (2 ** (game.round - 1)));
export const nextRound = (game: Game): Game => {
  const blobs = generateRandomBlobs();
  return ({
    blobs: blobs,
    captured: [...game.captured, game.wanted],
    wanted: randomItem(blobs),
    time: game.time - game.elapsed + calculateTimeBonus(game),
    elapsed: 0,
    points: game.points + calculatePoints(game),
    round: game.round + 1,
  });
}
export const getStatus = (game: Game): GameStatus => {
  if (game.round === 0) return 'start'
  if (game.elapsed >= game.time) return 'loose'
  return 'run'
}
