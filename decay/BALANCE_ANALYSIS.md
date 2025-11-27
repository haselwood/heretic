# Decay Game - Balance Analysis

## Overview
The game now uses **dynamic thresholds** that scale with each act, ensuring endings remain achievable and meaningful throughout the entire game.

---

## Dynamic Threshold System

### Thresholds Per Act

| Act | Questions (Cumulative) | HIGH_POS | HIGH_NEG | Reasoning |
|-----|----------------------|----------|----------|-----------|
| 1   | 9                    | +4       | -4       | ~50% of realistic max (~9-11) |
| 2   | 18                   | +7       | -7       | ~50% of realistic max (~13-16) |
| 3   | 26                   | +10      | -10      | ~50% of realistic max (~19-23) |
| 4   | 32                   | +12      | -12      | ~50% of realistic max (~23-27) |

### Why Dynamic Thresholds?

**Problem with Static Thresholds (old system):**
- Act 1: Threshold of ±5 when max realistic score is ±8-10 → Too easy to hit HIGH
- Act 4: Threshold of ±5 when max realistic score is ±22-26 → Almost everyone hits HIGH on multiple axes

**Solution:**
- Thresholds scale proportionally with cumulative questions
- Maintains consistent difficulty across all acts
- Endings require intentional, focused choices
- Prevents score inflation making endings meaningless

---

## Score Ranges Analysis

### Theoretical Maximum Per Axis
If a player chose the most extreme option for every question on a single axis:

| Act | Max Positive | Max Negative | Questions |
|-----|--------------|--------------|-----------|
| 1   | ~+9 to +11   | ~-9 to -11   | 9         |
| 2   | ~+15 to +17  | ~-13 to -15  | 18        |
| 3   | ~+21 to +23  | ~-19 to -21  | 26        |
| 4   | ~+26 to +29  | ~-23 to -27  | 32        |

**Note:** Most questions add ±1 per axis, with occasional ±2 values. Not every question affects every axis.

### Realistic Score Distribution
In typical playthroughs, players will have:
- **2-3 axes in HIGH range** (focused choices)
- **2-3 axes in MID range** (balanced/neutral choices)
- **1-2 axes in NEG range** (occasional opposing choices)

---

## Ending Achievability

### All 15 Endings

1. **The Verdant Theocracy** - HIGH Faith, not extreme anarchy
2. **The Thorn Regime** - HIGH Control, NEG Openness, traditional
3. **The Ironbloom Meritocracy** - NEG Economy (Capitalist), HIGH Tech (Industrial), NEG Faith (Rational)
4. **The Free-Root Collective** - HIGH Economy (Communal), NEG Control, HIGH Openness
5. **The Cosmopolitan Grove** - HIGH Openness, MID Control
6. **The Shielded Woodland** - NEG Openness (Protectionist), some order, traditional
7. **The Dawnbound Republic** - HIGH Progress, HIGH Openness, MID Control/Faith
8. **The Emerald Symbiosis** - NEG Tech (Green/Natural), neutral+ others
9. **The Ashen Restoration** - HIGH Progress, neutral/neg Faith, communal
10. **The Primeval Kingdom** - NEG Progress (Traditional), HIGH Control, Positive Faith (Ancestral)
11. **The Great Schism** - 2+ HIGH and 2+ NEG (conflicting visions)
12. **The Ascendant Revelation** - HIGH Faith+Control+Progress, NEG Openness (cult ending)
13. **The Ordered Commune** - HIGH Control, HIGH Economy (Communal), balanced faith/openness
14. **The Sacred Order** - HIGH Faith, HIGH Control, positive communal economy
15. **The Forest Weavers** (Balanced) - ALL axes within ±1 or ±2 (VERY rare!)

### Closest Match Fallback System

**How it works:**
1. Game first tries to match exact ending conditions
2. If no perfect match, calculates Euclidean distance to all ending "profiles"
3. Assigns the closest matching ending
4. Debug info shows it was a fallback match

**Benefits:**
- **No player gets "stuck"** without an ending
- Endings still feel appropriate to choices
- Rare edge cases are handled gracefully
- System is transparent (shows in debug mode)

---

## Balance Verification

### Every Ending is Achievable

✅ **Balanced Ending (Forest Weavers)** - **VERY DIFFICULT**
- Requires ALL 6 axes within ±1 (Acts 1-2) or ±2 (Acts 3-4)
- Must deliberately alternate choices to maintain perfect balance
- Skill-based achievement for true neutrality seekers

