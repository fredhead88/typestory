"use client";

import Screen from "@/components/Screen";
import { CHAPTERS } from "@/lib/constants";
import { getTier, getTierLabel, RatingTier } from "@/lib/gameState";

type Props = {
  accuracy: number;
  chapter: number;
  totalChapters: number;
  onNext: () => void;
  onRetry: () => void;
};

const UNSELECTED = "bg-[#cff4ff] text-[#1a1a2e] font-bold";

const TIER_COLOURS: Record<RatingTier, string> = {
  great: "text-green-400",
  good: "text-emerald-300",
  okay: "text-yellow-300",
  bad: "text-orange-400",
  terrible: "text-red-400",
};

export default function ResultScreen({
  accuracy,
  chapter,
  totalChapters,
  onNext,
  onRetry,
}: Props) {
  const tier = getTier(accuracy);
  const label = getTierLabel(tier);
  const chapterData = CHAPTERS[chapter - 1];
  const outcomeText = chapterData.outcomes[tier];
  const isLastChapter = chapter >= totalChapters;

  return (
    <Screen>
      <div className="space-y-8 py-8 text-center">
        <p className="text-sm tracking-widest uppercase text-[#00e5ff] opacity-70">
          Chapter {chapter} of {totalChapters}
        </p>

        <div>
          <p className={`text-5xl font-bold ${TIER_COLOURS[tier]}`}>{label}</p>
          <p className="text-lg mt-2 text-gray-300">{accuracy}% accuracy</p>
        </div>

        <p className="text-lg leading-relaxed">{outcomeText}</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onRetry}
            className={`rounded-lg px-4 py-4 text-lg transition-colors ${UNSELECTED}`}
          >
            Retry
          </button>
          {!isLastChapter ? (
            <button
              onClick={onNext}
              className={`rounded-lg px-4 py-4 text-lg transition-colors ${UNSELECTED}`}
            >
              Next Chapter
            </button>
          ) : (
            <button
              onClick={onNext}
              className={`rounded-lg px-4 py-4 text-lg transition-colors ${UNSELECTED}`}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </Screen>
  );
}
