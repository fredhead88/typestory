"use client";

import { useState } from "react";
import Screen from "@/components/Screen";

type GenderOption = "female" | "male";

type BookLength = {
  label: string;
  chapters: number;
};

const BOOK_LENGTHS: BookLength[] = [
  { label: "Quick", chapters: 3 },
  { label: "Medium", chapters: 5 },
  { label: "Long", chapters: 7 },
  { label: "Epic", chapters: 10 },
];

type Question = {
  id: string;
  text: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    id: "food",
    text: "Favourite comfort food?",
    options: ["Ice cream", "Cookies", "Pizza", "Fruit"],
  },
  {
    id: "place",
    text: "Where do you feel most alive?",
    options: ["Forest", "City", "Ocean", "Mountains"],
  },
  {
    id: "companion",
    text: "Your ideal companion?",
    options: ["Cat", "Dog", "Dragon", "Wolf"],
  },
  {
    id: "colour",
    text: "Colour that feels most like you?",
    options: ["Electric blue", "Deep purple", "Burning orange", "Bright green"],
  },
  {
    id: "ending",
    text: "How should your story end?",
    options: ["Triumph", "Mystery", "Peace", "Something unexpected"],
  },
];

const UNSELECTED = "bg-[#cff4ff] text-[#1a1a2e] font-bold";
const SELECTED = "bg-black text-[#00e5ff] border-2 border-[#00e5ff] font-bold";

export default function QuestionScreen() {
  const [name, setName] = useState("Hero");
  const [gender, setGender] = useState<GenderOption | null>(null);
  const [bookLength, setBookLength] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const allAnswered =
    name.trim().length > 0 &&
    gender !== null &&
    bookLength !== null &&
    QUESTIONS.every((q) => answers[q.id] !== undefined);

  function selectAnswer(questionId: string, option: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }

  return (
    <Screen>
      <div className="space-y-10 py-8">
        {/* Name input */}
        <div>
          <label className="block text-lg font-bold mb-2">
            What is your character's name?
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg px-4 py-3 bg-[#cff4ff] text-[#1a1a2e] font-bold outline-none focus:ring-2 focus:ring-[#00e5ff]"
            placeholder="Enter a name..."
          />
        </div>

        {/* Gender picker */}
        <div>
          <p className="text-lg font-bold mb-2">Your character is...</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setGender("female")}
              className={`rounded-lg px-4 py-3 transition-colors ${gender === "female" ? SELECTED : UNSELECTED}`}
            >
              A girl (she/her)
            </button>
            <button
              onClick={() => setGender("male")}
              className={`rounded-lg px-4 py-3 transition-colors ${gender === "male" ? SELECTED : UNSELECTED}`}
            >
              A boy (he/him)
            </button>
          </div>
        </div>

        {/* Book length picker */}
        <div>
          <p className="text-lg font-bold mb-2">How long should your story be?</p>
          <div className="grid grid-cols-2 gap-3">
            {BOOK_LENGTHS.map((bl) => (
              <button
                key={bl.chapters}
                onClick={() => setBookLength(bl.chapters)}
                className={`rounded-lg px-4 py-3 transition-colors ${bookLength === bl.chapters ? SELECTED : UNSELECTED}`}
              >
                {bl.label} ({bl.chapters} chapters)
              </button>
            ))}
          </div>
        </div>

        {/* Personality questions */}
        {QUESTIONS.map((q) => (
          <div key={q.id}>
            <p className="text-lg font-bold mb-2">{q.text}</p>
            <div className="grid grid-cols-2 gap-3">
              {q.options.map((option) => (
                <button
                  key={option}
                  onClick={() => selectAnswer(q.id, option)}
                  className={`rounded-lg px-4 py-3 transition-colors ${answers[q.id] === option ? SELECTED : UNSELECTED}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Start button */}
        {allAnswered && (
          <button className="w-full rounded-lg bg-[#00e5ff] text-[#1a1a2e] font-bold py-4 text-lg transition-colors hover:bg-[#00c4db]">
            Start the Story
          </button>
        )}
      </div>
    </Screen>
  );
}
