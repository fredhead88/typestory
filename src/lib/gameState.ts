export type Gender = "male" | "female" | "other";

export type Rating = {
  chapter: number;
  score: number;
};

export type BookPage = {
  text: string;
  typed: boolean;
};

export type ScreenName =
  | "title"
  | "nameEntry"
  | "genderSelect"
  | "personality"
  | "chapter"
  | "results";

export type GameState = {
  playerName: string;
  gender: Gender | null;
  personalityAnswers: string[];
  currentChapter: number;
  ratings: Rating[];
  bookPages: BookPage[];
  currentScreen: ScreenName;
};
