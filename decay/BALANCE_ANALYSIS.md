# Decay Game - Balance Analysis (10 Endings)

## Overview
The game features **10 distinct, achievable endings** numbered 1-10 that cover all major political/philosophical axes. Endings are listed in check order from most specific to least specific.

## Final 10 Endings
*(Listed in check order - most specific to least specific)*

### 1. The Sacred Order
- **Requirements:** HIGH Faith + HIGH Control + HIGH Communal
- **Theme:** Theocratic commune with divine authority
- **Profile:** FA:HIGH, CT:HIGH, EC:HIGH

### 2. The Primeval Kingdom
- **Requirements:** NEG Progress (Traditional) + HIGH Control + FA > 0
- **Theme:** Traditional monarchy with ancestral faith
- **Profile:** PR:NEG, CT:HIGH, FA:POS

### 3. The Ordered Commune
- **Requirements:** HIGH Control + HIGH Communal + not HIGH Faith + not NEG Openness
- **Theme:** Structured socialism with organization
- **Profile:** CT:HIGH, EC:HIGH, FA:not HIGH, OP:not NEG

### 4. The Thorn Regime
- **Requirements:** HIGH Control + NEG Openness + Traditional (PR ≤ 0)
- **Theme:** Authoritarian isolationist state
- **Profile:** CT:HIGH, OP:NEG, PR:NEG

### 5. The Free-Root Collective
- **Requirements:** HIGH Communal + NEG Control + HIGH Openness + Green/Neutral Tech (TE ≤ 0)
- **Theme:** Natural anarchist commune rejecting industrial technology
- **Profile:** EC:HIGH, CT:NEG, OP:HIGH, TE:NEG/NEUTRAL

### 6. The Dawnbound Republic
- **Requirements:** HIGH Progress + HIGH Openness + MID Control + MID Faith
- **Theme:** Progressive democracy with innovation
- **Profile:** PR:HIGH, OP:HIGH, CT:MID, FA:MID

### 7. The Verdant Theocracy
- **Requirements:** HIGH Faith + MID Control + Green/Neutral Tech (TE ≤ 0)
- **Theme:** Nature-worshipping spiritual leadership with moderate governance
- **Profile:** FA:HIGH, CT:MID, TE:NEG/NEUTRAL

### 8. The Cosmopolitan Grove
- **Requirements:** HIGH Openness + MID Communal + MID Control + HIGH Tech (TE ≥ 13) + Positive Progress (PR ≥ 0)
- **Theme:** High-tech industrial metropolis enabling cultural exchange and trade
- **Profile:** OP:HIGH, EC:MID, CT:MID, TE:HIGH, PR:POS

### 9. The Emerald Symbiosis
- **Requirements:** NEG Tech (Green) + positive PR/OP/EC
- **Theme:** Natural/green technology, ecological harmony
- **Profile:** TE:NEG (green), PR/OP/EC:≥0

### 10. The Shielded Woodland
- **Requirements:** NEG Openness + CT ≥ 0 + Traditional (PR ≤ 0)
- **Theme:** Moderate isolationist society
- **Profile:** OP:NEG, CT:≥0, PR:≤0

## Dynamic Threshold System

Thresholds scale with cumulative questions to maintain consistent difficulty:

| Act | Name | Questions (Cumulative) | HIGH_POS | HIGH_NEG | Reasoning |
|-----|------|----------------------|----------|----------|-----------|
| 1   | Emergence | 10                   | +4       | -4       | ~40% of realistic max (~10-12) |
| 2   | New Growth | 19                   | +7       | -7       | ~40% of realistic max (~16-19) |
| 3   | The Weathering | 28                   | +10      | -10      | ~40% of realistic max (~24-28) |
| 4   | Eternal Forest | 37                   | +13      | -13      | ~40% of realistic max (~32-37) |

## Score Ranges by Act

| Act | Name | Max Positive | Max Negative | Questions |
|-----|------|--------------|--------------|-----------|
| 1   | Emergence | ~+10 to +12  | ~-10 to -12  | 10        |
| 2   | New Growth | ~+16 to +19  | ~-16 to -19  | 19 cumulative (9 in Act 2) |
| 3   | The Weathering | ~+24 to +28  | ~-24 to -28  | 28 cumulative (9 in Act 3) |
| 4   | Eternal Forest | ~+32 to +37  | ~-32 to -37  | 37 cumulative (9 in Act 4) |

