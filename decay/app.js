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
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Foreign spouse",
          deltas: { FA: 1, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Stay single",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 1, TE: 0 }
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
          deltas: { FA: 1, CT: 0, EC: 2, OP: 1, PR: 0, TE: -1 }
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
          deltas: { FA: -1, CT: 2, EC: 0, OP: -1, PR: -1, TE: -1 }
        },
        {
          label: "Must barter for care based on your resources",
          deltas: { FA: -1, CT: -1, EC: -2, OP: -1, PR: -1, TE: 1 }
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
          deltas: { FA: 0, CT: -1, EC: 2, OP: 0, PR: 1, TE: -1 }
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
      name: "How should the young learn and grow in your kingdom?",
      choices: [
        {
          label: "Teach science, math, and practical skills",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Teach shamanic traditions and forest wisdom",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "A mixed curriculum drawing from all cultures",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Let each family teach their own way",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 11,
      name: "What role should spiritual rituals play in your kingdom?",
      choices: [
        {
          label: "All citizens must participate in traditional rituals",
          deltas: { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Rituals are encouraged but optional",
          deltas: { FA: 1, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Keep rituals separate from governance entirely",
          deltas: { FA: -1, CT: 1, EC: 0, OP: 0, PR: 0, TE: 1 }
        },
        {
          label: "Welcome creative new rituals to emerge freely",
          deltas: { FA: 1, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 12,
      name: "Different species speak different tongues. How will your kingdom communicate?",
      choices: [
        {
          label: "Mandate one common language for unity",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Preserve each clan's ancient dialects",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: -1, TE: 0 }
        },
        {
          label: "Create a hybrid language from all tongues",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Use sacred silent-sign communication",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }
        }
      ]
    },
    {
      id: 13,
      name: "Artists wish to create. What forms of expression will you permit?",
      choices: [
        {
          label: "Only traditional sacred art honoring ancestors",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "All art is permitted; creators are free",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Art must be reviewed and approved by council",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Only ritual art for ceremonies is allowed",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 14,
      name: "How should different species live together in your kingdom?",
      choices: [
        {
          label: "Integrated housing where all species mix freely",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Separate zones for each clan to preserve traditions",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Assign species to roles based on their strengths",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Randomly assign housing to break down barriers",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 15,
      name: "Strangers approach your borders seeking entry. What is your policy?",
      choices: [
        {
          label: "Welcome all; our borders are open",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Strictly control who may enter",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Only those seeking aid or sanctuary may enter",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Close the borders; no outsiders allowed",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 16,
      name: "How will goods and resources flow through your kingdom?",
      choices: [
        {
          label: "Organized guild markets with fair regulations",
          deltas: { FA: 0, CT: 1, EC: -1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Abolish currency; everything is shared freely",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Guarantee basic goods for everyone",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Free market capitalism without restrictions",
          deltas: { FA: 0, CT: -1, EC: -1, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 17,
      name: "How should romantic bonds and partnerships be formed?",
      choices: [
        {
          label: "Free love; bond with whomever you choose",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Marriages arranged by clan elders",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Unions must be formally recognized by council",
          deltas: { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "No formal bonds; relationships need no approval",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 18,
      name: "How should your kingdom preserve its history and stories?",
      choices: [
        {
          label: "Carve our history into the sacred trees",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Build libraries to store written knowledge",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Pass stories orally from generation to generation",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 0, PR: 0, TE: -1 }
        },
        {
          label: "Let the past fade; focus on the future",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    }
  ],
  3: [
    {
      id: 19,
      name: "A harsh winter brings famine. Food stores run dangerously low. How do you respond?",
      choices: [
        {
          label: "Impose strict rationing controlled by the council",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Send foraging parties into uncharted forest",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Trade precious resources with outsiders for food",
          deltas: { FA: 0, CT: 0, EC: -1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Let each clan manage their own survival",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 20,
      name: "Deep in the forest, scouts discover a strange glowing artifact of immense power. What do you do?",
      choices: [
        {
          label: "Study it scientifically to understand its nature",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Build a shrine and worship it as a sacred gift",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Seal it away; some powers are too dangerous",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Harness its power for the kingdom's advantage",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 0, TE: 1 }
        }
      ]
    },
    {
      id: 21,
      name: "A massive wave of refugees from a destroyed land seeks shelter in your forest. What do you do?",
      choices: [
        {
          label: "Welcome them all with open arms",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Screen carefully; admit only those who meet criteria",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Set up temporary camps outside your borders",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Turn them away; you cannot support more",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 22,
      name: "A political faction grows powerful, challenging your authority. How do you respond?",
      choices: [
        {
          label: "Negotiate and share power with them",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Crack down and suppress their movement",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Hold open debates so all voices can be heard",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Grant them autonomy to self-govern their own",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 0, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 23,
      name: "Your kingdom needs protection from threats. How will you defend your borders?",
      choices: [
        {
          label: "Organize a citizen-volunteer guard from the community",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Establish a trained professional military force",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Appoint sacred warriors blessed by ritual",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Have no formal guard; trust in openness",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 24,
      name: "Someone commits a serious crime, sabotaging vital kingdom infrastructure. How is justice served?",
      choices: [
        {
          label: "Focus on rehabilitation and reintegration",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Swift and severe punishment to deter others",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Gather the community for restorative justice",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Banish them; exile from the kingdom forever",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 25,
      name: "A great blight spreads through the forest, killing ancient trees. How do you respond?",
      choices: [
        {
          label: "Deploy green technology to combat the blight",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: -1 }
        },
        {
          label: "Perform sacred rituals to heal the forest",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Evacuate the affected areas immediately",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Trust nature to heal itself in time",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 26,
      name: "An inventor creates a revolutionary new tool that could change everything. Do you embrace it?",
      choices: [
        {
          label: "Yes, adopt the invention immediately",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Wait for council approval before allowing it",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Reject it; the old ways are safer",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "Let anyone experiment with it freely",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 1, TE: 0 }
        }
      ]
    }
  ],
  4: [
    {
      id: 27,
      name: "As your kingdom matures, what do your people hold most sacred?",
      choices: [
        {
          label: "The wisdom and spirits of our ancestors",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Progress and the pursuit of advancement",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "The living forest itself, our eternal home",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }
        },
        {
          label: "Nothing is sacred; only reason matters",
          deltas: { FA: -1, CT: 1, EC: 0, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 28,
      name: "What lessons will you pass to the next generation as your legacy?",
      choices: [
        {
          label: "Ancient myths, rituals, and sacred stories",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "True history and verified facts",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "Innovation and building the future",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "Let each mentor teach their own truth",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 29,
      name: "Your kingdom grows strong. Neighboring lands beckon. How do you handle expansion?",
      choices: [
        {
          label: "Expand aggressively; claim what we need",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Negotiate fair borders with neighbors",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Create shared cooperative zones",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Do not expand; be content with what we have",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 30,
      name: "A rebel faction threatens to split your kingdom. This is your final test. How do you respond?",
      choices: [
        {
          label: "Seek diplomatic resolution and compromise",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Use military force to crush the rebellion",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Grant them autonomy to govern themselves",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Offer full amnesty and reconciliation",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 31,
      name: "You write your kingdom's permanent constitution. What form of government will endure?",
      choices: [
        {
          label: "A hereditary monarchy guided by wise elders",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "A democratic republic with elected councils",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Direct democracy through collective consensus",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "No formal government; true freedom for all",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 32,
      name: "Your final decree: What is the eternal spirit that will define your forest kingdom for all time?",
      choices: [
        {
          label: "We honor tradition and preserve the old ways",
          deltas: { FA: 1, CT: 0, EC: 0, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "We embrace innovation and endless progress",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 1, TE: 1 }
        },
        {
          label: "We stand together in cooperation and unity",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "We cherish freedom above all else",
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
// REORDERED: Most specific conditions first, general conditions last
function resolveEnding(FA, CT, EC, OP, PR, TE, act = 4) {
  const thresholds = getThresholds(act);
  const vals = { FA, CT, EC, OP, PR, TE };
  const highPosCount = Object.values(vals).filter(v => isHighPos(v, thresholds)).length;
  const highNegCount = Object.values(vals).filter(v => isHighNeg(v, thresholds)).length;

  // 10. Sacred Order (High Faith + High Control + Communal) - MOST SPECIFIC
  if (isHighPos(FA, thresholds) && isHighPos(CT, thresholds) && isHighPos(EC, thresholds)) {
    const profile = { FA: 1, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 };
    return {
      id: 10,
      name: "The Sacred Order",
      tagline: "Divine authority guides the community; faith and discipline shape every branch.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Faith + High Control + High Communal Economy."
    };
  }

  // 8. Primeval Kingdom - check early (specific combo)
  if (isHighNeg(PR, thresholds) && isHighPos(CT, thresholds) && FA > 0) {
    const profile = { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 };
    return {
      id: 8,
      name: "The Primeval Kingdom",
      tagline: "Ancestral laws and crowned canopies rule; the oldest rings decide the newest growth.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Strongly Traditional (NEG PR), very high Control, positive Faith (ancestral/spiritual)."
    };
  }

  // 9. Ordered Commune - check before general CT checks
  if (isHighPos(CT, thresholds) && isHighPos(EC, thresholds) && !isHighPos(FA, thresholds) && !isHighNeg(OP, thresholds)) {
    const profile = { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 };
    return {
      id: 9,
      name: "The Ordered Commune",
      tagline: "Strong hands guide shared resources; structure and cooperation build the forest's future.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Control + High Communal Economy, not HIGH faith, not NEG openness."
    };
  }

  // 2. Thorn Regime (authoritarian + closed)
  if (isHighPos(CT, thresholds) && isHighNeg(OP, thresholds) && PR <= 0) {
    const profile = { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 };
    return {
      id: 2,
      name: "The Thorn Regime",
      tagline: "Order at any cost. The forest tightens into a barbed crown.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Control, very closed (NEG OP), traditional/non-innovative."
    };
  }

  // 3. Free-Root Collective (all 3 conditions HIGH/NEG)
  if (isHighPos(EC, thresholds) && isHighNeg(CT, thresholds) && isHighPos(OP, thresholds)) {
    const profile = { FA: 0, CT: -1, EC: 1, OP: 1, PR: 0, TE: 0 };
    return {
      id: 3,
      name: "The Free-Root Collective",
      tagline: "Borders blur, property dissolves, and the forest lives as one vast commune.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Communal economy (HIGH EC), very free (NEG CT), very open (HIGH OP)."
    };
  }

  // 6. Dawnbound Republic - check before Cosmopolitan (more specific)
  if (isHighPos(PR, thresholds) && isHighPos(OP, thresholds) && isMid(CT, thresholds) && isMid(FA, thresholds)) {
    const profile = { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 };
    return {
      id: 6,
      name: "The Dawnbound Republic",
      tagline: "Innovation and openness guide a forward-thinking council toward a brighter future.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Progress + Openness, mid Control + Faith."
    };
  }

  // 1. Verdant Theocracy (spiritual leadership) - moved down to not capture Sacred Order
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

  // 4. Cosmopolitan Grove - requires HIGH Openness + HIGH Economy
  if (isHighPos(OP, thresholds) && isHighPos(EC, thresholds) && isMid(CT, thresholds)) {
    const profile = { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 };
    return {
      id: 4,
      name: "The Cosmopolitan Grove",
      tagline: "Paths and tongues cross freely; the forest becomes a crossroads of worlds.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Openness + High Communal Economy, moderate Control."
    };
  }

  // 7. Emerald Symbiosis (Green Tech)
  if (isHighNeg(TE, thresholds) && PR >= 0 && OP >= 0 && EC >= 0) {
    const profile = { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 };
    return {
      id: 7,
      name: "The Emerald Symbiosis",
      tagline: "Vines and circuits entwine; the forest and its tools become one living system.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Tech strongly Green (NEG TE) with neutral+ PR, OP, EC."
    };
  }

  // 5. Shielded Woodland
  if (isHighNeg(OP, thresholds) && CT >= 0 && PR <= 0) {
    const profile = { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 };
    return {
      id: 5,
      name: "The Shielded Woodland",
      tagline: "Walls of bark and belief keep the outside at bay; safety is found in seclusion.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Closed borders (NEG OP), some order (CT ≥ 0), traditional or neutral progress (PR ≤ 0)."
    };
  }

  // Fallback: Find closest matching ending (10 endings)
  const allEndings = [
    { id: 1, profile: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: 0 }, name: "The Verdant Theocracy", tagline: "The forest is ruled by roots and rites; law is written in leaf and omen." },
    { id: 2, profile: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }, name: "The Thorn Regime", tagline: "Order at any cost. The forest tightens into a barbed crown." },
    { id: 3, profile: { FA: 0, CT: -1, EC: 1, OP: 1, PR: 0, TE: 0 }, name: "The Free-Root Collective", tagline: "Borders blur, property dissolves, and the forest lives as one vast commune." },
    { id: 4, profile: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }, name: "The Cosmopolitan Grove", tagline: "Paths and tongues cross freely; the forest becomes a crossroads of worlds." },
    { id: 5, profile: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }, name: "The Shielded Woodland", tagline: "Walls of bark and belief keep the outside at bay; safety is found in seclusion." },
    { id: 6, profile: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }, name: "The Dawnbound Republic", tagline: "Innovation and openness guide a forward-thinking council toward a brighter future." },
    { id: 7, profile: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }, name: "The Emerald Symbiosis", tagline: "Vines and circuits entwine; the forest and its tools become one living system." },
    { id: 8, profile: { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }, name: "The Primeval Kingdom", tagline: "Ancestral laws and crowned canopies rule; the oldest rings decide the newest growth." },
    { id: 9, profile: { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }, name: "The Ordered Commune", tagline: "Strong hands guide shared resources; structure and cooperation build the forest's future." },
    { id: 10, profile: { FA: 1, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }, name: "The Sacred Order", tagline: "Divine authority guides the community; faith and discipline shape every branch." }
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

  // Only disable back button at the very first question of Act 1
  document.getElementById("prev-btn").disabled = (currentAct === 1 && currentIndex === 0);
  
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
  document.getElementById("prev-btn").style.display = "inline-flex"; // Keep back button visible
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
    // If we're showing the act complete screen, go back to last question
    if (document.getElementById("act-complete-block").style.display !== "none") {
      renderQuestion();
    } else if (currentIndex > 0) {
      // Go back one question within current act
      currentIndex--;
      renderQuestion();
    } else if (currentIndex === 0 && currentAct > 1) {
      // At first question of an act - go back to previous act's last question
      currentAct--;
      currentIndex = ACTS[currentAct].length - 1;
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

