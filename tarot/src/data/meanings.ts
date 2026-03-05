export interface CardMeaning {
  light: string[]
  dark: string[]
  description: string
}

export const CARD_MEANINGS: Record<string, CardMeaning> = {
  // ══════════════════════════════════════
  // ARCHETYPE
  // ══════════════════════════════════════

  'archetype-junior': {
    light: ['Optimism', 'New Beginnings', 'Growth Mindset', 'Learning'],
    dark: ['Naivety', 'Ignorance', 'In Over Your Head', 'Paying Your Dues'],
    description: "Ah, the wide-eyed newcomer who still believes the mission statement. They'll ask questions in all-hands that make VPs visibly sweat. Protect this energy — it has a half-life of about six months before the first reorg.",
  },

  'archetype-the-besties': {
    light: ['Loyalty', 'Trust', 'Emotional Support', 'Shared Experience'],
    dark: ['Codependency', 'Groupthink', 'Cliquishness', 'Tunnel Vision'],
    description: "Two people who met during onboarding and now share a single brain cell, a Slack DM thread longer than the codebase, and an unspoken pact to quit on the same day. Their bond will outlast at least three CEOs.",
  },

  'archetype-the-recruiter': {
    light: ['Opportunity', 'Connection', 'New Doors', 'Market Awareness'],
    dark: ['Hollow Flattery', 'False Promises', 'Commodification', 'Spam'],
    description: "They slid into your LinkedIn DMs calling you a 'rockstar' for a role that pays 40% less than your current gig. Their energy is relentless, their memory is short, and they will absolutely reach out again in six months as if you've never spoken.",
  },

  'archetype-brilliant-jerk': {
    light: ['Raw Talent', 'Technical Mastery', 'High Standards', 'Fearlessness'],
    dark: ['Toxicity', 'Ego', 'Collateral Damage', 'Unsustainability'],
    description: "Ten-x engineer, zero-x human being. They'll refactor your entire architecture on a Friday afternoon and mass-reply-all with 'per my last email' like it's a weapon. The board loves them. HR has a dedicated folder.",
  },

  'archetype-side-hustler': {
    light: ['Entrepreneurship', 'Ambition', 'Resourcefulness', 'Independence'],
    dark: ['Divided Attention', 'Disloyalty', 'Burnout Risk', 'Conflict of Interest'],
    description: "By day, they push tickets. By night, they're building a competitor in a different vertical using company WiFi. Their 'quick call' is always about their Shopify store. One foot out the door, but somehow still hitting sprint goals.",
  },

  'archetype-powerhungry-fool': {
    light: ['Ambition', 'Visibility', 'Initiative', 'Confidence'],
    dark: ['Delusion', 'Overreach', 'Political Games', 'Empty Authority'],
    description: "They've been promoted exactly once for being loud in a meeting and have been chasing that high ever since. Their calendar is 90% 'strategy sessions' they organized themselves. They will CC the CEO on a thread about office snacks.",
  },

  'archetype-mentor': {
    light: ['Wisdom', 'Generosity', 'Patience', 'Investment in Others'],
    dark: ['Overextension', 'Savior Complex', 'Living Vicariously', 'Neglecting Self'],
    description: "The rare soul who actually reads your PR comments, buys you coffee when you're struggling, and tells you the truth about the promotion timeline. They've seen four rounds of layoffs and still believe people are worth investing in. Cherish them.",
  },

  'archetype-2nd-employee': {
    light: ['Institutional Knowledge', 'Resilience', 'Founder Energy', 'Credibility'],
    dark: ['Entitlement', 'Resistance to Change', 'Nostalgia Trap', 'Diluted Equity'],
    description: "They joined before there were desks. They remember when the 'database' was a Google Sheet and the 'office' was a Panera Bread. They own 0.3% of the company and will never let you forget it, even though the last two funding rounds diluted it into a rounding error.",
  },

  'archetype-9-9-6-grinder': {
    light: ['Dedication', 'Work Ethic', 'Reliability', 'Discipline'],
    dark: ['Self-Destruction', 'Martyrdom', 'Lost Identity', 'Toxic Hustle'],
    description: "9am to 9pm, 6 days a week, and they will absolutely tell you about it. Their Slack status is permanently set to 'heads down' and they haven't used PTO since the Obama administration. The work is their personality now. It's too late.",
  },

  'archetype-martyr': {
    light: ['Selflessness', 'Going Above and Beyond', 'Team Player', 'Sacrifice'],
    dark: ['Resentment', 'Self-Inflicted Pain', 'Manipulation', 'Boundary Collapse'],
    description: "They volunteered for every on-call shift, rewrote the entire test suite over a weekend nobody asked them to, and now they're burned out and resentful. Their suffering is both self-inflicted and somehow everyone else's fault.",
  },

  'archetype-quiet-quitter': {
    light: ['Boundaries', 'Self-Preservation', 'Work-Life Balance', 'Clarity'],
    dark: ['Disengagement', 'Apathy', 'Coasting', 'Checked Out'],
    description: "They log on at 9:01, log off at 4:59, and have achieved a zen-like state of doing exactly what their job description says and nothing more. Their boundaries are immaculate. Leadership calls it 'disengagement.' They call it 'the job.'",
  },

  'archetype-middle-manager': {
    light: ['Coordination', 'Translation', 'Shielding the Team', 'Process'],
    dark: ['Bureaucracy', 'Bottleneck', 'Identity Crisis', 'Pointlessness'],
    description: "A human routing layer between the people who do the work and the people who take credit for it. Their superpower is scheduling meetings about meetings. They haven't written code in three years but their title still says 'engineering.'",
  },

  'archetype-the-executive': {
    light: ['Vision', 'Strategic Thinking', 'Decision Making', 'Authority'],
    dark: ['Detachment', 'Jargon Addiction', 'Calendar Tyranny', 'Whiplash'],
    description: "They speak exclusively in frameworks, never use one word when a McKinsey acronym will do, and believe deeply that 'alignment' is a deliverable. Their calendar is a war crime. They will pivot your roadmap during a bathroom break.",
  },

  'archetype-visionary': {
    light: ['Imagination', 'Big Picture Thinking', 'Inspiration', 'Possibility'],
    dark: ['Impracticality', 'Idea Hoarding', 'Execution Gap', 'Short Attention Span'],
    description: "They see the future with terrifying clarity and absolutely zero ability to execute on it. Every conversation is a TED talk. They'll pitch a 'paradigm shift' over lunch and forget about it by dinner because they've already had three more ideas.",
  },

  'archetype-thought-leader': {
    light: ['Influence', 'Platform', 'Brand Building', 'Thought Provocation'],
    dark: ['Performance Over Substance', 'Ego', 'Grift', 'Hot Air'],
    description: "They've escaped into pure performance — keynotes, LinkedIn threads, podcast guest spots, and 'frameworks' that are just common sense with a graphic. Their deliverables are vibes. Their KPIs are impressions. They are a TED Talk that gained sentience and learned to bill hourly.",
  },

  'archetype-digital-nomad': {
    light: ['Freedom', 'Adaptability', 'Adventure', 'Autonomy'],
    dark: ['Unreliability', 'Time Zone Chaos', 'Disconnection', 'Privilege'],
    description: "Currently attending standup from a hammock in Bali with 200ms latency and zero shame. Their Zoom background is suspicious. Their work hours are 'flexible' in the way that tectonic plates are flexible. They will miss every deadline and post a sunset.",
  },

  // ══════════════════════════════════════
  // MINDSET
  // ══════════════════════════════════════

  'mindset-drink-the-koolaid': {
    light: ['Buy-In', 'Alignment', 'Commitment', 'Belonging'],
    dark: ['Brainwashing', 'Blind Faith', 'Loss of Self', 'Cult Vibes'],
    description: "You've started using the company values in casual conversation unironically. You said 'we're a family here' at dinner with your actual family. The brainwashing is complete. The equity vesting schedule has you in a chokehold.",
  },

  'mindset-growth-mindset': {
    light: ['Resilience', 'Learning from Failure', 'Adaptability', 'Curiosity'],
    dark: ['Toxic Positivity', 'Reframing Failure', 'Denial', 'Performative Growth'],
    description: "The belief that any failure is just a 'learning opportunity' — especially convenient when the failure is a product that cost $4 million and had two users. You haven't grown so much as you've reframed stagnation with better vocabulary.",
  },

  'mindset-low-hanging-fruit': {
    light: ['Quick Wins', 'Momentum', 'Pragmatism', 'Efficiency'],
    dark: ['Avoidance', 'Surface-Level Work', 'Rot', 'Complacency'],
    description: "The mythical easy win that someone identifies in every planning session and no one ever actually picks. It's been hanging so low for so long it's basically composting. But sure, let's put it on the roadmap again.",
  },

  'mindset-fail-fast': {
    light: ['Experimentation', 'Speed', 'Learning Velocity', 'Risk Tolerance'],
    dark: ['Recklessness', 'Waste', 'No Accountability', 'Rationalized Failure'],
    description: "The mantra that makes burning money sound like a philosophy. You didn't waste six months — you 'iterated rapidly.' The product died, the team scattered, but at least you learned something. Right? You learned something, right?",
  },

  'mindset-ship-it': {
    light: ['Decisiveness', 'Momentum', 'Pragmatism', 'Bias to Action'],
    dark: ['Recklessness', 'Technical Debt', 'Corner Cutting', 'Friday Deploys'],
    description: "Perfectionism is the enemy. Quality is a spectrum. The user will forgive you. Just push it to prod on a Friday at 4pm and deal with the consequences Monday. The deploy button doesn't care about your anxiety.",
  },

  'mindset-drink-from-the-firehose': {
    light: ['Immersion', 'Rapid Onboarding', 'Total Exposure', 'Steep Learning'],
    dark: ['Overwhelm', 'Chaos', 'Sink or Swim', 'Information Overload'],
    description: "Day one at a new job: 47 tabs open, three Notion docs that contradict each other, a Slack channel called #random that is somehow mission-critical, and someone casually mentions 'the incident' without elaborating. You are learning. You are drowning. Same thing.",
  },

  'mindset-imposter-syndrome': {
    light: ['Humility', 'Self-Awareness', 'Drive to Prove', 'Empathy'],
    dark: ['Self-Doubt', 'Paralysis', 'Undervaluing Yourself', 'Anxiety'],
    description: "You are absolutely certain that everyone around you is smarter, more qualified, and will eventually discover you've been Googling basic syntax for years. Plot twist: they're all Googling it too. The entire industry is imposters all the way down.",
  },

  'mindset-zoom-out': {
    light: ['Perspective', 'Strategic Thinking', 'Context', 'Clarity'],
    dark: ['Avoidance', 'Hand-Waving', 'Losing the Details', 'Platitudes'],
    description: "Someone in leadership wants you to stop caring about the bug you've been debugging for three days and instead 'think about the bigger picture.' The bigger picture is that this company has no idea what it's doing, but at a higher altitude.",
  },

  'mindset-boil-the-ocean': {
    light: ['Ambition', 'Comprehensive Thinking', 'Thoroughness', 'Vision'],
    dark: ['Overscoping', 'Paralysis', 'Expensive Anxiety', 'No Shipping'],
    description: "You tried to solve every problem at once and ended up solving none of them, but very impressively. The PRD was 47 pages. The Figma had 200 frames. The timeline was 'aggressive.' Ambition without scope is just expensive anxiety.",
  },

  'mindset-moving-goalposts': {
    light: ['Evolving Standards', 'Raising the Bar', 'Continuous Improvement', 'Ambition'],
    dark: ['Gaslighting', 'Broken Promises', 'Unreachable Targets', 'Futility'],
    description: "You hit every metric they asked for and they changed the metrics. The target was Q3, then Q4, then 'well, let's revisit the OKRs.' Success is a mirage that recedes exactly as fast as you run toward it.",
  },

  'mindset-circle-back': {
    light: ['Patience', 'Timing', 'Revisiting Ideas', 'Open Loops'],
    dark: ['Avoidance', 'Empty Promises', 'Stalling', 'The Void'],
    description: "The universal corporate code for 'I don't have an answer, I don't want to give one, and I'm hoping you forget you asked.' Nobody has ever circled back. The circle is a lie. It's a straight line into the void.",
  },

  'mindset-radical-candor': {
    light: ['Honesty', 'Direct Feedback', 'Caring Personally', 'Growth'],
    dark: ['Brutality', 'Licensed Cruelty', 'Power Imbalance', 'Weaponized Feedback'],
    description: "Someone read the book and now uses it as a license to be brutal in one-on-ones while calling it 'caring personally.' They'll tell you your presentation was 'not good' and expect gratitude. The feedback is a gift. The gift has no receipt.",
  },

  'mindset-chess-not-checkers': {
    light: ['Strategic Depth', 'Long-Term Thinking', 'Complexity', 'Nuance'],
    dark: ['Overcomplication', 'Pretension', 'Analysis Paralysis', 'Candy Crush'],
    description: "A phrase deployed by people who are, at best, playing Candy Crush. They want you to know this situation is complex and strategic, which usually means they've made a simple thing complicated and now need three meetings to undo it.",
  },

  'mindset-hill-to-die-on': {
    light: ['Conviction', 'Principles', 'Standing Firm', 'Integrity'],
    dark: ['Stubbornness', 'Pettiness', 'Wasted Energy', 'Ego'],
    description: "You've decided this is the issue where you make your stand — the button color, the API naming convention, the Oxford comma in the docs. You know it doesn't matter. They know it doesn't matter. But you will not yield.",
  },

  'mindset-view-only': {
    light: ['Awareness', 'Observation', 'Access to Information', 'Transparency'],
    dark: ['Powerlessness', 'Exclusion', 'Spectator Mode', 'Voicelessness'],
    description: "You've been given access to the document but not the power to change anything. A perfect metaphor for your role in this organization. You can see the spreadsheet. You can see the decisions being made. You cannot touch them.",
  },

  'mindset-disagree-and-commit': {
    light: ['Maturity', 'Team Alignment', 'Decisiveness', 'Moving Forward'],
    dark: ['Suppressed Dissent', 'Resentment', 'Performative Buy-In', 'Told You So'],
    description: "The polite corporate way of saying 'you lost the argument, now execute anyway with enthusiasm.' You disagree. You will commit. You will also bring it up in the post-mortem when it inevitably fails, because you are petty and correct.",
  },

  // ══════════════════════════════════════
  // ARTIFACTS
  // ══════════════════════════════════════

  'artifacts-one-pager': {
    light: ['Clarity', 'Conciseness', 'Alignment', 'Documentation'],
    dark: ['Scope Creep', 'Contradictions', 'Unread', 'Performative Writing'],
    description: "A document that is never one page. It started as a 'quick summary' and now has appendices, a glossary, and an embedded Loom video. Three VPs have added comments that contradict each other. Nobody will read it, but everyone will reference it.",
  },

  'artifacts-pitch-deck': {
    light: ['Vision', 'Storytelling', 'Ambition', 'Persuasion'],
    dark: ['Delusion', 'Vanity Metrics', 'Fantasy TAM', 'Style Over Substance'],
    description: "Twelve slides of delusion rendered in Figma with a font that costs $400/year. The TAM slide claims a $50 billion market. The team slide has headshots with identical crossed-arm poses. Slide 7 is just the word 'WHY' in 200pt font.",
  },

  'artifacts-north-star': {
    light: ['Focus', 'Shared Direction', 'Measurability', 'Purpose'],
    dark: ['Moving Target', 'Weaponized Metric', 'Misalignment', 'North-ish'],
    description: "The metric that's supposed to guide all decisions but actually just gets invoked when someone needs to win an argument. It changes every two quarters. It's north-ish. The star is more of a general direction. Nobody has a compass.",
  },

  'artifacts-series-a': {
    light: ['Validation', 'Runway', 'Growth Capital', 'Credibility'],
    dark: ['Burn Rate', 'Strings Attached', 'Premature Scaling', 'Board Seats'],
    description: "The money that turns a scrappy idea into a slightly less scrappy idea with a WeWork membership and a head of people ops. The burn rate is 'intentional.' The runway is 18 months if you squint. The board wants to talk about unit economics.",
  },

  'artifacts-nda': {
    light: ['Confidentiality', 'Trust', 'Access', 'Exclusivity'],
    dark: ['Secrecy', 'Overprotection', 'Power Asymmetry', 'It\'s a To-Do App'],
    description: "You're about to hear something so confidential and game-changing that — oh, it's a to-do app. With AI. The NDA is thicker than the business plan. You will sign it because free lunch is involved.",
  },

  'artifacts-wireframe': {
    light: ['Ideation', 'Rapid Prototyping', 'Shared Understanding', 'Low Stakes'],
    dark: ['Ambiguity', 'Misinterpretation', 'Premature Commitment', 'Boxes and Arrows'],
    description: "Boxes within boxes, connected by arrows that mean different things to everyone in the room. The designer says it's 'low fidelity.' The PM says it's 'almost final.' The engineer says it's 'impossible.' All three are correct.",
  },

  'artifacts-prototype': {
    light: ['Proof of Concept', 'Momentum', 'Tangibility', 'Excitement'],
    dark: ['Fragility', 'False Confidence', 'Hardcoded Everything', 'Demo Magic'],
    description: "A beautiful, fragile thing held together by hardcoded data and the tears of a frontend developer. It works perfectly in the demo. It will never work like this again. Do not click the second button. There is no second button.",
  },

  'artifacts-roadmap': {
    light: ['Direction', 'Planning', 'Prioritization', 'Transparency'],
    dark: ['Speculative Fiction', 'Obsolete on Arrival', 'False Precision', 'Board Deck Filler'],
    description: "A work of speculative fiction presented as a Gantt chart. Q1 is detailed. Q2 is optimistic. Q3 is a single bar labeled 'scale.' The roadmap will be obsolete by the time you finish presenting it, but it looks great in the board deck.",
  },

  'artifacts-vibe-coding': {
    light: ['Flow State', 'Intuition', 'Speed', 'AI-Augmented'],
    dark: ['No Understanding', 'Fragile Code', 'Cargo Culting', 'Vibes Over Rigor'],
    description: "You stopped reading the docs and started asking the AI to just write it. The code works. You don't know why. The tests pass. You don't know why. The PR got approved because nobody else knows why either. This is the future.",
  },

  'artifacts-the-backlog': {
    light: ['Captured Ideas', 'Organizational Memory', 'Prioritization Queue', 'Potential'],
    dark: ['Graveyard', 'Guilt', 'Infinite Scroll', 'Grooming Theater'],
    description: "A graveyard of good intentions stretching back to 2019. Tickets filed by people who no longer work here for features nobody remembers requesting. It has 847 items. You will groom 12 of them and declare the sprint 'planned.'",
  },

  'artifacts-bug-ticket': {
    light: ['Accountability', 'User Advocacy', 'Quality Signal', 'Tracking'],
    dark: ['Vague Reports', 'Blame Shifting', 'Priority Inflation', 'Blurry Screenshots'],
    description: "Steps to reproduce: 'it just broke.' Priority: P1 (it is not P1). Assigned to: whoever was unlucky enough to be online. Attached: a screenshot of a screenshot, slightly blurry, taken on a phone, of a different phone.",
  },

  'artifacts-slack-message': {
    light: ['Real-Time Communication', 'Collaboration', 'Transparency', 'Speed'],
    dark: ['Distraction', 'Thread Spirals', 'Context Collapse', 'Nobody Answers'],
    description: "A 'quick question' in a public channel that spirals into a 47-message thread involving six teams, three time zones, and a philosophical debate about microservices. Someone reacts with 👀. Someone else replies 'following.' Nobody answers the question.",
  },

  'artifacts-all-hands': {
    light: ['Alignment', 'Transparency', 'Company Culture', 'Shared Narrative'],
    dark: ['Performance Theater', 'Softball Q&A', 'Slide Reading', 'Email Checking'],
    description: "An hour-long meeting where leadership reads their own slides aloud to 400 people who are checking email. There will be a 'fireside chat' that is neither warm nor illuminating. The Q&A will have one brave question and four softballs from directors.",
  },

  'artifacts-feature-release': {
    light: ['Momentum', 'Shipping', 'Celebration', 'Impact'],
    dark: ['Hotfixes', 'Staging vs Prod', 'Lying Changelogs', 'Premature Celebration'],
    description: "The blog post is written. The Product Hunt launch is scheduled. The feature works in staging. Production is another country entirely. You will celebrate today and hotfix tomorrow. The changelog is already lying by omission.",
  },

  'artifacts-1-star-review': {
    light: ['User Feedback', 'Humility', 'Signal', 'Motivation'],
    dark: ['Rent-Free Headspace', 'Unfairness', 'Negativity Bias', 'Invisible Praise'],
    description: "'Worst app ever. Doesn't even work.' Posted by someone running iOS 12 on a phone from 2016 who didn't read the onboarding. It will live rent-free in the founder's head for six months. The five-star reviews are invisible.",
  },

  'artifacts-ai-slop': {
    light: ['Scale', 'Efficiency', 'SEO', 'Output Volume'],
    dark: ['Soullessness', 'Quality Collapse', 'Content Pollution', 'No One Home'],
    description: "Content that was clearly generated by a machine, approved by a human who didn't read it, and published to a blog that nobody visits. The SEO is perfect. The soul is absent. It ranks #1 for a query nobody should be searching.",
  },

  // ══════════════════════════════════════
  // VIBES
  // ══════════════════════════════════════

  'vibes-day-one': {
    light: ['Fresh Start', 'Possibility', 'Clean Slate', 'Hope'],
    dark: ['Naivety', 'Overwhelm', 'False Promises', 'Future You Problems'],
    description: "New laptop smell, fresh Slack install, zero unread messages. Your calendar is empty. Your hope is full. You genuinely believe the onboarding doc when it says 'we move fast and break things.' You don't yet know that the thing they'll break is you.",
  },

  'vibes-offsite': {
    light: ['Bonding', 'Vision Setting', 'Break from Routine', 'Alignment'],
    dark: ['Forced Fun', 'Performative Vulnerability', 'Expense Reports', 'Monday Amnesia'],
    description: "Two days at a boutique hotel where the team will 'align on vision' over overpriced wine and a ropes course nobody wanted. You'll share vulnerable truths during the trust exercise and pretend it never happened on Monday. The Uber receipt is $340.",
  },

  'vibes-out-of-office': {
    light: ['Rest', 'Boundaries', 'Recharging', 'Perspective'],
    dark: ['Fake Disconnection', 'Guilt', 'Slack Checking', 'Phantom Notifications'],
    description: "The autoresponder is on. The laptop is 'technically' in the suitcase. You will check Slack exactly once, which will become four times, which will become a 45-minute thread about a deploy that shouldn't have happened. Vacation is a state of mind you cannot access.",
  },

  'vibes-sunday-scaries': {
    light: ['Anticipation', 'Preparation', 'Self-Awareness', 'Signal to Change'],
    dark: ['Dread', 'Anxiety', 'Work Consuming Life', 'Existential Unease'],
    description: "It's 6pm on Sunday and your chest is tight. Tomorrow's standup requires you to explain what you did last week, which was mostly attend meetings about what you'd do this week. The dread is productivity's shadow. It always arrives on time.",
  },

  'vibes-retro': {
    light: ['Reflection', 'Continuous Improvement', 'Team Voice', 'Closure'],
    dark: ['Ritual Theater', 'Same Action Items', 'Archived Miro Boards', 'Groundhog Day'],
    description: "What went well: nothing meaningful. What could improve: everything. Action items: the same three from last sprint that nobody did. Someone will say 'communication' and everyone will nod. The Miro board will be archived and never opened again.",
  },

  'vibes-heads-down': {
    light: ['Deep Work', 'Focus', 'Flow State', 'Productivity'],
    dark: ['Interruption Magnet', 'Unreachable', 'Shoulder Taps', 'False Sanctuary'],
    description: "The sacred state of actually doing work, interrupted every eleven minutes by a Slack notification, a 'quick sync,' and someone asking if you saw the message they sent two minutes ago. You put on headphones. They tap your shoulder.",
  },

  'vibes-launch-day': {
    light: ['Excitement', 'Culmination', 'Adrenaline', 'Shipping'],
    dark: ['First Bug in 43 Minutes', 'Premature Champagne', 'Dashboard Watching', 'Fragile Victory'],
    description: "The adrenaline is real. The Datadog dashboard is open on every screen. Someone brought champagne they'll drink whether it goes well or not. The deploy is green. The tweets are scheduled. The first bug report arrives in forty-three minutes.",
  },

  'vibes-fire-drill': {
    light: ['Urgency', 'Team Mobilization', 'Problem Solving', 'Adrenaline'],
    dark: ['Chaos', 'No Documentation', 'Sleep Deprivation', 'Euphemisms for Panic'],
    description: "Everything is on fire but nobody will say 'fire' — they say 'urgent' and 'time-sensitive' and 'let's swarm on this.' The Slack channel is called #incident-response but the real incident is that nobody documented anything. Coffee is mandatory. Sleep is optional.",
  },

  'vibes-the-pivot': {
    light: ['Adaptation', 'Survival', 'New Direction', 'Reinvention'],
    dark: ['Abandonment', 'Identity Crisis', 'Team Casualties', 'Rebranding Trauma'],
    description: "The product isn't working, the metrics are grim, and someone just said 'what if we pivoted to B2B' like they invented the concept. The rebrand will take longer than building the new product. Half the team will not survive the pivot. The press release will call it 'evolution.'",
  },

  'vibes-the-reorg': {
    light: ['Fresh Structure', 'New Opportunities', 'Clearing Deadwood', 'Reset'],
    dark: ['Chaos', 'Musical Chairs', 'Broken Teams', 'Spirograph Org Charts'],
    description: "Your skip-level is now your manager. Your manager is now 'exploring new opportunities.' The org chart looks like it was designed by a toddler with a Spirograph. Your team name changed but your work didn't. This is the third reorg this year. It will not be the last.",
  },

  'vibes-burnout': {
    light: ['Signal to Rest', 'Self-Awareness', 'Permission to Stop', 'Recalibration'],
    dark: ['Emptiness', 'Numbness', 'Loss of Identity', 'Invisible Suffering'],
    description: "You used to love this. You think. The laptop opens and the hours vanish and you've done things but felt nothing. Your PTO balance is high and your serotonin is low. The work is fine. You are not fine. These are treated as unrelated.",
  },

  'vibes-golden-handcuffs': {
    light: ['Stability', 'Financial Security', 'Patience', 'Compounding Value'],
    dark: ['Trapped', 'Comfortable Misery', 'Fear of Leaving', 'One More Year'],
    description: "The salary is too good to leave. The equity cliff is always just one more year away. You are comfortable and miserable in equal measure. The handcuffs are golden and they fit perfectly and you could leave anytime. You will not leave anytime.",
  },

  'vibes-layoffs': {
    light: ['Clarity', 'New Beginnings', 'Severance', 'Freedom'],
    dark: ['Shock', 'Betrayal', 'Survivor Guilt', 'Quick Chat with HR'],
    description: "The calendar invite says 'Quick Chat' and it's from someone in HR you've never met. It's fifteen minutes long. Your badge will stop working by lunch. The all-hands that follows will use the phrase 'difficult decision' exactly seven times.",
  },

  'vibes-ipo': {
    light: ['Culmination', 'Liquidity', 'Validation', 'Celebration'],
    dark: ['Disappointment', 'Dilution Math', 'Used Honda Money', 'Lock-Up Period'],
    description: "The bell rings. The stock price does a thing. LinkedIn posts with champagne emojis multiply like bacteria. The early employees do math on napkins. The rest of you check your vested shares and realize you can almost afford a used Honda. Congratulations.",
  },

  'vibes-the-counteroffer': {
    light: ['Leverage', 'Recognition', 'Negotiation', 'Knowing Your Worth'],
    dark: ['Temporary Fix', 'Same Problems', 'Resentment Compounding', 'Delayed Departure'],
    description: "You finally got the courage to quit and now they're offering you 30% more to stay. The money is tempting. The problems are the same. You'll take the counter, feel briefly valued, and start job searching again in four months with more resentment and a slightly higher base.",
  },

  'vibes-exit-interview': {
    light: ['Closure', 'Honest Feedback', 'Moving On', 'Last Word'],
    dark: ['Too Late to Matter', 'Polite Violence', 'Burning Bridges', 'Fast-Typing HR'],
    description: "They want honest feedback now that you're leaving, which is rich because they didn't want it when you were staying. You could burn it all down or you could smile and say 'growth opportunities.' You choose violence, politely. The HR person types very fast.",
  },
}
