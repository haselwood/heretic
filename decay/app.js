// === MULTI-ACT STRUCTURE ===
// Each choice has deltas for: FA, CT, EC, OP, PR, TE
const ACTS = {
  1: [
    {
      id: 1,
      name: "How Shall We Honor the Dead?",
      choices: [
        {
          label: "Bury under saplings so they can return as new life",
          deltas: { FA: 1, CT: 0, EC: 1, OP: 0, PR: 1, TE: -1 }
        },
        {
          label: "Burn & forge tools",
          deltas: { FA: -1, CT: 1, EC: 0, OP: 0, PR: 1, TE: 2 }
        },
        {
          label: "Let forest reclaim",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 0, PR: 0, TE: -2 }
        },
        {
          label: "Mass grave",
          deltas: { FA: -2, CT: 1, EC: 0, OP: 0, PR: 0, TE: -1 }
        }
      ]
    },
    {
      id: 2,
      name: "Who is your New Council?",
      choices: [
        {
          label: "Elders",
          deltas: { FA: 2, CT: 1, EC: 1, OP: -1, PR: -2, TE: 0 }
        },
        {
          label: "Rotate species",
          deltas: { FA: 0, CT: -1, EC: 2, OP: 1, PR: 1, TE: 1 }
        },
        {
          label: "Consensus rule",
          deltas: { FA: -1, CT: -1, EC: 2, OP: 1, PR: 2, TE: 1 }
        },
        {
          label: "Just Player",
          deltas: { FA: 0, CT: 3, EC: -1, OP: -2, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 3,
      name: "Who shall rule by your side as consort?",
      choices: [
        {
          label: "Marry a native to preserve our culture",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -2, PR: -2, TE: 0 }
        },
        {
          label: "Foreign spouse to bring new ideas",
          deltas: { FA: 1, CT: 1, EC: 0, OP: 2, PR: 2, TE: 1 }
        },
        {
          label: "Stay single",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "Everyone - you got enough love to pass around",
          deltas: { FA: 1, CT: -2, EC: 3, OP: 2, PR: 2, TE: 0 }
        }
      ]
    },
    {
      id: 4,
      name: "What do we do with this human machine we found?",
      choices: [
        {
          label: "Repurpose metal for tools",
          deltas: { FA: -1, CT: 0, EC: -2, OP: 0, PR: 1, TE: 2 }
        },
        {
          label: "Keep as a sacred relic",
          deltas: { FA: 3, CT: 1, EC: 1, OP: -1, PR: -2, TE: -1 }
        },
        {
          label: "Destroy it",
          deltas: { FA: 0, CT: 2, EC: 0, OP: -2, PR: 1, TE: -2 }
        },
        {
          label: "Community property",
          deltas: { FA: 1, CT: -2, EC: 2, OP: 1, PR: 1, TE: 1 }
        }
      ]
    },
    {
      id: 5,
      name: "How Are Disputes Settled?",
      choices: [
        {
          label: "Mediation circles",
          deltas: { FA: 1, CT: -1, EC: 2, OP: 2, PR: 1, TE: -1 }
        },
        {
          label: "Strict arbiter",
          deltas: { FA: -2, CT: 2, EC: -1, OP: -1, PR: -1, TE: 1 }
        },
        {
          label: "Trial by challenge",
          deltas: { FA: 0, CT: 1, EC: -2, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Natural resolution",
          deltas: { FA: 1, CT: -2, EC: 1, OP: 0, PR: 0, TE: -1 }
        }
      ]
    },
    {
      id: 6,
      name: "Food Distribution",
      choices: [
        {
          label: "Equal rations distributed",
          deltas: { FA: 0, CT: 1, EC: 2, OP: -1, PR: 1, TE: 0 }
        },
        {
          label: "Free market",
          deltas: { FA: -1, CT: -1, EC: -3, OP: 0, PR: 0, TE: 1 }
        },
        {
          label: "Gather your own",
          deltas: { FA: 0, CT: -2, EC: 1, OP: 1, PR: 0, TE: -1 }
        },
        {
          label: "Communal meals served",
          deltas: { FA: 1, CT: 1, EC: 2, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 7,
      name: "How do we rebuild our homes?",
      choices: [
        {
          label: "Communal longhouses",
          deltas: { FA: 1, CT: 1, EC: 2, OP: 1, PR: -1, TE: -1 }
        },
        {
          label: "Everyone stakes a claim and builds their own",
          deltas: { FA: -1, CT: -2, EC: -2, OP: 1, PR: 1, TE: 1 }
        },
        {
          label: "Assign dens by need",
          deltas: { FA: 1, CT: 1, EC: 2, OP: 2, PR: 2, TE: 0 }
        },
        {
          label: "Districts based on job and role",
          deltas: { FA: -1, CT: 2, EC: -2, OP: -1, PR: -1, TE: 1 }
        }
      ]
    },
    {
      id: 8,
      name: "How do we care for the sick?",
      choices: [
        {
          label: "Send away to a camp",
          deltas: { FA: -1, CT: 2, EC: 1, OP: -2, PR: -2, TE: -1 }
        },
        {
          label: "Must barter for care based on your resources",
          deltas: { FA: -1, CT: -1, EC: -2, OP: -1, PR: 0, TE: 2 }
        },
        {
          label: "Establish kingdom healer, available to all",
          deltas: { FA: 2, CT: -1, EC: 3, OP: 1, PR: 2, TE: 0 }
        },
        {
          label: "You're on your own",
          deltas: { FA: -1, CT: -2, EC: -3, OP: 0, PR: -1, TE: -1 }
        }
      ]
    },
    {
      id: 9,
      name: "How should the people form romantic partnerships?",
      choices: [
        {
          label: "Free love; form bonds and procreate with whomever you choose",
          deltas: { FA: 0, CT: -2, EC: 1, OP: 1, PR: 2, TE: 0 }
        },
        {
          label: "Marriages arranged by clan elders",
          deltas: { FA: 2, CT: 2, EC: 1, OP: -1, PR: -2, TE: 0 }
        },
        {
          label: "Unions can form on their own but must be formally recognized by council",
          deltas: { FA: 0, CT: 1, EC: 1, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "No formal bonds between partners should exist.",
          deltas: { FA: -1, CT: -1, EC: 1, OP: 1, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 10,
      name: "Plan a festival – how should the new kingdom celebrate?",
      choices: [
        {
          label: "It's orgy time",
          deltas: { FA: 1, CT: -3, EC: 2, OP: 2, PR: 2, TE: -1 }
        },
        {
          label: "Give thanks to the goddess",
          deltas: { FA: 3, CT: 1, EC: 1, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "Everyone gives gifts to loved ones",
          deltas: { FA: -1, CT: 0, EC: -3, OP: 0, PR: -1, TE: 1 }
        },
        {
          label: "Glorious leader day",
          deltas: { FA: 1, CT: 3, EC: 1, OP: -2, PR: -2, TE: 0 }
        }
      ]
    }
  ],
  2: [
    {
      id: 11,
      name: "What type of knowledge should we prioritize for the young?",
      choices: [
        {
          label: "Science, math, and practical skills",
          deltas: { FA: -2, CT: 0, EC: 0, OP: 0, PR: 1, TE: 2 }
        },
        {
          label: "Shamanic traditions and forest wisdom",
          deltas: { FA: 2, CT: 1, EC: 1, OP: -1, PR: -2, TE: -2 }
        },
        {
          label: "A mixed curriculum drawing from all cultures",
          deltas: { FA: -1, CT: 0, EC: 1, OP: 2, PR: 2, TE: 1 }
        },
        {
          label: "Let each family teach their own way",
          deltas: { FA: 0, CT: -2, EC: -1, OP: 1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 12,
      name: "What role should The Goddess play in your kingdom?",
      choices: [
        {
          label: "You can worship any deity as long as its The Goddess",
          deltas: { FA: 2, CT: 3, EC: 0, OP: -2, PR: -2, TE: 0 }
        },
        {
          label: "The Kingdom's official patron is the Goddess, but worship is optional",
          deltas: { FA: 1, CT: 1, EC: 0, OP: 1, PR: -1, TE: 0 }
        },
        {
          label: "Keep Goddess worship separate from governance entirely",
          deltas: { FA: -2, CT: -1, EC: -2, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "You may pray to any (or none of) the Gods however you see fit",
          deltas: { FA: 1, CT: -1, EC: 0, OP: 2, PR: 1, TE: 0 }
        }
      ]
    },
    {
      id: 13,
      name: "Different species live side-by-side andspeak different tongues. How will your kingdom officially communicate?",
      choices: [
        {
          label: "Mandate the majority language as the official language",
          deltas: { FA: 0, CT: 2, EC: 1, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Preserve each clan's ancient dialects with translation orbs",
          deltas: { FA: 0, CT: -1, EC: 1, OP: 1, PR: 1, TE: 1 }
        },
        {
          label: "Create a hybrid language from all tongues",
          deltas: { FA: 0, CT: 1, EC: 1, OP: 1, PR: 1, TE: 1 }
        },
        {
          label: "Do nothing - Let the natural course of history decide",
          deltas: { FA: -1, CT: -2, EC: 0, OP: 1, PR: 1, TE: -1 }
        }
      ]
    },
    {
      id: 14,
      name: "An artist society has formed, and some paintings are critical of your reign. What do you do?",
      choices: [
        {
          label: "Decree only traditional sacred art is allowed",
          deltas: { FA: 3, CT: 2, EC: 1, OP: -2, PR: -1, TE: -1 }
        },
        {
          label: "All art is permitted; creators are free",
          deltas: { FA: 0, CT: -3, EC: -2, OP: 2, PR: 1, TE: 1 }
        },
        {
          label: "Art must be reviewed and approved by council before being displayed, but creators are free to create whatever they want",
          deltas: { FA: 0, CT: 2, EC: 1, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Flood the zone with commisioned art praising your glory",
          deltas: { FA: 0, CT: 0, EC: 1, OP: -1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 15,
      name: "Two species have formed a rivalry on the precipice of war. What do you do?",
      choices: [
        {
          label: "Hold a summit to discuss the issue and find a solution",
          deltas: { FA: 0, CT: -2, EC: 1, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Decide in favor with the species most beneficial to the kingdom",
          deltas: { FA: -2, CT: 1, EC: -2, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Designate two territories for the species to live seperately and declare the city central neutral territory",
          deltas: { FA: -1, CT: 1, EC: 1, OP: 1, PR: -1, TE: 0 }
        },
        {
          label: "Display neutrality plublically but pass policies that benefit the species most beneficial to the kingdom",
          deltas: { FA: 0, CT: 1, EC: -2, OP: 1, PR: -1, TE: 0 }
        }
      ]
    },
    {
      id: 16,
      name: "Strangers approach your borders seeking entry to your prosperous kingdom. What is your policy?",
      choices: [
        {
          label: "Welcome all; our borders are open",
          deltas: { FA: 0, CT: -2, EC: 2, OP: 2, PR: 1, TE: 0 }
        },
        {
          label: "Only allow those who can contribute to the kingdom",
          deltas: { FA: -1, CT: 1, EC: -1, OP: 1, PR: -1, TE: 1 }
        },
        {
          label: "Only those seeking aid or sanctuary may enter",
          deltas: { FA: 1, CT: 1, EC: -1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Close the borders; no outsiders allowed",
          deltas: { FA: 0, CT: 2, EC: -1, OP: -3, PR: -2, TE: 0 }
        }
      ]
    },
    {
      id: 17,
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
    },
    {
      id: 19,
      name: "A wealthy merchant class has emerged, accumulating significant resources. How do you respond?",
      choices: [
        {
          label: "Tax their wealth heavily to redistribute to the community",
          deltas: { FA: 0, CT: 1, EC: 2, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Let them keep their wealth; prosperity benefits everyone",
          deltas: { FA: -1, CT: -1, EC: -2, OP: 1, PR: 1, TE: 1 }
        },
        {
          label: "Require them to fund public works and temples",
          deltas: { FA: 2, CT: 1, EC: 1, OP: 0, PR: -1, TE: 0 }
        },
        {
          label: "Seize their assets; no one should have such power",
          deltas: { FA: 0, CT: 2, EC: 1, OP: -2, PR: 0, TE: 0 }
        }
      ]
    }
  ],
  3: [
    {
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
      id: 24,
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
      id: 25,
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
      id: 26,
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
      id: 27,
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
    },
    {
      id: 28,
      name: "A charismatic prophet claims to have visions of the forest's future and gathers followers. How do you respond?",
      choices: [
        {
          label: "Embrace their teachings and elevate them to spiritual advisor",
          deltas: { FA: 2, CT: 0, EC: 0, OP: 0, PR: -1, TE: -1 }
        },
        {
          label: "Allow them to preach freely but keep governance separate",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Monitor them closely; such influence could be dangerous",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Discredit them publicly; superstition has no place here",
          deltas: { FA: -2, CT: 1, EC: 0, OP: 0, PR: 1, TE: 1 }
        }
      ]
    }
  ],
  4: [
    {
      id: 29,
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
      id: 30,
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
      id: 31,
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
      id: 32,
      name: "Your kingdom faces a choice: expand influence abroad or focus inward on perfecting what you've built. What do you choose?",
      choices: [
        {
          label: "Send ambassadors and establish trade networks across the world",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Build walls and focus on internal harmony",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Create a network of allied kingdoms sharing resources",
          deltas: { FA: 0, CT: 0, EC: 1, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Remain isolated; the forest needs no one else",
          deltas: { FA: 1, CT: 0, EC: 0, OP: -1, PR: 0, TE: -1 }
        }
      ]
    },
    {
      id: 33,
      name: "How should your kingdom remember those who opposed you or made mistakes?",
      choices: [
        {
          label: "Erase their names; only honor the righteous",
          deltas: { FA: 0, CT: 1, EC: 0, OP: -1, PR: 0, TE: 0 }
        },
        {
          label: "Record all history truthfully, both triumph and failure",
          deltas: { FA: -1, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }
        },
        {
          label: "Forgive and remember them with compassion",
          deltas: { FA: 1, CT: -1, EC: 1, OP: 0, PR: 0, TE: 0 }
        },
        {
          label: "Let each community tell their own version",
          deltas: { FA: 0, CT: -1, EC: 0, OP: 1, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 34,
      name: "A neighboring kingdom offers a powerful alliance, but they practice values opposite to yours. Do you accept?",
      choices: [
        {
          label: "Yes, pragmatism over principles; we need strength",
          deltas: { FA: -1, CT: 1, EC: 0, OP: 0, PR: 1, TE: 0 }
        },
        {
          label: "No, we will never compromise our beliefs",
          deltas: { FA: 1, CT: 0, EC: 0, OP: -1, PR: -1, TE: 0 }
        },
        {
          label: "Negotiate terms that respect both our values",
          deltas: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 0, TE: 0 }
        },
        {
          label: "Accept but secretly work to change them from within",
          deltas: { FA: 0, CT: 1, EC: 0, OP: 0, PR: 0, TE: 0 }
        }
      ]
    },
    {
      id: 35,
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
      id: 36,
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
      id: 37,
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
  1: { HIGH_POS: 4, HIGH_NEG: -4 },   // 10 questions
  2: { HIGH_POS: 7, HIGH_NEG: -7 },   // 19 cumulative (10 + 9)
  3: { HIGH_POS: 10, HIGH_NEG: -10 }, // 28 cumulative (19 + 9)
  4: { HIGH_POS: 13, HIGH_NEG: -13 }  // 37 cumulative (28 + 9)
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
 
 
  // 1. Sacred Order (High Faith + High Control + Communal) - MOST SPECIFIC
  if (isHighPos(FA, thresholds) && isHighPos(CT, thresholds) && isHighPos(EC, thresholds)) {
    const profile = { FA: 1, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 };
    return {
      id: 1,
      name: "The Sacred Order",
      tagline: "Divine authority guides the community; faith and discipline shape every branch.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Faith + High Control + High Communal Economy."
    };
  }
 
 
  // 2. Primeval Kingdom - check early (specific combo)
  if (isHighNeg(PR, thresholds) && isHighPos(CT, thresholds) && FA > 0) {
    const profile = { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 };
    return {
      id: 2,
      name: "The Primeval Kingdom",
      tagline: "Ancestral laws and crowned canopies rule; the oldest rings decide the newest growth.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Strongly Traditional (NEG PR), very high Control, positive Faith (ancestral/spiritual)."
    };
  }
 
 
  // 3. Ordered Commune - check before general CT checks
  if (isHighPos(CT, thresholds) && isHighPos(EC, thresholds) && !isHighPos(FA, thresholds) && !isHighNeg(OP, thresholds)) {
    const profile = { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 };
    return {
      id: 3,
      name: "The Ordered Commune",
      tagline: "Strong hands guide shared resources; structure and cooperation build the forest's future.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Control + High Communal Economy, not HIGH faith, not NEG openness."
    };
  }
 
 
  // 4. Thorn Regime (authoritarian + closed)
  if (isHighPos(CT, thresholds) && isHighNeg(OP, thresholds) && PR <= 0) {
    const profile = { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 };
    return {
      id: 4,
      name: "The Thorn Regime",
      tagline: "Order at any cost. The forest tightens into a barbed crown.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Control, very closed (NEG OP), traditional/non-innovative."
    };
  }
 
 
  // 5. Free-Root Collective (natural anarchist commune)
  if (isHighPos(EC, thresholds) && isHighNeg(CT, thresholds) && isHighPos(OP, thresholds) && TE <= 0) {
    const profile = { FA: 0, CT: -1, EC: 1, OP: 1, PR: 0, TE: -1 };
    return {
      id: 5,
      name: "The Free-Root Collective",
      tagline: "Borders blur, property dissolves, and the forest returns to its natural commune.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Communal economy (HIGH EC), very free (NEG CT), very open (HIGH OP), green/neutral tech (TE ≤ 0)."
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
 
 
  // 7. Verdant Theocracy (nature-worshipping spiritual leadership)
  if (isHighPos(FA, thresholds) && isMid(CT, thresholds) && TE <= 0) {
    const profile = { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 };
    return {
      id: 7,
      name: "The Verdant Theocracy",
      tagline: "The forest is ruled by roots and rites; nature's spirits guide every branch.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Faith + Mid Control + Green/Neutral Tech (TE ≤ 0)."
    };
  }
 
 
  // 8. Cosmopolitan Grove - high-tech metropolis
  if (isHighPos(OP, thresholds) && isMid(EC, thresholds) && isMid(CT, thresholds) && isHighPos(TE, thresholds) && PR >= 0) {
    const profile = { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 1 };
    return {
      id: 8,
      name: "The Cosmopolitan Grove",
      tagline: "Paths and technologies cross freely; the forest becomes a thriving hub of innovation and exchange.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "High Openness + Mid Communal + Mid Control + HIGH Tech (TE ≥ 12) + positive Progress (PR ≥ 0)."
    };
  }
 
 
  // 9. Emerald Symbiosis (Green Tech)
  if (isHighNeg(TE, thresholds) && PR >= 0 && OP >= 0 && EC >= 0) {
    const profile = { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 };
    return {
      id: 9,
      name: "The Emerald Symbiosis",
      tagline: "Vines and circuits entwine; the forest and its tools become one living system.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Tech strongly Green (NEG TE) with neutral+ PR, OP, EC."
    };
  }
 
 
  // 10. Shielded Woodland
  if (isHighNeg(OP, thresholds) && CT >= 0 && PR <= 0) {
    const profile = { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 };
    return {
      id: 10,
      name: "The Shielded Woodland",
      tagline: "Walls of bark and belief keep the outside at bay; safety is found in seclusion.",
      alignmentPercent: calculateAlignment(FA, CT, EC, OP, PR, TE, profile, thresholds),
      debug: "Closed borders (NEG OP), some order (CT ≥ 0), traditional or neutral progress (PR ≤ 0)."
    };
  }
 
 
  // Fallback: Find closest matching ending (10 endings)
  const allEndings = [
    { id: 1, profile: { FA: 1, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }, name: "The Sacred Order", tagline: "Divine authority guides the community; faith and discipline shape every branch." },
    { id: 2, profile: { FA: 1, CT: 1, EC: 0, OP: 0, PR: -1, TE: 0 }, name: "The Primeval Kingdom", tagline: "Ancestral laws and crowned canopies rule; the oldest rings decide the newest growth." },
    { id: 3, profile: { FA: 0, CT: 1, EC: 1, OP: 0, PR: 0, TE: 0 }, name: "The Ordered Commune", tagline: "Strong hands guide shared resources; structure and cooperation build the forest's future." },
    { id: 4, profile: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }, name: "The Thorn Regime", tagline: "Order at any cost. The forest tightens into a barbed crown." },
    { id: 5, profile: { FA: 0, CT: -1, EC: 1, OP: 1, PR: 0, TE: -1 }, name: "The Free-Root Collective", tagline: "Borders blur, property dissolves, and the forest returns to its natural commune." },
    { id: 6, profile: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 0 }, name: "The Dawnbound Republic", tagline: "Innovation and openness guide a forward-thinking council toward a brighter future." },
    { id: 7, profile: { FA: 1, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }, name: "The Verdant Theocracy", tagline: "The forest is ruled by roots and rites; nature's spirits guide every branch." },
    { id: 8, profile: { FA: 0, CT: 0, EC: 0, OP: 1, PR: 1, TE: 1 }, name: "The Cosmopolitan Grove", tagline: "Paths and technologies cross freely; the forest becomes a thriving hub of innovation and exchange." },
    { id: 9, profile: { FA: 0, CT: 0, EC: 0, OP: 0, PR: 0, TE: -1 }, name: "The Emerald Symbiosis", tagline: "Vines and circuits entwine; the forest and its tools become one living system." },
    { id: 10, profile: { FA: 0, CT: 1, EC: 0, OP: -1, PR: -1, TE: 0 }, name: "The Shielded Woodland", tagline: "Walls of bark and belief keep the outside at bay; safety is found in seclusion." }
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
 
 
// === Act Names ===
const ACT_NAMES = {
  1: "Emergence",
  2: "New Growth",
  3: "The Weathering",
  4: "Eternal Forest"
};

const ACT_TAGLINES = {
  1: "Rising from decay",
  2: "Building fresh systems",
  3: "Enduring hardship",
  4: "What endures forever"
};

// === DOM Element Cache ===
// Cache frequently accessed DOM elements for better performance
const DOM = {
  actDisplay: null,
  qNumber: null,
  qName: null,
  qProgress: null,
  choicesContainer: null,
  progressFill: null,
  progressText: null,
  scoreFA: null,
  scoreCT: null,
  scoreEC: null,
  scoreOP: null,
  scorePR: null,
  scoreTE: null,
  trendingName: null,
  trendingAlignment: null,
  trendingBlock: null,
  resultBlock: null,
  endingName: null,
  endingAlignment: null,
  endingTagline: null,
  debug: null,
  questionBlock: null,
  actCompleteBlock: null,
  actEndingSummary: null,
  prevBtn: null,
  nextBtn: null,
  continueBtn: null,
  resetBtn: null,
  progressContainer: null,
  answerLogContent: null
};

// Initialize DOM cache
function initDOMCache() {
  DOM.actDisplay = document.getElementById("act-display");
  DOM.qNumber = document.getElementById("q-number");
  DOM.qName = document.getElementById("q-name");
  DOM.qProgress = document.getElementById("q-progress");
  DOM.choicesContainer = document.getElementById("choices-container");
  DOM.progressFill = document.getElementById("progress-fill");
  DOM.progressText = document.getElementById("progress-text");
  DOM.scoreFA = document.getElementById("score-fa");
  DOM.scoreCT = document.getElementById("score-ct");
  DOM.scoreEC = document.getElementById("score-ec");
  DOM.scoreOP = document.getElementById("score-op");
  DOM.scorePR = document.getElementById("score-pr");
  DOM.scoreTE = document.getElementById("score-te");
  DOM.trendingName = document.getElementById("trending-name");
  DOM.trendingAlignment = document.getElementById("trending-alignment");
  DOM.trendingBlock = document.getElementById("trending-block");
  DOM.resultBlock = document.getElementById("result-block");
  DOM.endingName = document.getElementById("ending-name");
  DOM.endingAlignment = document.getElementById("ending-alignment");
  DOM.endingTagline = document.getElementById("ending-tagline");
  DOM.debug = document.getElementById("debug");
  DOM.questionBlock = document.getElementById("question-block");
  DOM.actCompleteBlock = document.getElementById("act-complete-block");
  DOM.actEndingSummary = document.getElementById("act-ending-summary");
  DOM.prevBtn = document.getElementById("prev-btn");
  DOM.nextBtn = document.getElementById("next-btn");
  DOM.continueBtn = document.getElementById("continue-btn");
  DOM.resetBtn = document.getElementById("reset-btn");
  DOM.progressContainer = document.querySelector(".progress-container");
  DOM.answerLogContent = document.getElementById("answer-log-content");
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
 
 
function updateAnswerLog() {
  const logContent = DOM.answerLogContent;
  const fragment = document.createDocumentFragment();
  let hasAnswers = false;
  
  // Loop through all acts
  for (let act = 1; act <= 4; act++) {
    const actQuestions = ACTS[act];
    const actAnswers = allAnswers[act];
    
    // Check if this act has any answers
    const hasActAnswers = actAnswers.some(a => a != null);
    if (!hasActAnswers) continue;
    
    // Add act header
    const actHeader = document.createElement("div");
    actHeader.className = "answer-log-act-header";
    actHeader.textContent = `Act ${act}: ${ACT_NAMES[act]}`;
    fragment.appendChild(actHeader);
    
    // Add questions for this act
    actQuestions.forEach((q, qi) => {
      const choiceIndex = actAnswers[qi];
      if (choiceIndex == null) return;
      
      hasAnswers = true;
      const choice = q.choices[choiceIndex];
      
      const item = document.createElement("div");
      item.className = "answer-log-item";
      
      const questionDiv = document.createElement("div");
      questionDiv.className = "answer-log-question";
      questionDiv.textContent = `Q${q.id}: ${q.name}`;
      
      const answerDiv = document.createElement("div");
      answerDiv.className = "answer-log-answer";
      answerDiv.textContent = `→ ${choice.label}`;
      
      const metaDiv = document.createElement("div");
      metaDiv.className = "answer-log-meta";
      const deltaText = Object.entries(choice.deltas)
        .filter(([_, val]) => val !== 0)
        .map(([key, val]) => `${key}${val > 0 ? '+' : ''}${val}`)
        .join(", ");
      metaDiv.textContent = deltaText || "No alignment changes";
      
      item.appendChild(questionDiv);
      item.appendChild(answerDiv);
      item.appendChild(metaDiv);
      fragment.appendChild(item);
    });
    
    // Add act ending if it exists
    const ending = actEndings[act];
    if (ending) {
      const endingDiv = document.createElement("div");
      endingDiv.className = "answer-log-ending";
      
      const endingTitle = document.createElement("div");
      endingTitle.className = "answer-log-ending-title";
      endingTitle.textContent = "Act Ending:";
      
      const endingName = document.createElement("div");
      endingName.className = "answer-log-ending-name";
      endingName.textContent = ending.name;
      
      const endingTagline = document.createElement("div");
      endingTagline.className = "answer-log-ending-tagline";
      endingTagline.textContent = ending.tagline;
      
      endingDiv.appendChild(endingTitle);
      endingDiv.appendChild(endingName);
      endingDiv.appendChild(endingTagline);
      fragment.appendChild(endingDiv);
    }
  }
  
  if (!hasAnswers) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "answer-log-empty";
    emptyDiv.textContent = "No answers yet. Start answering questions to see your choices here.";
    fragment.appendChild(emptyDiv);
  }
  
  // Single DOM update
  logContent.innerHTML = "";
  logContent.appendChild(fragment);
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
  
  // Update score displays
  DOM.scoreFA.textContent = totals.FA;
  DOM.scoreCT.textContent = totals.CT;
  DOM.scoreEC.textContent = totals.EC;
  DOM.scoreOP.textContent = totals.OP;
  DOM.scorePR.textContent = totals.PR;
  DOM.scoreTE.textContent = totals.TE;
  
  // Calculate and show trending ending
  const trendingEnding = resolveEnding(
    totals.FA, totals.CT, totals.EC, totals.OP, totals.PR, totals.TE, currentAct
  );
  DOM.trendingName.textContent = trendingEnding.name;
  
  // Show alignment percentage if available
  DOM.trendingAlignment.textContent = trendingEnding.alignmentPercent !== undefined
    ? `${trendingEnding.alignmentPercent}% aligned with this ending`
    : "";
  
  // Update answer log
  updateAnswerLog();
  
  return totals;
}
 
 
function renderQuestion() {
  const questions = getCurrentQuestions();
  const answers = getCurrentAnswers();
  const q = questions[currentIndex];
  const questionNum = currentIndex + 1;
  const totalQuestions = questions.length;
  
  // Update header and question info
  DOM.actDisplay.textContent = `Act ${currentAct}: ${ACT_TAGLINES[currentAct]}`;
  DOM.qNumber.textContent = `Policy ${q.id}`;
  DOM.qName.textContent = q.name;
  DOM.qProgress.textContent = `Question ${questionNum} of ${totalQuestions}`;
  
  // Update progress bar
  const progressPercent = (questionNum / totalQuestions) * 100;
  DOM.progressFill.style.width = `${progressPercent}%`;
  DOM.progressText.textContent = `Question ${questionNum} of ${totalQuestions}`;
  
  // Render choices
  const container = DOM.choicesContainer;
  container.innerHTML = "";
  const radioName = `q${currentAct}-${currentIndex}`;
  
  q.choices.forEach((choice, idx) => {
    const choiceId = `${radioName}-choice${idx}`;
    const wrapper = document.createElement("div");
    wrapper.className = "choice";
    
    const input = document.createElement("input");
    input.type = "radio";
    input.name = radioName;
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
  
  // Update navigation buttons
  DOM.prevBtn.disabled = (currentAct === 1 && currentIndex === 0);
  
  const isLastQuestion = currentIndex === totalQuestions - 1;
  if (isLastQuestion) {
    DOM.nextBtn.textContent = "🔮 View Act Ending →";
    DOM.nextBtn.className = "btn-primary";
  } else {
    DOM.nextBtn.textContent = "Next →";
    DOM.nextBtn.className = "btn-secondary";
  }
  
  // Show/hide UI elements
  DOM.questionBlock.style.display = "block";
  DOM.actCompleteBlock.style.display = "none";
  DOM.continueBtn.style.display = "none";
  DOM.prevBtn.style.display = "inline-flex";
  DOM.nextBtn.style.display = "inline-flex";
  DOM.progressContainer.style.display = "block";
  DOM.trendingBlock.style.display = "block";
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
    currentAct
  );
  
  // Store the ending for this act
  actEndings[currentAct] = res;
  
  // Update answer log to show the ending
  updateAnswerLog();
  
  // Update the sidebar
  DOM.resultBlock.style.display = "block";
  DOM.endingName.textContent = res.name;
  DOM.endingAlignment.textContent = res.alignmentPercent !== undefined
    ? `${res.alignmentPercent}% aligned with this ending`
    : "";
  DOM.endingTagline.textContent = res.tagline;
  DOM.debug.textContent = 
    `FA: ${totals.FA}, CT: ${totals.CT}, EC: ${totals.EC}, OP: ${totals.OP}, PR: ${totals.PR}, TE: ${totals.TE}\n` +
    (res.debug || "");
  
  // Show act complete screen
  DOM.questionBlock.style.display = "none";
  DOM.actCompleteBlock.style.display = "block";
  DOM.prevBtn.style.display = "inline-flex";
  DOM.nextBtn.style.display = "none";
  DOM.progressContainer.style.display = "none";
  DOM.trendingBlock.style.display = "none";
  
  // Build summary
  let summary = `<strong>${res.name}</strong><br>${res.tagline}`;
  
  if (currentAct < 4) {
    DOM.continueBtn.style.display = "inline-flex";
  } else {
    // Final act - show all endings
    summary = "<strong>Your Journey Complete!</strong><br><br>";
    for (let act = 1; act <= 4; act++) {
      const ending = actEndings[act];
      if (ending) {
        summary += `<strong>Act ${act}: ${ACT_NAMES[act]}</strong><br>${ending.name}<br><em>${ending.tagline}</em><br><br>`;
      }
    }
  }
  
  DOM.actEndingSummary.innerHTML = summary;
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
  
  // Clear result display
  DOM.resultBlock.style.display = "none";
  DOM.endingName.textContent = "";
  DOM.endingTagline.textContent = "";
  DOM.debug.textContent = "";
  
  renderQuestion();
  recalcScores();
}
 
 
// Initialize the app
function initApp() {
  // Initialize DOM element cache
  initDOMCache();
  
  // Set up event listeners
  DOM.prevBtn.addEventListener("click", () => {
    // If we're showing the act complete screen, go back to last question
    if (DOM.actCompleteBlock.style.display !== "none") {
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
  
  DOM.nextBtn.addEventListener("click", () => {
    const questions = getCurrentQuestions();
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      // On last question, compute ending automatically
      computeEnding();
    }
  });
  
  DOM.continueBtn.addEventListener("click", continueToNextAct);
  DOM.resetBtn.addEventListener("click", resetQuiz);
  
  // Initial render
  renderQuestion();
  recalcScores();
}
 
 
 // Run when DOM is ready
 if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
 } else {
  initApp();
 }
 
 
 
 
 
 