// === MULTI-ACT STRUCTURE ===
// Each choice has deltas for: FA, CT, EC, OP, PR, TE
const ACTS = {
  1: [
    {
      id: 1,
      name: "How Shall We Honor the Dead?",
      choices: [
        {
          label: "Bury under saplings",
          deltas: { FA: 1, CT: 0, EC: 1, OP: 0, PR: 1, TE: -2 }
        },
        {
          label: "Burn & forge tools",
          deltas: { FA: -1, CT: 2, EC: 0, OP: 0, PR: 0, TE: 1 }
        },
        {
          label: "Let forest reclaim",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 1, TE: -2 }
        },
        {
          label: "Mass grave",
          deltas: { FA: -1, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 2,
      name: "Who is your New Council?",
      choices: [
        {
          label: "Elders",
          deltas: { FA: 1, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Rotate species",
          deltas: { FA: 0, CT: 0, EC: 2, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Consensus rule",
          deltas: { FA: -1, CT: -1, EC: 2, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Just Player",
          deltas: { FA: 0, CT: 2, EC: 0, OP: -1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 3,
      name: "Who shall rule by your side as consort?",
      choices: [
        {
          label: "Marry a native",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 2, TE: 0 }
        },
        {
          label: "Foreign spouse",
          deltas: { FA: 1, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Stay single",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 2, TE: 0 }
        },
        {
          label: "Everyone",
          deltas: { FA: 0, CT: -1, EC: 2, OP: 1, PR: 1, TE: -1 }
        }
      ]
    },
    {
      id: 4,
      name: "What do we do with this human machine we found?",
      choices: [
        {
          label: "Repurpose metal for tools",
          deltas: { FA: -1, CT: 0, EC: -1, OP: 1, PR: 1, TE: -1 }
        },
        {
          label: "Keep as a sacred relic",
          deltas: { FA: 2, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Destroy it",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -2, PR: -1, TE: -1 }
        },
        {
          label: "Community property",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 5,
      name: "How Are Disputes Settled?",
      choices: [
        {
          label: "Mediation circles",
          deltas: { FA: 1, CT: 0, EC: 2, OP: 1, PR: 1, TE: -1 }
        },
        {
          label: "Strict arbiter",
          deltas: { FA: -2, CT: 1, EC: 0, OP: 0, PR: -1, TE: 1 }
        },
        {
          label: "Trial by challenge",
          deltas: { FA: 0, CT: 1, EC: -1, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Natural resolution",
          deltas: { FA: 0, CT: -2, EC: 0, OP: 0, PR: -1, TE: -2 }
        }
      ]
    },
    {
      id: 6,
      name: "Food Distribution",
      choices: [
        {
          label: "Equal rations distributed",
          deltas: { FA: 0, CT: 1, EC: 2, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "Free market",
          deltas: { FA: -1, CT: 1, EC: -2, OP: 0, PR: -1, TE: 1 }
        },
        {
          label: "Gather your own",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 0, TE: -2 }
        },
        {
          label: "Communal meals served",
          deltas: { FA: 1, CT: 1, EC: 2, OP: 1, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 7,
      name: "How do we rebuild our homes?",
      choices: [
        {
          label: "Communal longhouses",
          deltas: { FA: 1, CT: 0, EC: 2, OP: 1, PR: 0, TE: -1 }
        },
        {
          label: "Everyone stakes a claim and builds their own",
          deltas: { FA: -1, CT: -1, EC: -1, OP: 0, PR: 0, TE: 1 }
        },
        {
          label: "Assign dens by need",
          deltas: { FA: 0, CT: 1, EC: 2, OP: 1, PR: 1, TE: 1 }
        },
        {
          label: "Districts based on job and role",
          deltas: { FA: -1, CT: 1, EC: -1, OP: -1, PR: -1, TE: 2 }
        }
      ]
    },
    {
      id: 8,
      name: "How do we care for the sick?",
      choices: [
        {
          label: "Send away to a camp",
          deltas: { FA: -1, CT: 2, EC: 1, OP: -1, PR: -1, TE: -1 }
        },
        {
          label: "Must barter for care based on your resources",
          deltas: { FA: -1, CT: -1, EC: 2, OP: -1, PR: -1, TE: 1 }
        },
        {
          label: "Establish kingdom healer, available to all",
          deltas: { FA: 2, CT: 0, EC: 2, OP: 1, PR: 1, TE: -1 }
        },
        {
          label: "You're on your own",
          deltas: { FA: -1, CT: -2, EC: -1, OP: 0, PR: 0, TE: -1 }
        }
      ]
    },
    {
      id: 9,
      name: "Plan a festival – how should the kingdom celebrate?",
      choices: [
        {
          label: "It's orgy time",
          deltas: { FA: 1, CT: -1, EC: 2, OP: 0, PR: 1, TE: -1 }
        },
        {
          label: "Give thanks to the goddess",
          deltas: { FA: 2, CT: 0, EC: 1, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "Everyone gives gifts to loved ones",
          deltas: { FA: -1, CT: 0, EC: -2, OP: 0, PR: -1, TE: 1 }
        },
        {
          label: "Glorious leader day",
          deltas: { FA: 0, CT: 2, EC: 0, OP: -1, PR: -1, TE: 1 }
        }
      ]
    }
  ],
  2: [
    {
      id: 10,
      name: "Education",
      choices: [
        {
          label: "Rational skills",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Shamanic lessons",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "Mixed curriculum",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Family-led",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 11,
      name: "Ritual Presence",
      choices: [
        {
          label: "Mandated rituals",
          deltas: { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Encouraged rituals",
          deltas: { FA: 1, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Rituals banned in governance",
          deltas: { FA: -1, CT: 1, EC: 0, OP: 0, PR: 0, TE: 1 }
        },
        {
          label: "New rituals emerge",
          deltas: { FA: 1, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 12,
      name: "Language Policy",
      choices: [
        {
          label: "One common tongue",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Preserve dialects",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: -1, TE: 0 }
        },
        {
          label: "Hybrid language",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Silent-sign rituals",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }
        }
      ]
    },
    {
      id: 13,
      name: "Art & Culture",
      choices: [
        {
          label: "Traditional art",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Free art",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Council-approved art",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Ritual-only art",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 14,
      name: "Species Integration",
      choices: [
        {
          label: "Mixed housing",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Clan-only zones",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Specialist roles",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Random assignments",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 15,
      name: "Borders & Outsiders",
      choices: [
        {
          label: "Open borders",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Restricted entry",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 1 }
        },
        {
          label: "Aid-only entry",
          deltas: { FA: 1, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Closed borders",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 16,
      name: "Trade & Ownership",
      choices: [
        {
          label: "Guild markets",
          deltas: { FA: 0, CT: 1, EC: -1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "No currency / sharing",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Basic goods for all",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Free capitalism",
          deltas: { FA: 0, CT: -1, EC: -1, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 17,
      name: "Marriage / Bonding",
      choices: [
        {
          label: "Free-love bonds",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Clan-arranged unions",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Council-recognized unions",
          deltas: { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "No formal bonds",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 18,
      name: "Historical Records",
      choices: [
        {
          label: "Carve into sacred trees",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Keep libraries",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Oral history only",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 0, PR: 0, TE: -1 }
        },
        {
          label: "Let the past fade",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    }
  ],
  3: [
    {
      id: 19,
      name: "Famine Response",
      choices: [
        {
          label: "Ration strictly",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Expand foraging",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Trade for food",
          deltas: { FA: 0, CT: 0, EC: -1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Let clans decide",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 20,
      name: "The Discovery",
      choices: [
        {
          label: "Study it",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Worship it",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Seal it away",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Use it strategically",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 0, TE: 1 }
        }
      ]
    },
    {
      id: 21,
      name: "Migration Waves",
      choices: [
        {
          label: "Full welcome",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Selective entry",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Temporary camps",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Turn them away",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 22,
      name: "Rising Faction",
      choices: [
        {
          label: "Negotiate power-sharing",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Crack down",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Hold open debates",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Let faction self-govern",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 23,
      name: "Defense & Security",
      choices: [
        {
          label: "Citizen-volunteer guard",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Professional guard",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Ritual guardians",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "No guard",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 24,
      name: "Crime & Sabotage",
      choices: [
        {
          label: "Rehabilitation",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Punishment",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Restorative circles",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Exile",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 25,
      name: "Environmental Crisis",
      choices: [
        {
          label: "Eco-tech fixes",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: -1 }
        },
        {
          label: "Ritual intervention",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Evacuate",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Let nature rebalance",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 26,
      name: "Invention vs Tradition",
      choices: [
        {
          label: "Adopt invention",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Delay for council",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Reject invention",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "Public experiments",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 1, TE: 0 }
        }
      ]
    }
  ],
  4: [
    {
      id: 27,
      name: "What Becomes Sacred?",
      choices: [
        {
          label: "Ancestors",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Progress",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "The Forest",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }
        },
        {
          label: "Nothing is sacred",
          deltas: { FA: -1, CT: 1, EC: 0, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 28,
      name: "Teaching the Next Gen",
      choices: [
        {
          label: "Myths & ritual",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "History & facts",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "Future-first innovation",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Each mentor decides",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 29,
      name: "Territory Expansion",
      choices: [
        {
          label: "Expand aggressively",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Negotiate borders",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Create shared zones",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Do not expand",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 30,
      name: "Rebel Faction",
      choices: [
        {
          label: "Diplomacy",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Use force",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Grant autonomy",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Amnesty",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 31,
      name: "Final Constitutional Shape",
      choices: [
        {
          label: "Monarchy / elders",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Republic / council",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Collective consensus",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "No government",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 32,
      name: "Legacy of the Forest",
      choices: [
        {
          label: "Eternal tradition",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Eternal innovation",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Eternal cooperation",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Eternal freedom",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    }
  ]
};

// === Dynamic Threshold System ===
// Thresholds scale based on cumulative questions per act
const THRESHOLDS_PER_ACT = {
  1: { HIGH_POS: 4, HIGH_NEG: -4 },   // 8 questions
  2: { HIGH_POS: 7, HIGH_NEG: -7 },   // 17 cumulative
  3: { HIGH_POS: 10, HIGH_NEG: -10 }, // 25 cumulative
  4: { HIGH_POS: 12, HIGH_NEG: -12 }  // 31 cumulative
};

function getThresholds(act) {
  return THRESHOLDS_PER_ACT[act] || THRESHOLDS_PER_ACT[4];
}

function isHighPos(v, thresholds) { return v >= thresholds.HIGH_POS; }
function isHighNeg(v, thresholds) { return v <= thresholds.HIGH_NEG; }
function isMid(v, thresholds) { return v > thresholds.HIGH_NEG && v < thresholds.HIGH_POS; }

// Helper function to calculate alignment percentage to an ending profile
function calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds) {
  // Calculate Euclidean distance to ideal profile
  const distance = Math.sqrt(
    Math.pow((FA - profile.FA * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
    Math.pow((CT - profile.CT * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
    Math.pow((EC - profile.EC * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
    Math.pow((OP - profile.OP * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
    Math.pow((PR - profile.PR * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
    Math.pow((TE - profile.TE * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2)
  );
  
  // Convert distance to percentage (0 distance = 100%, max distance = 0%)
  const maxDistance = Math.sqrt(6 * 4);
  return Math.max(0, Math.min(100, Math.round((1 - distance / maxDistance) * 100)));
}

// === Ending resolver ===
function resolveEnding(FA, CT, EC, OP, PR, TE, act = 4) {
  const thresholds = getThresholds(act);
  const vals = { FA, CT, EC, OP, PR, TE };
  const highPosCount = Object.values(vals).filter(v => isHighPos(v, thresholds)).length;
  const highNegCount = Object.values(vals).filter(v => isHighNeg(v, thresholds)).length;

  // 1. Verdant Theocracy (spiritual leadership)
  if (isHighPos(FA, thresholds) && !isHighNeg(CT, thresholds)) {
    const profile = { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 };
    return {
      id: 1,
      name: "The Verdant Theocracy",
      tagline: "The forest is ruled by roots and rites; law is written in leaf and omen.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Faith, not extreme anarchy."
    };
  }

  // 2. Thorn Regime (authoritarian + closed)
  if (isHighPos(CT, thresholds) && isHighNeg(OP, thresholds) && PR <= 0) {
    return {
      id: 2,
      name: "The Thorn Regime",
      tagline: "Order at any cost. The forest tightens into a barbed crown.",
      debug: "High Control, very closed, traditional/non-innovative."
    };
  }

  // 3. Ironbloom Meritocracy (Capitalist + Industrial + Rational)
  if (isHighNeg(EC, thresholds) && isHighPos(TE, thresholds) && FA < 0 && !isHighNeg(CT, thresholds)) {
    const profile = { FA: -1, CT: 0, EC: -1, OP: 0, PR: 0, TE: 1 };
    return {
      id: 3,
      name: "The Ironbloom Meritocracy",
      tagline: "Only the strongest shoots survive; steel and status feed the roots.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Economy strongly capitalist, Tech strongly industrial, Faith negative (rational)."
    };
  }

  // 4. Free-Root Collective
  if (isHighPos(EC, thresholds) && isHighNeg(CT, thresholds) && isHighPos(OP, thresholds)) {
    return {
      id: 4,
      name: "The Free-Root Collective",
      tagline: "Borders blur, property dissolves, and the forest lives as one vast commune.",
      debug: "Communal economy, very free, very open."
    };
  }

  // 5. Cosmopolitan Grove
  if (isHighPos(OP, thresholds) && isMid(CT, thresholds)) {
    return {
      id: 5,
      name: "The Cosmopolitan Grove",
      tagline: "Paths and tongues cross freely; the forest becomes a crossroads of worlds.",
      debug: "Openness very high, Control moderate."
    };
  }

  // 6. Shielded Woodland
  if (isHighNeg(OP, thresholds) && CT >= 0 && PR <= 0) {
    return {
      id: 6,
      name: "The Shielded Woodland",
      tagline: "Walls of bark and belief keep the outside at bay; safety is found in seclusion.",
      debug: "Closed borders, some order, traditional or neutral progress."
    };
  }

  // 7. Dawnbound Republic
  if (isHighPos(PR, thresholds) && isHighPos(OP, thresholds) && isMid(CT, thresholds) && isMid(FA, thresholds)) {
    return {
      id: 7,
      name: "The Dawnbound Republic",
      tagline: "Tradition roots the forest, but new ideas steer its sunlit council.",
      debug: "High Progress + Openness, mid Control + Faith."
    };
  }

  // 8. Emerald Symbiosis (Green Tech)
  if (isHighNeg(TE, thresholds) && PR >= 0 && OP >= 0 && EC >= 0) {
    return {
      id: 8,
      name: "The Emerald Symbiosis",
      tagline: "Vines and circuits entwine; the forest and its tools become one living system.",
      debug: "Tech strongly Green (negative TE) with neutral+ PR, OP, EC."
    };
  }

  // 9. Ashen Restoration
  if (isHighPos(PR, thresholds) && FA <= 0 && isMid(TE, thresholds) && EC >= 0) {
    return {
      id: 9,
      name: "The Ashen Restoration",
      tagline: "With clear eyes and scarred bark, the forest rebuilds from what was burned.",
      debug: "High Progress, low/neutral Faith, mid Tech, communal/neutral EC."
    };
  }

  // 10. Primeval Kingdom
  if (isHighNeg(PR, thresholds) && isHighPos(CT, thresholds) && FA > 0) {
    const profile = { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 };
    return {
      id: 10,
      name: "The Primeval Kingdom",
      tagline: "Ancestral laws and crowned canopies rule; the oldest rings decide the newest growth.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Strongly Traditional, very high Control, positive Faith (ancestral/spiritual)."
    };
  }

  // 11. Great Schism (contradictory choices)
  if (highPosCount >= 2 && highNegCount >= 2) {
    return {
      id: 11,
      name: "The Great Schism",
      tagline: "Opposing visions tear the forest into irreconcilable factions.",
      debug: `High positive axes: ${highPosCount}, high negative axes: ${highNegCount}.`
    };
  }

  // 12. Ascendant Revelation (cult + innovation)
  if (isHighPos(FA, thresholds) && isHighPos(CT, thresholds) && OP <= (thresholds.HIGH_NEG * 0.8) && isHighPos(PR, thresholds)) {
    return {
      id: 12,
      name: "The Ascendant Revelation",
      tagline: "A radiant doctrine seizes the forest, promising transcendence through obedience.",
      debug: "FA and CT very high, OP somewhat closed, PR very high."
    };
  }

  // 13. Ordered Commune (High Control + High Economy/Communal, no extreme faith/openness)
  if (isHighPos(CT, thresholds) && isHighPos(EC, thresholds) && !isHighPos(FA, thresholds) && !isHighNeg(OP, thresholds)) {
    return {
      id: 13,
      name: "The Ordered Commune",
      tagline: "Strong hands guide shared resources; structure and cooperation build the forest's future.",
      debug: "High Control + High Communal Economy, balanced faith/openness."
    };
  }

  // 14. Sacred Order (High Faith + High Control, communal leaning)
  if (isHighPos(FA, thresholds) && isHighPos(CT, thresholds) && EC > 0) {
    return {
      id: 14,
      name: "The Sacred Order",
      tagline: "Divine authority guides the community; faith and discipline shape every branch.",
      debug: "High Faith + High Control with communal economy."
    };
  }

  // 15. Forest Weavers (Balanced) - only if GENUINELY balanced (all scores near zero)
  // VERY strict requirement: 20% of HIGH threshold, minimum 1
  const balanceThreshold = Math.max(1, Math.floor(thresholds.HIGH_POS * 0.2)); // 20% of HIGH threshold
  const isTrulyBalanced = 
    Math.abs(FA) <= balanceThreshold && 
    Math.abs(CT) <= balanceThreshold && 
    Math.abs(EC) <= balanceThreshold &&
    Math.abs(OP) <= balanceThreshold && 
    Math.abs(PR) <= balanceThreshold && 
    Math.abs(TE) <= balanceThreshold;
  
  if (isTrulyBalanced) {
    return {
      id: 15,
      name: "The Forest Weavers",
      tagline: "(Balanced Ending) The forest holds all its tensions in fragile harmony.",
      debug: `All 6 axes within ±${balanceThreshold} (genuinely balanced - very rare!).`
    };
  }

  // Fallback: Find closest matching ending
  const allEndings = [
    { id: 1, profile: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 }, name: "The Verdant Theocracy", tagline: "The forest is ruled by roots and rites; law is written in leaf and omen." },
    { id: 2, profile: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }, name: "The Thorn Regime", tagline: "Order at any cost. The forest tightens into a barbed crown." },
    { id: 3, profile: { FA: -1, CT: 0, EC: -1, OP: 0, PR: 0, TE: 1 }, name: "The Ironbloom Meritocracy", tagline: "Only the strongest shoots survive; steel and status feed the roots." },
    { id: 4, profile: { FA: 0, CT: -1, EC: 1, OP: 1, PR: 0, TE: 0 }, name: "The Free-Root Collective", tagline: "Borders blur, property dissolves, and the forest lives as one vast commune." },
    { id: 5, profile: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }, name: "The Cosmopolitan Grove", tagline: "Paths and tongues cross freely; the forest becomes a crossroads of worlds." },
    { id: 6, profile: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }, name: "The Shielded Woodland", tagline: "Walls of bark and belief keep the outside at bay; safety is found in seclusion." },
    { id: 7, profile: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }, name: "The Dawnbound Republic", tagline: "Tradition roots the forest, but new ideas steer its sunlit council." },
    { id: 8, profile: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }, name: "The Emerald Symbiosis", tagline: "Vines and circuits entwine; the forest and its tools become one living system." },
    { id: 9, profile: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }, name: "The Ashen Restoration", tagline: "With clear eyes and scarred bark, the forest rebuilds from what was burned." },
    { id: 10, profile: { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }, name: "The Primeval Kingdom", tagline: "Ancestral laws and crowned canopies rule; the oldest rings decide the newest growth." },
    { id: 11, profile: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 }, name: "The Great Schism", tagline: "Opposing visions tear the forest into irreconcilable factions." },
    { id: 12, profile: { FA: 1, CT: 1, EC: 0, OP: -1, PR: 1, TE: 0 }, name: "The Ascendant Revelation", tagline: "A radiant doctrine seizes the forest, promising transcendence through obedience." },
    { id: 13, profile: { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }, name: "The Ordered Commune", tagline: "Strong hands guide shared resources; structure and cooperation build the forest's future." },
    { id: 14, profile: { FA: 1, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }, name: "The Sacred Order", tagline: "Divine authority guides the community; faith and discipline shape every branch." },
    { id: 15, profile: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 }, name: "The Forest Weavers", tagline: "(Balanced Ending) The forest holds all its tensions in fragile harmony." }
  ];

  // Calculate distance to each ending profile (normalized by thresholds)
  let closestEnding = allEndings[0];
  let minDistance = Infinity;
  
  for (const ending of allEndings) {
    // Calculate Euclidean distance in normalized space
    const distance = Math.sqrt(
      Math.pow((FA - ending.profile.FA * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
      Math.pow((CT - ending.profile.CT * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
      Math.pow((EC - ending.profile.EC * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
      Math.pow((OP - ending.profile.OP * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
      Math.pow((PR - ending.profile.PR * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2) +
      Math.pow((TE - ending.profile.TE * thresholds.HIGH_POS) / thresholds.HIGH_POS, 2)
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      closestEnding = ending;
    }
  }
  
  // Calculate alignment percentage (closer to 0 distance = higher percentage)
  // Max reasonable distance is around 6 (all axes at opposite extremes)
  const maxDistance = Math.sqrt(6 * 4); // sqrt of 6 axes * 4 (2 thresholds squared)
  const alignmentPercent = Math.max(0, Math.min(100, Math.round((1 - minDistance / maxDistance) * 100)));
  
  return {
    id: closestEnding.id,
    name: closestEnding.name,
    tagline: closestEnding.tagline,
    alignmentPercent: alignmentPercent,
    debug: `Closest match fallback (${alignmentPercent}% aligned). Scores: FA:${FA}, CT:${CT}, EC:${EC}, OP:${OP}, PR:${PR}, TE:${TE}`
  };
}

// === Quiz state ===
let currentAct = 1;
let currentIndex = 0;
const actEndings = {}; // Store computed ending for each act
const allAnswers = {
  1: new Array(ACTS[1].length).fill(null),
  2: new Array(ACTS[2].length).fill(null),
  3: new Array(ACTS[3].length).fill(null),
  4: new Array(ACTS[4].length).fill(null)
};

function getCurrentQuestions() {
  return ACTS[currentAct];
}

function getCurrentAnswers() {
  return allAnswers[currentAct];
}

function recalcScores() {
  const totals = { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 };
  
  // Sum up all answers from all acts up to and including current act
  for (let act = 1; act <= currentAct; act++) {
    const actQuestions = ACTS[act];
    const actAnswers = allAnswers[act];
    
    actQuestions.forEach((q, qi) => {
      const choiceIndex = actAnswers[qi];
      if (choiceIndex == null) return;
      const deltas = q.choices[choiceIndex].deltas;
      for (const key in totals) {
        totals[key] += deltas[key] || 0;
      }
    });
  }
  
  document.getElementById("score-fa").textContent = totals.FA;
  document.getElementById("score-ct").textContent = totals.CT;
  document.getElementById("score-ec").textContent = totals.EC;
  document.getElementById("score-op").textContent = totals.OP;
  document.getElementById("score-pr").textContent = totals.PR;
  document.getElementById("score-te").textContent = totals.TE;
  
  // Calculate and show trending ending
  const trendingEnding = resolveEnding(
    totals.FA, totals.CT, totals.EC, totals.OP, totals.PR, totals.TE, currentAct
  );
  document.getElementById("trending-name").textContent = trendingEnding.name;
  
  // Show alignment percentage if available
  if (trendingEnding.alignmentPercent !== undefined) {
    document.getElementById("trending-alignment").textContent = 
      `${trendingEnding.alignmentPercent}% aligned with this ending`;
  } else {
    document.getElementById("trending-alignment").textContent = "";
  }
  
  return totals;
}

function renderQuestion() {
  const questions = getCurrentQuestions();
  const answers = getCurrentAnswers();
  const q = questions[currentIndex];
  
  document.getElementById("act-display").textContent = `Act ${currentAct}`;
  document.getElementById("q-number").textContent = `Policy ${q.id}`;
  document.getElementById("q-name").textContent = q.name;
  document.getElementById("q-progress").textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;
  
  // Update progress bar
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = `${progressPercent}%`;
  document.getElementById("progress-text").textContent = 
    `Question ${currentIndex + 1} of ${questions.length}`;

  const container = document.getElementById("choices-container");
  container.innerHTML = "";
  q.choices.forEach((choice, idx) => {
    const choiceId = `q${currentAct}-${currentIndex}-choice${idx}`;
    const wrapper = document.createElement("div");
    wrapper.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${currentAct}-${currentIndex}`;
    input.id = choiceId;
    input.value = idx;
    if (answers[currentIndex] === idx) input.checked = true;

    input.addEventListener("change", () => {
      allAnswers[currentAct][currentIndex] = idx;
      recalcScores();
    });

    const label = document.createElement("label");
    label.className = "choice-label";
    label.setAttribute("for", choiceId);
    label.textContent = choice.label;

    wrapper.appendChild(input);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });

  document.getElementById("prev-btn").disabled = currentIndex === 0;
  
  // On last question, change Next button to show it will compute ending
  const isLastQuestion = currentIndex === questions.length - 1;
  const nextBtn = document.getElementById("next-btn");
  
  if (isLastQuestion) {
    nextBtn.textContent = "🔮 View Act Ending →";
    nextBtn.className = "btn-primary"; // Make it primary/highlighted
  } else {
    nextBtn.textContent = "Next →";
    nextBtn.className = "btn-secondary";
  }
  
  // Show/hide UI elements based on state
  document.getElementById("question-block").style.display = "block";
  document.getElementById("act-complete-block").style.display = "none";
  document.getElementById("continue-btn").style.display = "none";
  document.getElementById("prev-btn").style.display = "inline-flex";
  document.getElementById("next-btn").style.display = "inline-flex";
  document.querySelector(".progress-container").style.display = "block";
  document.getElementById("trending-block").style.display = "block"; // Show trending during questions
}

function computeEnding() {
  const totals = recalcScores();
  const res = resolveEnding(
    totals.FA,
    totals.CT,
    totals.EC,
    totals.OP,
    totals.PR,
    totals.TE,
    currentAct  // Pass current act for dynamic thresholds
  );
  
  // Store the ending for this act
  actEndings[currentAct] = res;
  
  // Update the sidebar and show it
  document.getElementById("result-block").style.display = "block";
  document.getElementById("ending-name").textContent = res.name;
  
  // Show alignment percentage if available
  if (res.alignmentPercent !== undefined) {
    document.getElementById("ending-alignment").textContent = 
      `${res.alignmentPercent}% aligned with this ending`;
  } else {
    document.getElementById("ending-alignment").textContent = "";
  }
  
  document.getElementById("ending-tagline").textContent = res.tagline;
  document.getElementById("debug").textContent =
    `FA: ${totals.FA}, CT: ${totals.CT}, EC: ${totals.EC}, OP: ${totals.OP}, PR: ${totals.PR}, TE: ${totals.TE}\n` +
    (res.debug || "");
  
  // Show act complete screen
  document.getElementById("question-block").style.display = "none";
  document.getElementById("act-complete-block").style.display = "block";
  document.getElementById("prev-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.querySelector(".progress-container").style.display = "none";
  document.getElementById("trending-block").style.display = "none"; // Hide trending when showing actual ending
  
  // Build summary of all acts so far
  let summary = `<strong>Act ${currentAct} Ending: ${res.name}</strong><br>${res.tagline}`;
  
  if (currentAct < 4) {
    document.getElementById("continue-btn").style.display = "inline-flex";
  } else {
    // Final act - show all endings
    summary = "<strong>Your Journey Complete!</strong><br><br>";
    for (let act = 1; act <= 4; act++) {
      const ending = actEndings[act];
      if (ending) {
        summary += `<strong>Act ${act}:</strong> ${ending.name}<br><em>${ending.tagline}</em><br><br>`;
      }
    }
  }
  
  document.getElementById("act-ending-summary").innerHTML = summary;
}

function continueToNextAct() {
  if (currentAct < 4) {
    currentAct++;
    currentIndex = 0;
    renderQuestion();
  }
}

function resetQuiz() {
  currentAct = 1;
  currentIndex = 0;
  
  // Reset all answers
  for (let act in allAnswers) {
    for (let i = 0; i < allAnswers[act].length; i++) {
      allAnswers[act][i] = null;
    }
  }
  
  // Clear endings
  for (let act in actEndings) {
    delete actEndings[act];
  }
  
  recalcScores();
  document.getElementById("result-block").style.display = "none";
  document.getElementById("ending-name").textContent = "";
  document.getElementById("ending-tagline").textContent = "";
  document.getElementById("debug").textContent = "";
  renderQuestion();
}

// Initialize the app
function initApp() {
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    const questions = getCurrentQuestions();
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      // On last question, compute ending automatically
      computeEnding();
    }
  });
  
  document.getElementById("continue-btn").addEventListener("click", continueToNextAct);
  document.getElementById("reset-btn").addEventListener("click", resetQuiz);

  renderQuestion();
  recalcScores();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

