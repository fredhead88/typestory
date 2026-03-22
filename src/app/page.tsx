"use client";

import { useState } from "react";
import QuestionScreen from "@/components/QuestionScreen";
import StoryScreen from "@/components/StoryScreen";
import TypingScreen from "@/components/TypingScreen";
import ResultScreen from "@/components/ResultScreen";
import { TYPING_SENTENCES } from "@/lib/constants";
import { GameState, PlayerConfig, getTier } from "@/lib/gameState";

export default function Home() {
  const [game, setGame] = useState<GameState>({
    currentScreen: "questions",
    player: null,
    currentChapter: 1,
    ratings: [],
    lastAccuracy: 0,
  });

  function handleStart(config: PlayerConfig) {
    setGame((prev) => ({
      ...prev,
      player: config,
      currentScreen: "story",
      currentChapter: 1,
    }));
  }

  function handleTypeNow() {
    setGame((prev) => ({ ...prev, currentScreen: "typing" }));
  }

  function handleTypingComplete(accuracy: number) {
    setGame((prev) => ({
      ...prev,
      lastAccuracy: accuracy,
      currentScreen: "result",
    }));
  }

  function handleNext() {
    setGame((prev) => {
      const tier = getTier(prev.lastAccuracy);
      const newRatings = [
        ...prev.ratings,
        { chapter: prev.currentChapter, score: prev.lastAccuracy, tier },
      ];
      const nextChapter = prev.currentChapter + 1;
      const totalChapters = prev.player!.bookLength;

      if (nextChapter > totalChapters) {
        return {
          ...prev,
          ratings: newRatings,
          currentScreen: "questions",
          currentChapter: 1,
          player: null,
          lastAccuracy: 0,
        };
      }

      return {
        ...prev,
        ratings: newRatings,
        currentChapter: nextChapter,
        currentScreen: "story",
      };
    });
  }

  function handleRetry() {
    setGame((prev) => ({ ...prev, currentScreen: "typing", lastAccuracy: 0 }));
  }

  const sentenceIndex = (game.currentChapter - 1) % TYPING_SENTENCES.length;

  switch (game.currentScreen) {
    case "questions":
      return <QuestionScreen onStart={handleStart} />;
    case "story":
      return (
        <StoryScreen
          player={game.player!}
          chapter={game.currentChapter}
          onStart={handleTypeNow}
        />
      );
    case "typing":
      return (
        <TypingScreen
          key={`${game.currentChapter}-${game.lastAccuracy}`}
          sentence={TYPING_SENTENCES[sentenceIndex]}
          chapter={game.currentChapter}
          totalChapters={game.player!.bookLength}
          onComplete={handleTypingComplete}
        />
      );
    case "result":
      return (
        <ResultScreen
          accuracy={game.lastAccuracy}
          chapter={game.currentChapter}
          totalChapters={game.player!.bookLength}
          onNext={handleNext}
          onRetry={handleRetry}
        />
      );
  }
}
