import * as fs from "node:fs";
import { generateRandomBlobs } from "@/lib/game/strategies/rush";
import type { Round } from "@/lib/game/strategies/stage";

type RoundDescriptor = {
  blobs: number;
  wanted: number;
  points: number;
  time: number;
};
type GenerateStageOptions = {
  rounds: RoundDescriptor[];
  out: string;
};

const generateRound = (round: RoundDescriptor): Round => {
  if (Math.sqrt(round.blobs) % 1 !== 0) {
    throw new Error("blobs must be a square number");
  }
  if (round.wanted >= round.blobs) {
    throw new Error("wanted must be smaller than blobs");
  }
  if (round.wanted < 0) {
    throw new Error("wanted must be positive");
  }
  if (round.points < 0) {
    throw new Error("points must be positive");
  }
  if (round.time < 0) {
    throw new Error("time must be positive");
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

const stagesDescriptors = [
  // STAGE 1 (Already exists, but we can re-generate or keep as reference)
  {
    rounds: [
      { blobs: 9, wanted: 5, points: 75, time: 3000 },
      { blobs: 9, wanted: 3, points: 100, time: 2500 },
      { blobs: 9, wanted: 6, points: 100, time: 2500 },
      { blobs: 9, wanted: 8, points: 150, time: 2000 },
      { blobs: 9, wanted: 2, points: 150, time: 2000 },
    ],
    out: "campaign/stage-1.json",
  },
  // STAGE 2
  {
    rounds: [
      { blobs: 9, wanted: 4, points: 100, time: 2500 },
      { blobs: 9, wanted: 1, points: 100, time: 2500 },
      { blobs: 9, wanted: 7, points: 125, time: 2200 },
      { blobs: 9, wanted: 3, points: 125, time: 2200 },
      { blobs: 9, wanted: 0, points: 175, time: 1800 },
    ],
    out: "campaign/stage-2.json",
  },
  // STAGE 3
  {
    rounds: [
      { blobs: 9, wanted: 2, points: 125, time: 2200 },
      { blobs: 9, wanted: 5, points: 125, time: 2200 },
      { blobs: 9, wanted: 8, points: 150, time: 2000 },
      { blobs: 9, wanted: 1, points: 150, time: 2000 },
      { blobs: 9, wanted: 4, points: 200, time: 1500 },
    ],
    out: "campaign/stage-3.json",
  },
  // STAGE 4 (Intro 16 blobs)
  {
    rounds: [
      { blobs: 16, wanted: 10, points: 150, time: 3000 },
      { blobs: 16, wanted: 5, points: 150, time: 3000 },
      { blobs: 16, wanted: 15, points: 175, time: 2500 },
      { blobs: 16, wanted: 2, points: 175, time: 2500 },
      { blobs: 16, wanted: 7, points: 225, time: 2000 },
    ],
    out: "campaign/stage-4.json",
  },
  // STAGE 5
  {
    rounds: [
      { blobs: 16, wanted: 12, points: 175, time: 2500 },
      { blobs: 16, wanted: 4, points: 175, time: 2500 },
      { blobs: 16, wanted: 8, points: 200, time: 2200 },
      { blobs: 16, wanted: 0, points: 200, time: 2200 },
      { blobs: 16, wanted: 14, points: 250, time: 1800 },
    ],
    out: "campaign/stage-5.json",
  },
  // STAGE 6
  {
    rounds: [
      { blobs: 16, wanted: 6, points: 200, time: 2200 },
      { blobs: 16, wanted: 11, points: 200, time: 2200 },
      { blobs: 16, wanted: 1, points: 225, time: 1800 },
      { blobs: 16, wanted: 13, points: 225, time: 1800 },
      { blobs: 16, wanted: 9, points: 300, time: 1500 },
    ],
    out: "campaign/stage-6.json",
  },
  // STAGE 7 (Intro 25 blobs if supported, otherwise stay 16 with less time)
  {
    rounds: [
      { blobs: 16, wanted: 3, points: 225, time: 1800 },
      { blobs: 16, wanted: 10, points: 225, time: 1800 },
      { blobs: 16, wanted: 5, points: 250, time: 1500 },
      { blobs: 16, wanted: 12, points: 250, time: 1500 },
      { blobs: 16, wanted: 8, points: 350, time: 1200 },
    ],
    out: "campaign/stage-7.json",
  },
  // STAGE 8
  {
    rounds: [
      { blobs: 16, wanted: 14, points: 250, time: 1500 },
      { blobs: 16, wanted: 0, points: 250, time: 1500 },
      { blobs: 16, wanted: 7, points: 300, time: 1200 },
      { blobs: 16, wanted: 2, points: 300, time: 1200 },
      { blobs: 16, wanted: 15, points: 400, time: 1000 },
    ],
    out: "campaign/stage-8.json",
  },
  // STAGE 9
  {
    rounds: [
      { blobs: 16, wanted: 11, points: 300, time: 1200 },
      { blobs: 16, wanted: 4, points: 300, time: 1200 },
      { blobs: 16, wanted: 9, points: 350, time: 1000 },
      { blobs: 16, wanted: 1, points: 350, time: 1000 },
      { blobs: 16, wanted: 13, points: 500, time: 800 },
    ],
    out: "campaign/stage-9.json",
  },
  // STAGE 10
  {
    rounds: [
      { blobs: 16, wanted: 6, points: 400, time: 1000 },
      { blobs: 16, wanted: 3, points: 400, time: 1000 },
      { blobs: 16, wanted: 10, points: 500, time: 800 },
      { blobs: 16, wanted: 12, points: 500, time: 800 },
      { blobs: 16, wanted: 5, points: 1000, time: 600 },
    ],
    out: "campaign/stage-10.json",
  },
];

for (const descriptor of stagesDescriptors) {
  generateStage(descriptor);
}
