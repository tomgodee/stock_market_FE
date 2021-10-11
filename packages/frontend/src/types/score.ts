interface Score {
  score: number;
}

interface ScoreState {
  score: number;
  topScores: {
    id: number;
    score: number;
    createdAt: string;
    user: {
      name: string;
      id: number;
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
