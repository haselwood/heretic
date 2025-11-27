# Decay Game - Overview

A narrative decision-making game where players shape a forest kingdom's future through 32 policy choices across 4 acts, leading to one of 10 distinct political endings.

---

## The Game

Players make choices that shape six political/philosophical axes:
- **FAITH** (Rational → Spiritual)
- **CONTROL** (Anarchy → Authoritarian)
- **ECONOMY** (Capitalist → Communal)
- **OPENNESS** (Protectionist → Progressive)
- **PROGRESS** (Traditional → Innovation)
- **TECH** (Natural → Industrial)

At the end of Act 4, players receive one of 10 unique endings based on their cumulative choices.

---

## The 10 Endings

| # | Name | Theme | Difficulty |
|---|------|-------|------------|
| 1 | Verdant Theocracy | Faith-driven governance | ⭐ Easy |
| 2 | Thorn Regime | Authoritarian isolationist | ⭐⭐ Moderate |
| 3 | Free-Root Collective | Anarchist commune | ⭐⭐ Moderate |
| 4 | Cosmopolitan Grove | Open borders crossroads | ⭐ Easy |
| 5 | Shielded Woodland | Moderate isolationist | ⭐⭐ Moderate |
| 6 | Dawnbound Republic | Progressive democracy | ⭐⭐ Moderate |
| 7 | Emerald Symbiosis | Green/natural technology | ⭐ Easy |
| 8 | Primeval Kingdom | Traditional monarchy | ⭐⭐⭐ Challenging |
| 9 | Ordered Commune | Structured socialism | ⭐⭐⭐ Challenging |
| 10 | Sacred Order | Theocratic commune | ⭐⭐⭐ Challenging |

---

## Game Structure

### Acts & Questions
- **Act 1:** 9 questions (foundation)
- **Act 2:** 9 questions (culture & policy)
- **Act 3:** 8 questions (crisis response)
- **Act 4:** 6 questions (legacy)

**Total:** 32 questions across 4 acts

### Dynamic Thresholds
Thresholds scale with cumulative questions to maintain balance:

| Act | Questions | HIGH Threshold | Reasoning |
|-----|-----------|----------------|-----------|
| 1   | 9         | ±4             | Early choices |
| 2   | 18        | ±7             | Building momentum |
| 3   | 26        | ±10            | Solidifying path |
| 4   | 32        | ±12            | Final result |

---

## Key Features

✅ **10 Distinct Endings** - Each represents a unique political/philosophical position  
✅ **Balanced Difficulty** - All endings are achievable through intentional play  
✅ **Dynamic Thresholds** - Scale automatically with progress  
✅ **Real-time Feedback** - Shows which ending you're trending toward  
✅ **Alignment Percentage** - Measures how well choices match each ending  
✅ **Progress Tracking** - Visual progress bar and act-by-act results  
✅ **Fallback System** - Ensures everyone gets a relevant ending  

---

## Files

```
/decay/
├── index.html                    ← Main game (load this in browser)
├── style.css                     ← Visual styling
├── app.js                        ← Game logic & endings
├── README.md                     ← This file
├── BALANCE_ANALYSIS.md           ← Technical documentation
└── FINAL_10_ENDINGS_GUIDE.md     ← Complete playthroughs for all endings
```

---

## How to Play

1. **Open** `index.html` in your browser
2. **Answer** each question by selecting one of four choices
3. **Watch** your alignment scores change in real-time
4. **Complete** all 32 questions across 4 acts
5. **Receive** your ending based on your choices

---

## How to Test Endings

Use `FINAL_10_ENDINGS_GUIDE.md` for complete paths to each ending:

1. Reset the quiz
2. Follow the choice numbers for your target ending
3. Complete all 32 questions
4. Verify you receive the correct ending

---

## Technical Details

### Ending Resolution
Endings are checked in order from most specific to least specific:

1. Sacred Order (3 HIGH axes required)
2. Primeval Kingdom (specific combination)
3. Ordered Commune (structured requirements)
4. Thorn Regime (authoritarian isolationist)
5. Free-Root Collective (anarchist combo)
6. Dawnbound Republic (progressive multi-axis)
7. Verdant Theocracy (faith primary)
8. Cosmopolitan Grove (openness primary)
9. Emerald Symbiosis (green tech)
10. Shielded Woodland (isolationist)

### Fallback System
If no explicit ending matches, the game calculates Euclidean distance to all ending profiles and assigns the closest match, with an alignment percentage showing fit quality.

---

## Status

✅ All 10 endings tested and verified  
✅ Complete documentation available  
✅ Balanced gameplay confirmed  
✅ Ready to play  

🌲✨