✅ **Single-Axis Dominance** (Theocracy, Grove, Symbiosis)
- Focus choices on one axis while keeping others neutral
- Achievable in all acts

✅ **Two-Axis Combinations** (Thorn Regime, Meritocracy, Collective, Republic, Kingdom, Ordered Commune, Sacred Order)
- Focus on 2-3 specific axes
- Questions provide enough targeted deltas
- New endings fill gaps (faith+control, control+communal)

✅ **Multi-Axis Complex** (Schism, Ascendant Revelation)
- Schism: Natural outcome of contradictory choices
- Revelation: Requires deliberate pattern across 4 axes

✅ **Fallback Protection**
- Even unusual score combinations map to the "closest" thematic ending
- No player experience is left unresolved

---

## Recommendations for Gameplay

### For Players:
- **Early Acts:** Endings are more "forgiving" - small score differences matter
- **Later Acts:** Cumulative choices create stronger patterns
- Each act's ending reflects your journey SO FAR
- Act 4 ending is your final legacy

### For Balance Tuning:
If certain endings are too rare/common:
1. Adjust specific question deltas (±1 instead of ±2, or vice versa)
2. Fine-tune threshold percentages (currently ~50% of max)
3. Add more questions to underrepresented axes
4. Modify ending conditions to be more/less specific

---

## Example Playthrough

### Act 1 (9 questions, threshold ±4)
- Player choices lean spiritual + communal
- Scores: FA: +5, EC: +6, others: -1 to +2
- **Ending: Verdant Theocracy** (HIGH Faith detected)

### Act 2 (cumulative 18, threshold ±7)
- Continues spiritual + communal, adds progressive choices
- Scores: FA: +10, EC: +11, OP: +8, others: +1 to +3
- **Ending: Free-Root Collective** (HIGH Faith+Economy+Openness)

### Act 3 (cumulative 26, threshold ±10)
- Maintains pattern, adds innovation choices
- Scores: FA: +12, EC: +16, OP: +13, PR: +11, others: +2 to +5
- **Ending: Dawnbound Republic** (multiple HIGH axes balanced)

### Act 4 (cumulative 32, threshold ±12)
- Final choices solidify legacy
- Scores: FA: +14, EC: +20, OP: +17, PR: +13, CT: +3, TE: -2
- **Ending: Free-Root Collective** (ultimate cooperative utopia)

---

## Technical Implementation

```javascript
// Dynamic thresholds based on act
const THRESHOLDS_PER_ACT = {
  1: { HIGH_POS: 4, HIGH_NEG: -4 },
  2: { HIGH_POS: 7, HIGH_NEG: -7 },
  3: { HIGH_POS: 10, HIGH_NEG: -10 },
  4: { HIGH_POS: 12, HIGH_NEG: -12 }
};

// Ending resolution with act context
function resolveEnding(FA, CT, EC, OP, PR, TE, act) {
  const thresholds = getThresholds(act);
  // ... ending logic uses dynamic thresholds
  // ... fallback to closest match if no perfect match
}
```

---

## Forest Weavers Balance Details

The **Forest Weavers** ending was made extremely strict to prevent false "balanced" results:

### Balance Threshold Formula
```javascript
balanceThreshold = Math.max(1, Math.floor(HIGH_POS * 0.2)) // 20% of HIGH threshold
```

### Thresholds by Act
| Act | HIGH Threshold | Balance Threshold | Requirement |
|-----|----------------|-------------------|-------------|
| 1   | ±4             | ±1                | ALL 6 axes within ±1 |
| 2   | ±7             | ±1                | ALL 6 axes within ±1 |
| 3   | ±10            | ±2                | ALL 6 axes within ±2 |
| 4   | ±12            | ±2                | ALL 6 axes within ±2 |

### Example
After 32 questions in Act 4, to get Forest Weavers you need:
- FA: -2 to +2
- CT: -2 to +2
- EC: -2 to +2
- OP: -2 to +2
- PR: -2 to +2
- TE: -2 to +2

This is **intentionally very difficult** - a true achievement for neutral players!

---

## Summary

✅ **Dynamic thresholds** ensure consistent difficulty across acts
✅ **All 15 endings** are achievable with intentional choices
✅ **Forest Weavers** requires genuine balance (±1-2 on all axes)
✅ **New endings** fill gaps (Ordered Commune, Sacred Order)
✅ **Closest-match fallback** ensures no player gets "stuck"
✅ **Scales appropriately** from 9 questions (Act 1) to 32 questions (Act 4)
✅ **Balanced progression** where cumulative choices create meaningful patterns

The system is now **robust, balanced, and player-friendly**! 🌲✨

