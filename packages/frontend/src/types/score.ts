interface Score {
  score: number;
}

interface ScoreState {
  score: number;
  topScores: {
    score: number;
    user: {
      name: string;
    };
  }[];
}

interface ScorePayload {
  score: number;
  userId: number;
}

export type {
  Score,
  ScoreState,
  ScorePayload,
};
