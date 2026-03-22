export type Gender = "male" | "female";

export type RatingTier = "great" | "good" | "okay" | "bad" | "terrible";

export type Rating = {
  chapter: number;
  score: number;
  tier: RatingTier;
};

export type BookPage = {
  text: string;
  typed: boolean;
};

export type ScreenName =
  | "questions"
  | "story"
  | "typing"
  | "result";

export type PlayerConfig = {
  name: string;
  gender: Gender;
  bookLength: number;
  answers: Record<string, string>;
};

export type GameState = {
  currentScreen: ScreenName;
  player: PlayerConfig | null;
  currentChapter: number;
  ratings: Rating[];
  lastAccuracy: number;
};

export function getTier(accuracy: number): RatingTier {
  if (accuracy >= 95) return "great";
  if (accuracy >= 80) return "good";
  if (accuracy >= 60) return "okay";
  if (accuracy >= 40) return "bad";
  return "terrible";
}

export function getTierLabel(tier: RatingTier): string {
  const labels: Record<RatingTier, string> = {
    great: "Great",
    good: "Good",
    okay: "Okay",
    bad: "Bad",
    terrible: "Terrible",
  };
  return labels[tier];
}

export function getPronoun(gender: Gender): string {
  return gender === "female" ? "her" : "his";
}
