# Decay Game - Overview

A narrative decision-making game where players shape a forest kingdom's future through 32 policy choices across 4 acts, leading to one of 10 distinct political endings.

---

## The Game

Players make choices that shape six political/philosophical axes:
- **FAITH** (Rational → Spiritual)
- **CONTROL** (Anarchy → Authoritarian)
- **ECONOMY** (Capitalist → Communal)
- **OPENNESS** (Protectionist → Progressive)
- **PROGRESS** (Tradition/History → Future/Innovation)
- **TECH** (Natural → Industrial)

At the end of Act 4, players receive one of 10 unique endings based on their cumulative choices.

---

## The 10 Endings
*(Listed in check order - most specific to least specific)*

| # | Name | Theme | Difficulty |
|---|------|-------|------------|
| 1 | Sacred Order | Theocratic commune | ⭐⭐⭐⭐ Very Challenging |
| 2 | Primeval Kingdom | Traditional monarchy | ⭐⭐⭐ Challenging |
| 3 | Ordered Commune | Structured socialism | ⭐⭐⭐ Challenging |
| 4 | Thorn Regime | Authoritarian isolationist | ⭐⭐ Moderate |
| 5 | Free-Root Collective | Natural anarchist commune | ⭐⭐⭐ Challenging |
| 6 | Dawnbound Republic | Progressive democracy | ⭐⭐ Moderate |
| 7 | Verdant Theocracy | Nature-worshipping spiritual | ⭐⭐ Moderate |
| 8 | Cosmopolitan Grove | High-tech metropolis | ⭐⭐⭐⭐ Very Challenging |
| 9 | Emerald Symbiosis | Green/natural technology | ⭐ Easy |
| 10 | Shielded Woodland | Moderate isolationist | ⭐⭐ Moderate |

---

## Game Structure

### Acts & Questions
- **Act 1: Emergence** — 10 questions (rising from decay)
- **Act 2: New Growth** — 8 questions (building culture & society)
- **Act 3: The Weathering** — 8 questions (enduring trials & crises)
- **Act 4: Eternal Forest** — 6 questions (defining your legacy)

**Total:** 32 questions across 4 acts

### Dynamic Thresholds
Thresholds scale with cumulative questions to maintain balance:

| Act | Name | Questions (Cumulative) | HIGH Threshold |
|-----|------|------------------------|----------------|
| 1   | Emergence | 10                     | ±4             |
| 2   | New Growth | 18 (10 + 8)            | ±7             |
| 3   | The Weathering | 26 (18 + 8)            | ±10            |
| 4   | Eternal Forest | 32 (26 + 6)            | ±12            |

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

1. **Sacred Order** - 3 HIGH axes (FA+CT+EC all HIGH)
2. **Primeval Kingdom** - Traditional monarchy (PR NEG + CT HIGH + FA POS)
3. **Ordered Commune** - Structured socialism (CT+EC HIGH, not FA HIGH, not OP NEG)
4. **Thorn Regime** - Authoritarian isolationist (CT HIGH + OP NEG + PR ≤ 0)
5. **Free-Root Collective** - Natural anarchist commune (EC HIGH + CT NEG + OP HIGH + TE ≤ 0)
6. **Dawnbound Republic** - Progressive democracy (PR+OP HIGH, CT+FA MID)
7. **Verdant Theocracy** - Nature worship spiritual (FA HIGH + CT MID + TE ≤ 0)
8. **Cosmopolitan Grove** - High-tech metropolis (OP HIGH + EC MID + CT MID + TE HIGH + PR ≥ 0)
9. **Emerald Symbiosis** - Green technology (TE NEG + others ≥ 0)
10. **Shielded Woodland** - Isolationist fallback (OP NEG + CT ≥ 0 + PR ≤ 0)

### Fallback System
If no explicit ending matches, the game calculates Euclidean distance to all ending profiles and assigns the closest match, with an alignment percentage showing fit quality.

---

## Status

✅ All 10 endings tested and verified  
✅ Complete documentation available  
✅ Balanced gameplay confirmed  
✅ Ready to play  

🌲✨

