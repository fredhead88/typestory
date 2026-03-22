"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Screen from "@/components/Screen";

type Props = {
  sentence: string;
  chapter: number;
  totalChapters: number;
  onComplete: (accuracy: number) => void;
};

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

const IDLE_TIMEOUT = 10_000;

export default function TypingScreen({
  sentence,
  chapter,
  totalChapters,
  onComplete,
}: Props) {
  const target = normalize(sentence);
  const [typed, setTyped] = useState("");
  const [paused, setPaused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setPaused(true), IDLE_TIMEOUT);
  }, []);

  useEffect(() => {
    if (!paused) {
      inputRef.current?.focus();
      resetIdleTimer();
    }
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [paused, resetIdleTimer]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (paused) return;
    const raw = normalize(e.target.value);
    const clamped = raw.slice(0, target.length);
    setTyped(clamped);
    resetIdleTimer();

    if (clamped.length === target.length) {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      let correct = 0;
      for (let i = 0; i < target.length; i++) {
        if (clamped[i] === target[i]) correct++;
      }
      const accuracy = Math.round((correct / target.length) * 100);
      onComplete(accuracy);
    }
  }

  function handleResume() {
    setPaused(false);
  }

  const chars = target.split("").map((char, i) => {
    if (i >= typed.length) {
      return (
        <span key={i} className="text-gray-500">
          {char}
        </span>
      );
    }
    const isCorrect = typed[i] === char;
    return (
      <span key={i} className={isCorrect ? "text-green-400" : "text-red-400"}>
        {char}
      </span>
    );
  });

  return (
    <Screen>
      <div className="space-y-8 py-8">
        <p className="text-sm tracking-widest uppercase text-[#00e5ff] opacity-70 text-center">
          Chapter {chapter} of {totalChapters}
        </p>

        <div className="rounded-lg bg-[#1a1a2e] p-6 text-xl leading-relaxed font-mono tracking-wide relative">
          {chars}

          {paused && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0f0a2e]/90 rounded-lg">
              <div className="text-center space-y-4">
                <p className="text-lg font-bold">Paused</p>
                <button
                  onClick={handleResume}
                  className="rounded-lg px-6 py-3 bg-[#cff4ff] text-[#1a1a2e] font-bold transition-colors"
                >
                  Resume
                </button>
              </div>
            </div>
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={typed}
          onChange={handleChange}
          disabled={paused}
          autoFocus
          className="w-full rounded-lg px-4 py-3 bg-[#cff4ff] text-[#1a1a2e] font-bold outline-none focus:ring-2 focus:ring-[#00e5ff]"
          placeholder="Start typing..."
        />
      </div>
    </Screen>
  );
}
