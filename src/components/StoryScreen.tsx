"use client";

import Screen from "@/components/Screen";
import { CHAPTERS } from "@/lib/constants";
import { PlayerConfig, getPronoun } from "@/lib/gameState";

type Props = {
  player: PlayerConfig;
  chapter: number;
  onStart: () => void;
};

const UNSELECTED = "bg-[#cff4ff] text-[#1a1a2e] font-bold";

export default function StoryScreen({ player, chapter, onStart }: Props) {
  const chapterData = CHAPTERS[chapter - 1];
  const pronoun = getPronoun(player.gender);
  const companion = (player.answers.companion ?? "companion").toLowerCase();
  const place = (player.answers.place ?? "wilderness").toLowerCase();

  const introText = chapterData.intro(player.name, pronoun, companion, place);

  return (
    <Screen>
      <div className="space-y-8 py-8 text-center">
        <p className="text-sm tracking-widest uppercase text-[#00e5ff] opacity-70">
          Chapter {chapter} of {player.bookLength}
        </p>

        <div
          className="mx-auto w-full max-w-[280px]"
          dangerouslySetInnerHTML={{ __html: chapterData.svg }}
        />

        <p className="text-lg leading-relaxed">{introText}</p>

        <button
          onClick={onStart}
          className={`w-full rounded-lg px-4 py-4 text-lg transition-colors ${UNSELECTED}`}
        >
          Type Now
        </button>
      </div>
    </Screen>
  );
}