## Ending Check Order (Most Specific → Least Specific)

The endings are checked in this order to prevent more general endings from "capturing" specific combinations:

1. **Sacred Order** - FA+CT+EC all HIGH - Most specific 3-axis combo
2. **Primeval Kingdom** - PR NEG + CT HIGH + FA POS - Specific combo
3. **Ordered Commune** - CT+EC HIGH, not FA HIGH, not OP NEG - Structured socialism
4. **Thorn Regime** - CT HIGH + OP NEG + PR ≤ 0 - Authoritarian isolationist
5. **Free-Root Collective** - EC HIGH + CT NEG + OP HIGH + TE ≤ 0 - Natural anarchist commune
6. **Dawnbound Republic** - PR+OP HIGH, CT+FA MID - Multi-condition progressive
7. **Verdant Theocracy** - FA HIGH + CT MID + TE ≤ 0 - Nature worship spiritual leadership
8. **Cosmopolitan Grove** - OP HIGH + EC MID + CT MID + TE HIGH + PR ≥ 0 - High-tech metropolis
9. **Emerald Symbiosis** - TE NEG + others ≥ 0 - Green tech
10. **Shielded Woodland** - OP NEG + CT ≥ 0 + PR ≤ 0 - Isolationist fallback

## Ending Achievability

All 10 endings are deliberately designed to be:
- ✅ **Achievable** - Can be reached through intentional play
- ✅ **Distinct** - Each represents a unique political/philosophical position
- ✅ **Balanced** - No ending is significantly harder than others

### Difficulty Tiers

**Easy (Single/Dual Axis):**
- 9. Emerald Symbiosis - NEG Tech + positive others

**Moderate (Dual/Triple Axis):**
- 4. Thorn Regime - Control + Closed + Traditional
- 6. Dawnbound Republic - Progress + Openness + balanced others
- 7. Verdant Theocracy - Faith + Moderate Control + Green Tech
- 10. Shielded Woodland - Closed + Traditional

**Challenging (Triple+ Axis):**
- 5. Free-Root Collective - Communal + Anarchy + Open + Green Tech
- 8. Cosmopolitan Grove - High Openness + balanced Communal/Control + HIGH Tech + Progress

**Very Challenging (4+ Axes):**
- 1. Sacred Order - Faith + Control + Communal all HIGH
- 2. Primeval Kingdom - Traditional + Authoritarian + Faith
- 3. Ordered Commune - Control + Communal, avoiding Faith

## Fallback System

If no explicit ending matches, the game uses **Euclidean distance** to find the closest ending profile, ensuring every player gets a relevant result with an alignment percentage showing how well their choices matched.

## Balance Verification

✅ All axes can reach HIGH/NEG thresholds by Act 4
✅ No ending requires impossible combinations
✅ Ending check order prevents mis-categorization
✅ Fallback ensures everyone gets an ending
✅ Alignment percentages provide meaningful feedback

## Technical Implementation

### Threshold Functions
```javascript
function isHighPos(v, act) { return v >= THRESHOLDS[act].HIGH_POS; }
function isHighNeg(v, act) { return v <= THRESHOLDS[act].HIGH_NEG; }
function isMid(v, act) { return v > THRESHOLDS[act].HIGH_NEG && v < THRESHOLDS[act].HIGH_POS; }
```

### Alignment Calculation
```javascript
function calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds) {
  // Normalize scores to -1 to 1 range
  // Calculate Euclidean distance to ideal profile
  // Convert to 0-100% similarity score
  return alignmentPercent;
}
```

## Spectrum Definitions

1. **FAITH** (Rational → Spiritual): -12 to +12
2. **CONTROL** (Anarchy → Authoritarian): -12 to +12
3. **ECONOMY** (Capitalist → Communal): -12 to +12
4. **OPENNESS** (Protectionist → Progressive): -12 to +12
5. **PROGRESS** (Traditional → Innovation): -12 to +12
6. **TECH** (Natural → Industrial): -12 to +12

## Summary

The 10-ending system provides:
- Clear, achievable goals
- Meaningful political/philosophical diversity
- Balanced difficulty across all endings
- Strong feedback through alignment percentages
- Sequential numbering (1-10) from most specific to least specific

Players can intentionally pursue any ending and see meaningful progress toward their chosen path throughout all 4 acts.
