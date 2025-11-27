# Decay Game - Balance Analysis (10 Endings)

## Overview
The game features **10 distinct, achievable endings** numbered 1-10 that cover all major political/philosophical axes.

## Final 10 Endings

### 1. The Verdant Theocracy
- **Requirements:** HIGH Faith, not extreme anarchy
- **Theme:** Spiritual leadership, faith-driven governance
- **Profile:** FA:HIGH

### 2. The Thorn Regime
- **Requirements:** HIGH Control + NEG Openness + Traditional (PR ≤ 0)
- **Theme:** Authoritarian isolationist state
- **Profile:** CT:HIGH, OP:NEG, PR:NEG

### 3. The Free-Root Collective
- **Requirements:** HIGH Communal + NEG Control + HIGH Openness
- **Theme:** Anarchist commune with open borders
- **Profile:** EC:HIGH, CT:NEG, OP:HIGH

### 4. The Cosmopolitan Grove
- **Requirements:** HIGH Openness + HIGH Communal + MID Control
- **Theme:** Open borders, communal sharing, cultural crossroads
- **Profile:** OP:HIGH, EC:HIGH, CT:MID

### 5. The Shielded Woodland
- **Requirements:** NEG Openness + CT ≥ 0 + Traditional (PR ≤ 0)
- **Theme:** Moderate isolationist society
- **Profile:** OP:NEG, CT:≥0, PR:≤0

### 6. The Dawnbound Republic
- **Requirements:** HIGH Progress + HIGH Openness + MID Control + MID Faith
- **Theme:** Progressive democracy with innovation
- **Profile:** PR:HIGH, OP:HIGH, CT:MID, FA:MID

### 7. The Emerald Symbiosis
- **Requirements:** NEG Tech (Green) + positive PR/OP/EC
- **Theme:** Natural/green technology, ecological harmony
- **Profile:** TE:NEG (green), PR/OP/EC:≥0

### 8. The Primeval Kingdom
- **Requirements:** NEG Progress (Traditional) + HIGH Control + FA > 0
- **Theme:** Traditional monarchy with ancestral faith
- **Profile:** PR:NEG, CT:HIGH, FA:POS

### 9. The Ordered Commune
- **Requirements:** HIGH Control + HIGH Communal + not HIGH Faith + not NEG Openness
- **Theme:** Structured socialism with organization
- **Profile:** CT:HIGH, EC:HIGH, FA:not HIGH, OP:not NEG

### 10. The Sacred Order
- **Requirements:** HIGH Faith + HIGH Control + HIGH Communal
- **Theme:** Theocratic commune with divine authority
- **Profile:** FA:HIGH, CT:HIGH, EC:HIGH

## Dynamic Threshold System

Thresholds scale with cumulative questions to maintain consistent difficulty:

| Act | Questions (Cumulative) | HIGH_POS | HIGH_NEG | Reasoning |
|-----|----------------------|----------|----------|-----------|
| 1   | 9                    | +4       | -4       | ~50% of realistic max (~9-11) |
| 2   | 18                   | +7       | -7       | ~50% of realistic max (~13-16) |
| 3   | 26                   | +10      | -10      | ~50% of realistic max (~19-23) |
| 4   | 32                   | +12      | -12      | ~50% of realistic max (~23-27) |

## Score Ranges by Act

| Act | Max Positive | Max Negative | Questions |
|-----|--------------|--------------|-----------|
| 1   | ~+9 to +11   | ~-9 to -11   | 9         |
| 2   | ~+15 to +17  | ~-13 to -15  | 18        |
| 3   | ~+21 to +23  | ~-19 to -21  | 26        |
| 4   | ~+26 to +29  | ~-23 to -27  | 32        |

## Ending Check Order (Most Specific → Least Specific)

The endings are checked in this order to prevent more general endings from "capturing" specific combinations:

1. **Sacred Order** (FA+CT+EC all HIGH) - Most specific 3-axis combo
2. **Primeval Kingdom** (PR NEG + CT HIGH + FA POS) - Specific combo
3. **Ordered Commune** (CT+EC HIGH, not FA HIGH, not OP NEG) - Structured socialism
4. **Thorn Regime** (CT HIGH + OP NEG + PR ≤ 0) - Authoritarian isolationist
5. **Free-Root Collective** (EC HIGH + CT NEG + OP HIGH) - All 3 conditions
6. **Dawnbound Republic** (PR+OP HIGH, CT+FA MID) - Multi-condition progressive
7. **Verdant Theocracy** (FA HIGH) - General faith ending
8. **Cosmopolitan Grove** (OP HIGH + EC HIGH + CT MID) - Open communal society
9. **Emerald Symbiosis** (TE NEG + others ≥ 0) - Green tech
10. **Shielded Woodland** (OP NEG + CT ≥ 0 + PR ≤ 0) - Isolationist fallback

## Ending Achievability

All 10 endings are deliberately designed to be:
- ✅ **Achievable** - Can be reached through intentional play
- ✅ **Distinct** - Each represents a unique political/philosophical position
- ✅ **Balanced** - No ending is significantly harder than others

### Difficulty Tiers

**Easy (Single Axis Focus):**
- 1. Verdant Theocracy (HIGH Faith)
- 7. Emerald Symbiosis (NEG Tech)

**Moderate (Dual/Triple Axis):**
- 2. Thorn Regime (Control + Closed + Traditional)
- 3. Free-Root Collective (Communal + Anarchy + Open)
- 4. Cosmopolitan Grove (Openness + Communal + balanced Control)
- 5. Shielded Woodland (Closed + Traditional)
- 6. Dawnbound Republic (Progress + Openness + balanced others)

**Challenging (Triple+ Axis):**
- 8. Primeval Kingdom (Traditional + Authoritarian + Faith)
- 9. Ordered Commune (Control + Communal, avoiding Faith)
- 10. Sacred Order (Faith + Control + Communal all HIGH)

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
- Sequential numbering (1-10) for clarity

Players can intentionally pursue any ending and see meaningful progress toward their chosen path throughout all 4 acts.
