export default function PRDPage() {
  return (
    <div className="min-h-screen bg-[#0a0618] text-white px-4 py-12 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1
            className="text-5xl sm:text-6xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #c026d3, #facc15)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TypeStory
          </h1>
          <p className="text-lg text-gray-400">Product Requirements Document — v1.0</p>
          <p className="text-sm text-gray-500">March 30, 2026 &middot; Edward Greenblatt + Claude</p>
        </header>

        <hr className="border-gray-800" />

        {/* Vision */}
        <Section title="Vision">
          <GlowCard>
            <p className="text-lg leading-relaxed">
              TypeStory is a neon-drenched, Instagram-Stories-style typing game where your keystrokes
              write a unique AI-generated adventure. Pick your genre, pick your visual style, type
              your way through chapters while a live performance meter swings between awesome and
              terrible — then watch your story rendered as a comic book, anime sequence, or
              illustrated storyboard that&apos;s yours alone.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Play solo or with friends. Compare your branching stories at the end. Come back anytime
              — your stories are saved.
            </p>
          </GlowCard>
        </Section>

        {/* What it IS / IS NOT */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Section title="What TypeStory IS">
            <ul className="space-y-2">
              <ListItem color="green">A typing game disguised as a story engine</ListItem>
              <ListItem color="green">Visually loud — neon colors, dark backgrounds, arcade energy</ListItem>
              <ListItem color="green">Addictive &quot;one more chapter&quot; pull</ListItem>
              <ListItem color="green">Powered by generative AI — every playthrough is unique</ListItem>
              <ListItem color="green">A social experience — multiplayer, shareable output</ListItem>
              <ListItem color="green">Accessible to anyone who can type</ListItem>
            </ul>
          </Section>
          <Section title="What TypeStory is NOT">
            <ul className="space-y-2">
              <ListItem color="red">Not a typing tutor — no lessons or drills</ListItem>
              <ListItem color="red">Not a long-form RPG — sessions are 5–15 min</ListItem>
              <ListItem color="red">Not text-heavy — visuals and pacing rule</ListItem>
              <ListItem color="red">Not competitive esport — comparison, not leaderboards</ListItem>
              <ListItem color="red">Not minimalist — this thing should feel alive</ListItem>
            </ul>
          </Section>
        </div>

        {/* Audience */}
        <Section title="Target Audience">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#1a1040] border border-purple-900/50 p-5">
              <p className="text-sm text-purple-400 font-bold uppercase tracking-wide mb-2">Primary</p>
              <p className="text-gray-300">Teens and young adults (13–25) who grew up on Instagram Stories, TikTok, and mobile games. Quick, visual, shareable.</p>
            </div>
            <div className="rounded-xl bg-[#1a1040] border border-purple-900/50 p-5">
              <p className="text-sm text-cyan-400 font-bold uppercase tracking-wide mb-2">Secondary</p>
              <p className="text-gray-300">Casual gamers who like narrative games (Bandersnatch, AI Dungeon). Typing enthusiasts who find Monkeytype too sterile.</p>
            </div>
          </div>
        </Section>

        {/* Core Game Loop */}
        <Section title="Core Game Loop">
          <div className="space-y-3">
            <LoopStep num={1} color="#00f0ff" title="Setup">
              Enter name, pick genre &amp; visual style, answer personality questions, choose session length
            </LoopStep>
            <LoopStep num={2} color="#c026d3" title="Story Beat (AI-generated)">
              Full-screen neon card, 2–4 sentences streamed word-by-word, tap to continue
            </LoopStep>
            <LoopStep num={3} color="#facc15" title="Typing Challenge">
              Sentence appears, player types it, live performance meter visible, real-time character feedback
            </LoopStep>
            <LoopStep num={4} color="#22c55e" title="Result">
              Meter lands on tier (Awesome → Super Bad), AI generates next story beat based on performance
            </LoopStep>
            <LoopStep num={5} color="#f97316" title="Ending">
              Final AI conclusion, story rendered in chosen visual style, save / share / compare
            </LoopStep>
          </div>
        </Section>

        {/* Performance Meter */}
        <Section title="Live Performance Meter">
          <GlowCard>
            <p className="text-gray-300 leading-relaxed">
              A circular gauge displayed during every typing challenge. The left side radiates
              &quot;terrible&quot; energy (red/dark), the right side glows &quot;awesome&quot;
              (gold/neon). It updates in <strong>real time</strong> as the player types — each
              correct character nudges right, each mistake nudges left. You can <em>feel</em> your
              story quality shifting with every keystroke.
            </p>
            <div className="mt-6 flex justify-center gap-2 flex-wrap">
              {[
                { label: "Super Bad", color: "#ef4444" },
                { label: "Bad", color: "#f97316" },
                { label: "Fine", color: "#eab308" },
                { label: "Better", color: "#a3e635" },
                { label: "Good", color: "#22c55e" },
                { label: "Awesome", color: "#facc15" },
              ].map((tier) => (
                <span
                  key={tier.label}
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: tier.color + "22",
                    color: tier.color,
                    border: `1px solid ${tier.color}55`,
                  }}
                >
                  {tier.label}
                </span>
              ))}
            </div>
          </GlowCard>
        </Section>

        {/* AI Stories */}
        <Section title="AI-Generated Stories">
          <p className="text-gray-400 mb-4">Every story beat is generated by Claude based on:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["Player Profile", "Name, personality, genre"],
              ["Story Context", "Running summary of events"],
              ["Performance", "How well they typed last"],
              ["Chapter Position", "Setup → tension → climax"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-lg bg-[#150e30] border border-cyan-900/40 p-4">
                <p className="text-cyan-400 font-bold text-sm">{title}</p>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Genre & Style */}
        <Section title="Genre & Visual Style">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-pink-400 font-bold uppercase tracking-wide mb-3">Genres</p>
              <div className="flex flex-wrap gap-2">
                {["Fantasy", "Sci-Fi", "Horror", "Mystery", "Romance", "Slice of Life"].map((g) => (
                  <Tag key={g} color="#c026d3">{g}</Tag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-cyan-400 font-bold uppercase tracking-wide mb-3">Visual Styles</p>
              <div className="flex flex-wrap gap-2">
                {["Comic Book", "Anime", "Fantasy Art", "Pixel Art", "Watercolor", "Graphic Novel"].map((s) => (
                  <Tag key={s} color="#00f0ff">{s}</Tag>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            At game end, the story is re-rendered in the chosen style using AI image generation.
            Each chapter becomes a visual panel or page.
          </p>
        </Section>

        {/* Neon Visual Identity */}
        <Section title="Neon Visual Identity">
          <div className="flex gap-3 mb-4 flex-wrap">
            {[
              { name: "Electric Blue", hex: "#00f0ff" },
              { name: "Neon Pink", hex: "#ff2d95" },
              { name: "Hot Green", hex: "#39ff14" },
              { name: "Glow Purple", hex: "#bf5fff" },
              { name: "Blaze Orange", hex: "#ff6b2b" },
              { name: "Gold", hex: "#facc15" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: c.hex, boxShadow: `0 0 12px ${c.hex}88` }}
                />
                <span className="text-xs text-gray-400">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Dark backgrounds (near-black / deep navy). Bold, large, high-contrast typography. Glow,
            pulse, and subtle animation everywhere. Correct keystrokes spark. The meter radiates.
            Transitions feel energetic. Think arcade cabinet meets Instagram Stories meets cyberpunk UI.
          </p>
        </Section>

        {/* Multiplayer */}
        <Section title="Multiplayer — Story Comparison">
          <div className="space-y-4">
            <div className="rounded-xl bg-[#1a1040] border border-green-900/40 p-5">
              <p className="text-green-400 font-bold mb-2">v1 — Async Multiplayer</p>
              <p className="text-gray-400 text-sm">
                Generate a share code after finishing. Friends play the same seed, then view stories
                side by side. See exactly where your stories diverged based on typing performance.
              </p>
            </div>
            <div className="rounded-xl bg-[#1a1040] border border-yellow-900/40 p-5">
              <p className="text-yellow-400 font-bold mb-2">v2 — Live Multiplayer</p>
              <p className="text-gray-400 text-sm">
                Two players type simultaneously. Split-screen performance meters. Real-time
                notifications. Side-by-side story reveal at the end.
              </p>
            </div>
          </div>
        </Section>

        {/* Persistence */}
        <Section title="Persistence & Story Memory">
          <p className="text-gray-400 mb-3">Your stories never disappear.</p>
          <ul className="space-y-2">
            <ListItem color="cyan">Player profile &amp; completed stories saved in browser (v1)</ListItem>
            <ListItem color="cyan">&quot;Your Stories&quot; library on the home screen</ListItem>
            <ListItem color="cyan">Each story shows: date, genre, style, tier, and full text</ListItem>
            <ListItem color="cyan">Optional accounts for cross-device sync (v2)</ListItem>
          </ul>
        </Section>

        {/* Personality Questions */}
        <Section title="Personality Questions">
          <p className="text-gray-400 mb-4 text-sm">All answers feed into the AI story generation prompt.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Character name",
              "Gender (pronouns)",
              "Companion (Cat, Dog, Dragon, Wolf)",
              "Home place (Forest, City, Ocean, Mountains)",
              "Comfort food (woven into scenes)",
              "Color identity (visual tone)",
              "Preferred ending (Triumph, Mystery, Peace, Surprise)",
              "What scares you? (tension beats)",
              "What makes you laugh? (lighter moments)",
            ].map((q) => (
              <div key={q} className="text-sm text-gray-300 bg-[#150e30] rounded-lg px-3 py-2 border border-gray-800">
                {q}
              </div>
            ))}
          </div>
        </Section>

        {/* Screens */}
        <Section title="Screens">
          <div className="space-y-3">
            {[
              { name: "Home / Welcome", desc: "Logo, New Story, Your Stories, Join a Friend" },
              { name: "Setup", desc: "Name, genre, visual style, personality questions, session length" },
              { name: "Story Beat", desc: "Full-screen card, word-by-word text stream, chapter indicator" },
              { name: "Typing Challenge", desc: "Target sentence, input with color feedback, performance meter" },
              { name: "Chapter Result", desc: "Meter animation, tier label, accuracy, teaser for next chapter" },
              { name: "Ending", desc: "Final conclusion, journey summary, View Story / Share / Compare" },
              { name: "Story Viewer", desc: "Comic book panels, swipeable pages, save / share" },
              { name: "Story Library", desc: "Grid of past playthroughs, tap to re-read, delete" },
            ].map((s, i) => (
              <div key={s.name} className="flex gap-4 items-start">
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: "#c026d322",
                    color: "#c026d3",
                    border: "1px solid #c026d355",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-white">{s.name}</p>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Architecture */}
        <Section title="Technical Architecture">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["Frontend", "Next.js, React, TypeScript, Tailwind"],
              ["AI — Text", "Claude API (streaming)"],
              ["AI — Images", "Image generation (comic panels)"],
              ["State", "React + localStorage (v1), DB (v2)"],
              ["Multiplayer", "Share codes (v1), WebSockets (v2)"],
              ["Hosting", "Vercel"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-[#150e30] border border-gray-800 p-3">
                <p className="text-xs text-cyan-400 font-bold uppercase">{label}</p>
                <p className="text-sm text-gray-300 mt-1">{value}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Release Plan */}
        <Section title="Release Plan">
          <div className="space-y-4">
            <div className="rounded-xl border border-cyan-500/30 bg-[#0d1f2d] p-5">
              <p className="text-cyan-400 font-black text-lg mb-2">v1 — Core Experience</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Setup screen with genre, style, personality questions</li>
                <li>AI-generated story beats (Claude API)</li>
                <li>Typing challenge with live performance meter</li>
                <li>Neon visual identity</li>
                <li>Ending screen with story summary</li>
                <li>Local storage persistence</li>
              </ul>
            </div>
            <div className="rounded-xl border border-purple-500/30 bg-[#1a0d2e] p-5">
              <p className="text-purple-400 font-black text-lg mb-2">v2 — Social & Visual</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Async multiplayer with share codes</li>
                <li>AI-generated comic book / visual output</li>
                <li>Story viewer with swipeable panels</li>
                <li>Account system</li>
              </ul>
            </div>
            <div className="rounded-xl border border-yellow-500/30 bg-[#1f1a0a] p-5">
              <p className="text-yellow-400 font-black text-lg mb-2">v3 — Live & Polished</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Live multiplayer</li>
                <li>More genres and visual styles</li>
                <li>Difficulty scaling</li>
                <li>Sound design / music</li>
                <li>Mobile-optimized experience</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Open Questions */}
        <Section title="Open Questions">
          <div className="space-y-3">
            {[
              "Monetization: Free forever? Freemium? Premium visual styles?",
              "Age gating: How dark can horror genre stories get?",
              "Image generation costs: Cache common scenes? Limit to paid tier?",
              "Mobile typing: Adapt the mechanic or desktop-first?",
              "AI cost per session: 10 chapters = 10+ API calls. Acceptable?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-yellow-500 font-bold shrink-0">?</span>
                <p className="text-gray-400 text-sm">{q}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-xs pt-8 pb-4">
          TypeStory PRD &middot; Built by Edward Greenblatt &middot; 2026
        </footer>
      </div>
    </div>
  );
}

/* ── Helper Components ────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-black mb-4 text-white">{title}</h2>
      {children}
    </section>
  );
}

function GlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 border border-cyan-900/40"
      style={{
        background: "linear-gradient(135deg, #0d1f2d 0%, #1a0d2e 100%)",
        boxShadow: "0 0 30px rgba(0, 240, 255, 0.05)",
      }}
    >
      {children}
    </div>
  );
}

function ListItem({ color, children }: { color: string; children: React.ReactNode }) {
  const dotColor =
    color === "green" ? "#22c55e" : color === "red" ? "#ef4444" : "#00f0ff";
  return (
    <li className="flex gap-2 items-start text-sm text-gray-300">
      <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
      {children}
    </li>
  );
}

function LoopStep({
  num,
  color,
  title,
  children,
}: {
  num: number;
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <span
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-black"
        style={{
          backgroundColor: color + "22",
          color: color,
          border: `2px solid ${color}55`,
        }}
      >
        {num}
      </span>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="text-gray-400 text-sm">{children}</p>
      </div>
    </div>
  );
}

function Tag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-bold"
      style={{
        backgroundColor: color + "18",
        color: color,
        border: `1px solid ${color}44`,
      }}
    >
      {children}
    </span>
  );
}
