export type ChapterData = {
  id: number;
  intro: (name: string, pronoun: string, companion: string, place: string) => string;
  outcomes: {
    great: string;
    good: string;
    okay: string;
    bad: string;
    terrible: string;
  };
  svg: string;
};

export const TYPING_SENTENCES: string[] = [
  "the ancient door creaked open and a warm golden light spilled into the darkness ahead",
  "shadows danced along the cavern walls as the fire crackled and sparked in the night",
  "a sudden gust of wind carried the scent of wildflowers across the open meadow",
  "the old map revealed a hidden path that wound through the heart of the mountain",
  "crystal clear water rushed over smooth stones in the stream beside the trail",
  "thunder rumbled in the distance and the sky turned a deep shade of violet",
  "the forest canopy parted to reveal a sky full of stars and a bright silver moon",
  "footsteps echoed through the empty hall as dust swirled in beams of pale light",
  "a strange melody floated on the breeze drawing all who heard it closer to the source",
  "the bridge swayed gently over the chasm and beyond it stood the tower of glass",
];

export const CHAPTERS: ChapterData[] = [
  {
    id: 1,
    intro: (name, pronoun, companion, place) =>
      `${name} stepped into the ${place} for the first time, ${pronoun} faithful ${companion} close behind. The air was thick with mystery and the faint hum of something ancient.`,
    outcomes: {
      great: "The path ahead shimmered with promise. Every step felt sure and steady, as if the world itself bent to welcome the journey.",
      good: "The trail was clear and the spirits were high. A solid start to an adventure that promised much more ahead.",
      okay: "The first steps were uncertain but not without hope. The road stretched on, waiting to be conquered.",
      bad: "Stumbling through the unfamiliar terrain, the journey began on shaky ground. But there was still time to find footing.",
      terrible: "Nothing went as planned. The path twisted and turned in confusion, and doubt crept in like fog through the trees.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><circle cx="160" cy="30" r="15" fill="#00e5ff" opacity="0.3"/><path d="M0 80 Q50 50 100 75 T200 65 V120 H0Z" fill="#1a3a4a"/><path d="M0 90 Q60 70 120 85 T200 80 V120 H0Z" fill="#0d2a3a"/><line x1="80" y1="60" x2="80" y2="90" stroke="#3a5a4a" stroke-width="2"/><circle cx="80" cy="55" r="10" fill="#2a5a4a"/></svg>`,
  },
  {
    id: 2,
    intro: (name, pronoun, companion, place) =>
      `Deep within the ${place}, ${name} found an old stone marker covered in symbols. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${companion} sniffed at it cautiously.`,
    outcomes: {
      great: "The symbols glowed bright under touch, revealing a hidden message that would guide the way forward with perfect clarity.",
      good: "Most of the symbols could be read. The message was not complete, but enough to point in the right direction.",
      okay: "A few symbols made sense, enough to press on with cautious optimism. The rest remained a puzzle for another day.",
      bad: "The symbols blurred together. The meaning stayed locked away, and the path forward grew less certain.",
      terrible: "The stone crumbled at the touch, taking its secrets with it. The way forward was now a total guess.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><rect x="70" y="30" width="60" height="80" rx="5" fill="#2a2a4e"/><line x1="85" y1="50" x2="115" y2="50" stroke="#00e5ff" stroke-width="1" opacity="0.5"/><line x1="85" y1="60" x2="115" y2="60" stroke="#00e5ff" stroke-width="1" opacity="0.5"/><line x1="85" y1="70" x2="115" y2="70" stroke="#00e5ff" stroke-width="1" opacity="0.5"/><circle cx="100" cy="90" r="8" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.4"/></svg>`,
  },
  {
    id: 3,
    intro: (name, pronoun, companion, place) =>
      `The ${place} grew darker as ${name} pressed on. Strange sounds echoed around every corner, but ${pronoun} ${companion} stayed close, ears alert.`,
    outcomes: {
      great: "Every sound was tracked and every shadow understood. The darkness held no fear for one so prepared.",
      good: "The noises were unsettling but manageable. Steady nerves carried the pair through the darkest stretch.",
      okay: "A few wrong turns and a couple of scares, but nothing that could not be overcome with persistence.",
      bad: "The darkness felt heavy and disorienting. Progress was slow, and confidence wavered with each strange echo.",
      terrible: "Panic set in as the shadows closed in. The way back was lost and the way forward was no better.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0a0820"/><circle cx="100" cy="60" r="40" fill="#0f0a2e"/><circle cx="100" cy="60" r="20" fill="#1a1a3e"/><circle cx="100" cy="60" r="5" fill="#00e5ff" opacity="0.6"/><circle cx="50" cy="40" r="2" fill="#00e5ff" opacity="0.2"/><circle cx="150" cy="80" r="2" fill="#00e5ff" opacity="0.2"/><circle cx="160" cy="30" r="1" fill="#00e5ff" opacity="0.3"/></svg>`,
  },
  {
    id: 4,
    intro: (name, pronoun, companion, place) =>
      `A rushing river cut through the ${place}, blocking the path. ${name} looked at ${pronoun} ${companion} and knew they had to find another way across.`,
    outcomes: {
      great: "A hidden crossing was found with ease. The river was conquered swiftly, and the far bank greeted them like an old friend.",
      good: "The crossing was rough but successful. Wet boots and a racing heart were a small price to pay.",
      okay: "It took several attempts to find safe footing. The crossing was sloppy but complete.",
      bad: "The current was stronger than expected. Supplies were lost and spirits dampened by the struggle.",
      terrible: "The river nearly won. Swept downstream and battered, reaching the far bank felt less like victory and more like survival.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><path d="M0 60 Q25 50 50 60 T100 60 T150 60 T200 60 V120 H0Z" fill="#0a3a5a"/><path d="M0 70 Q25 65 50 70 T100 70 T150 70 T200 70 V120 H0Z" fill="#083050"/><rect x="85" y="40" width="30" height="5" rx="2" fill="#3a3a2e"/><line x1="90" y1="40" x2="90" y2="25" stroke="#3a5a4a" stroke-width="1"/><line x1="110" y1="40" x2="110" y2="25" stroke="#3a5a4a" stroke-width="1"/></svg>`,
  },
  {
    id: 5,
    intro: (name, pronoun, companion, place) =>
      `In the heart of the ${place}, ${name} discovered a clearing where the air hummed with energy. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${companion} pawed at something glowing beneath the leaves.`,
    outcomes: {
      great: "The glowing object was a key, perfectly preserved. It fit the lock that had stopped so many others before.",
      good: "The object pulsed with light when held. Its purpose was not fully clear, but its power was undeniable.",
      okay: "The glow faded quickly once disturbed. Something useful was gained, but the full potential was missed.",
      bad: "The object shattered into dim fragments. Only a faint warmth remained as a reminder of what could have been.",
      terrible: "The ground collapsed where the glow had been. Nothing was gained and the clearing was now impassable.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><circle cx="100" cy="70" r="25" fill="#00e5ff" opacity="0.1"/><circle cx="100" cy="70" r="15" fill="#00e5ff" opacity="0.15"/><circle cx="100" cy="70" r="8" fill="#00e5ff" opacity="0.3"/><path d="M60 100 Q80 85 100 90 T140 100" fill="#1a3a2e"/><circle cx="40" cy="50" r="15" fill="#1a3a2a" opacity="0.5"/><circle cx="160" cy="45" r="12" fill="#1a3a2a" opacity="0.5"/></svg>`,
  },
  {
    id: 6,
    intro: (name, pronoun, companion, place) =>
      `A tall stranger appeared at the edge of the ${place} and called out to ${name} by name. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${companion} growled low but did not attack.`,
    outcomes: {
      great: "The stranger was an ally in disguise, offering a gift that would prove invaluable in the chapters to come.",
      good: "The stranger shared a useful piece of advice before vanishing into the mist. Trustworthy enough, it seemed.",
      okay: "The encounter was strange and brief. The stranger left behind more questions than answers.",
      bad: "The stranger's words were a riddle wrapped in a warning. Confusion lingered long after they departed.",
      terrible: "It was a trap. The stranger's smile hid a snare, and escaping cost precious time and energy.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><line x1="100" y1="40" x2="100" y2="100" stroke="#4a4a6e" stroke-width="2"/><circle cx="100" cy="30" r="10" fill="#4a4a6e"/><line x1="100" y1="55" x2="80" y2="75" stroke="#4a4a6e" stroke-width="2"/><line x1="100" y1="55" x2="120" y2="75" stroke="#4a4a6e" stroke-width="2"/><circle cx="100" cy="30" r="15" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.3"/></svg>`,
  },
  {
    id: 7,
    intro: (name, pronoun, companion, place) =>
      `The ground shook as ${name} entered the deepest part of the ${place}. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${companion} pressed close, trembling but brave.`,
    outcomes: {
      great: "The tremors subsided as if calmed by sheer determination. The deepest chamber revealed its treasure without a fight.",
      good: "Navigating the unstable ground was tough but not impossible. The reward at the end was well worth the risk.",
      okay: "Some ground was gained, some was lost. The shaking made progress unpredictable but not impossible.",
      bad: "A rockfall blocked the main path. The detour was long and exhausting, sapping what energy remained.",
      terrible: "The ground gave way completely. Falling into a lower cavern, the only way was down, further from the goal.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><path d="M0 80 L30 75 L50 85 L80 70 L110 80 L140 72 L170 82 L200 75 V120 H0Z" fill="#2a1a3e"/><path d="M60 70 L70 50 L80 70Z" fill="#3a2a4e"/><path d="M120 65 L135 40 L150 65Z" fill="#3a2a4e"/><line x1="90" y1="78" x2="95" y2="72" stroke="#00e5ff" stroke-width="1" opacity="0.3"/><line x1="92" y1="78" x2="97" y2="72" stroke="#00e5ff" stroke-width="1" opacity="0.3"/></svg>`,
  },
  {
    id: 8,
    intro: (name, pronoun, companion, place) =>
      `${name} climbed to a high ridge overlooking the entire ${place}. From up here, ${pronoun} ${companion} beside them, the world looked vast and full of possibility.`,
    outcomes: {
      great: "The view from the top revealed the final destination clearly. Every twist and turn of the remaining path was mapped in an instant.",
      good: "The vantage point was valuable. Most of the route ahead could be seen, and the end was closer than expected.",
      okay: "Clouds obscured parts of the view, but enough was visible to plan the next few steps with some confidence.",
      bad: "A storm rolled in before the view could be fully studied. The descent was hasty and the plan incomplete.",
      terrible: "The ridge crumbled at the edge. The fall was short but painful, and the view was forgotten in the chaos.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><path d="M0 120 L60 50 L100 40 L140 55 L200 120Z" fill="#1a1a3e"/><circle cx="100" cy="20" r="10" fill="#00e5ff" opacity="0.2"/><circle cx="30" cy="15" r="1" fill="#fff" opacity="0.5"/><circle cx="70" cy="10" r="1" fill="#fff" opacity="0.5"/><circle cx="150" cy="12" r="1" fill="#fff" opacity="0.5"/><circle cx="170" cy="25" r="1" fill="#fff" opacity="0.5"/></svg>`,
  },
  {
    id: 9,
    intro: (name, pronoun, companion, place) =>
      `Near the edge of the ${place}, ${name} found a door carved into solid rock. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${companion} sat and waited, as if knowing this was something ${name} had to face alone.`,
    outcomes: {
      great: "The door opened to a final test of wit and nerve, passed with flying colours. What waited beyond was more than reward.",
      good: "The challenge behind the door was met with steady hands. Not perfect, but more than enough to earn passage.",
      okay: "The test was harder than expected. Scraping through by sheer will, the passage was earned but barely.",
      bad: "The door's challenge proved nearly overwhelming. Passage was granted, but at a cost that would be felt.",
      terrible: "The door slammed shut after a failed attempt. A second try was needed, and the delay weighed heavy.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><rect x="70" y="20" width="60" height="90" rx="3" fill="#1a1a3e" stroke="#3a3a5e" stroke-width="2"/><circle cx="120" cy="65" r="3" fill="#00e5ff" opacity="0.5"/><rect x="75" y="25" width="50" height="80" rx="2" fill="#0a0820"/><path d="M85 25 L85 105" stroke="#1a1a3e" stroke-width="1" opacity="0.5"/></svg>`,
  },
  {
    id: 10,
    intro: (name, pronoun, companion, place) =>
      `This was it. The final stretch of the ${place} lay before ${name}. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${companion} looked up with bright eyes, ready for whatever came next.`,
    outcomes: {
      great: "The story ended in glory. Every challenge had been met, every test passed. The adventure would be remembered forever.",
      good: "A strong finish to a worthy journey. Not every moment was perfect, but the ending felt right and earned.",
      okay: "The final steps were unsteady but completed. The adventure was done, and that alone was something to be proud of.",
      bad: "The ending came with more struggle than triumph. The journey was complete, but the scars would take time to heal.",
      terrible: "It was over, but it did not feel like a victory. The road had been long and brutal, and the ending reflected that.",
    },
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#0f0a2e"/><circle cx="100" cy="50" r="30" fill="#00e5ff" opacity="0.1"/><circle cx="100" cy="50" r="20" fill="#00e5ff" opacity="0.15"/><circle cx="100" cy="50" r="10" fill="#00e5ff" opacity="0.25"/><path d="M70 90 Q85 80 100 85 T130 90" fill="#1a3a4a"/><line x1="100" y1="50" x2="100" y2="35" stroke="#00e5ff" stroke-width="1" opacity="0.4"/><line x1="100" y1="50" x2="115" y2="50" stroke="#00e5ff" stroke-width="1" opacity="0.4"/></svg>`,
  },
];
