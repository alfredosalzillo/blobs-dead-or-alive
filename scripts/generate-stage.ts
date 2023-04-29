import { Round } from '@/lib/game/strategies/stage';
import { generateRandomBlobs } from '@/lib/game/strategies/rush';

import * as fs from 'node:fs';

type RoundDescriptor = {
  blobs: number,
  wanted: number,
  points: number,
  time: number,
}
type GenerateStageOptions = {
  rounds: RoundDescriptor[],
  out: string,
}

const generateRound = (round: RoundDescriptor): Round => {
  if (Math.sqrt(round.blobs) % 1 !== 0) {
    throw new Error('blobs must be a square number');
  }
  if (round.wanted >= round.blobs) {
    throw new Error('wanted must be smaller than blobs');
  }
  if (round.wanted < 0) {
    throw new Error('wanted must be positive');
  }
  if (round.points < 0) {
    throw new Error('points must be positive');
  }
  if (round.time < 0) {
    throw new Error('time must be positive');
  }
  const blobs = generateRandomBlobs(round.blobs);
  return {
    blobs,
    time: round.time,
    points: round.points,
    wanted: blobs[round.wanted],
  };
};
const generateStage = (options: GenerateStageOptions) => {
  const stage = options.rounds.map(generateRound);
  const data = JSON.stringify(stage, null, 2);
  fs.writeFileSync(options.out, data);
};

generateStage({
  rounds: [
    {
      blobs: 9, wanted: 5, points: 75, time: 3000,
    },
    {
      blobs: 9, wanted: 3, points: 100, time: 2500,
    },
    {
      blobs: 9, wanted: 6, points: 100, time: 2500,
    },
    {
      blobs: 9, wanted: 8, points: 150, time: 2000,
    },
    {
      blobs: 9, wanted: 2, points: 150, time: 2000,
    },
  ],
  out: 'campaign/stage-1.json',
});
