//Quiz data goes here

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// at 0 idx ez ques, 1 medium       /////////////////////////
//////////////////////////////// 2 hard. switch below gives       /////////////////////////
//////////////////////////////// category variable at and         /////////////////////////
////////////////////////////////  quizState.mode gives index.     /////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////






const History = [
  //ez
  [
    {
      question: "What is the name of the Great Wall of China's first emperor, who unified warring states in 221 BC?",
      options: ["Genghis Khan", "Qin Shi Huang", "Wu Zetian", "Kublai Khan"],
      answer: 1, // Index of the correct answer (Qin Shi Huang)
    },
    {
      question: "Which ancient civilization is known for building the pyramids?",
      options: ["Romans", "Greeks", "Egyptians", "Persians"],
      answer: 2, // Index of the correct answer (Egyptians)
    },
    {
      question: "During which historical period did the Renaissance occur?",
      options: ["Middle Ages", "Renaissance", "Industrial Revolution", "Enlightenment"],
      answer: 1, // Index of the correct answer (Renaissance)
    },
    {
      question: "What major world war began with the assassination of Archduke Franz Ferdinand in 1914?",
      options: ["American Revolutionary War", "World War I", "World War II", "Vietnam War"],
      answer: 1, // Index of the correct answer (World War I)
    },
    {
      question: "Who was the first human to walk on the moon in 1969?",
      options: ["Yuri Gagarin (First in space)", "Neil Armstrong", "Buzz Aldrin (Second on the moon)", "Laika (First animal in space)"],
      answer: 1, // Index of the correct answer (Neil Armstrong)
    }
  ],
  //med
  [
    {
      question: "The fall of which empire in 1453 marked the end of the Middle Ages in Europe?",
      options: ["Roman Empire", "Byzantine Empire", "Holy Roman Empire", "Ottoman Empire"],
      answer: 1
    },
    {
      question: "Which revolutionary leader is credited with coining the phrase 'liberty, equality, fraternity' during the French Revolution?",
      options: ["Maximilien Robespierre", "Voltaire", "Marie Antoinette", "Jean-Jacques Rousseau"],
      answer: 0
    },
    {
      question: "The policy of appeasement, aimed at preventing war by making concessions to aggressive powers, was associated with the leaders of which country in the lead-up to World War II?",
      options: ["Germany", "Italy", "United States", "Great Britain"],
      answer: 3
    },
    {
      question: "The Manhattan Project, which developed the first atomic bombs, was a collaborative effort between the scientists of which two countries during World War II?",
      options: ["United States and Germany", "United States and Japan", "United States and Soviet Union", "Great Britain and France"],
      answer: 2
    },
    {
      question: "The policy of apartheid, which enforced racial segregation in South Africa, was dismantled by which president in the early 1990s?",
      options: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk", "Mangosuthu Buthelezi"],
      answer: 2
    }
  ],
  //hard
  [
    [
      {
        question: "The Great Schism of 1054 A.D. resulted in a permanent division between which two branches of Christianity?",
        options: ["Catholicism and Protestantism", "Eastern Orthodoxy and Catholicism", "Anglicanism and Lutheranism", "Arianism and Trinitarianism"],
        answer: 1
      },
      {
        question: "The concept of the 'divine right of kings' was used to justify the absolute rule of monarchs in which European era?",
        options: ["Renaissance", "Age of Exploration", "Enlightenment", "Absolutism"],
        answer: 3
      },
      {
        question: "The Meiji Restoration in 19th-century Japan marked the end of which ruling family's shogunate?",
        options: ["Tokugawa", "Yamato", "Muromachi", "Sengoku"],
        answer: 0
      },
      {
        question: "The Berlin Conference of 1884-85 is known for its role in the European colonization of which continent?",
        options: ["North America", "South America", "Africa", "Asia"],
        answer: 2
      },
      {
        question: "The triangular trade route involved the exchange of goods and resources between Europe, Africa, and the Americas during which historical period?",
        options: ["Age of Exploration", "Mercantilism Era", "Industrial Revolution", "Age of Imperialism"],
        answer: 1
      }
    ]
  ]
];

const Science = [
  [
    //ez
      {
        question: "Which of the following is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        answer: 3
      },
      {
        question: "What is the basic unit of heredity in living organisms?",
        options: ["Cell", "Organ", "Tissue", "Gene"],
        answer: 3
      },
      {
        question: "The process by which plants use sunlight, water, and carbon dioxide to produce food is called?",
        options: ["Respiration", "Photosynthesis", "Decomposition", "Evaporation"],
        answer: 1
      },
      {
        question: "Which of the following is the closest in size to the diameter of a human hair?",
        options: ["1 centimeter", "1 millimeter", "1 micrometer", "1 kilometer"],
        answer: 2
      },
      {
        question: "What is the process called where water vapor changes into liquid water?",
        options: ["Evaporation", "Condensation", "Precipitation", "Boiling"],
        answer: 1
      }
  ],
  //med
  [
      {
        question: "Which scientist is credited with developing the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
        answer: 1
      },
      {
        question: "The process of splitting the nucleus of an atom to release a large amount of energy is called?",
        options: ["Nuclear fission", "Nuclear fusion", "Radioactive decay", "Electron capture"],
        answer: 0
      },
      {
        question: "The study of the Earth's atmosphere and its weather patterns is a branch of science called?",
        options: ["Geology", "Meteorology", "Oceanography", "Astronomy"],
        answer: 1
      },
      {
        question: "Which of the following is NOT a fundamental force in physics?",
        options: ["Electromagnetic force", "Strong nuclear force", "Weak nuclear force", "Life force"],
        answer: 3
      },
      {
        question: "The theory of evolution by natural selection was proposed by which scientist?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Stephen Hawking"],
        answer: 0
      }
  ],
  //hard
  [
      {
        question: "What is the name of the hypothetical point in spacetime where gravity becomes infinite according to general relativity?",
        options: ["Singularity", "Event horizon", "Wormhole", "Black hole (event horizon)"],
        answer: 0
      },
      {
        question: "The uncertainty principle states that it is impossible to know both the momentum and position of a subatomic particle with perfect accuracy. This principle is a cornerstone of which field of physics?",
        options: ["Classical mechanics", "Quantum mechanics", "Thermodynamics", "Statistical mechanics"],
        answer: 1
      },
      {
        question: "Which type of galaxy is characterized by a flattened disk with spiral arms and a central bulge?",
        options: ["Elliptical galaxy", "Spiral galaxy", "Irregular galaxy", "Lenticular galaxy"],
        answer: 1
      },
      {
        question: "The CRISPR-Cas9 system is a revolutionary gene editing technique. What does CRISPR stand for?",
        options: ["Clustered Regularly Interspaced Short Palindromic Repeats", "Caspase-Regulated Short Palindrome Repeats", "Cellular Reprogramming and Short Palindrome Repeats", "Cytoplasmic Regulatory Short Palindrome Repeats"],
        answer: 0
      },
      {
        question: "What is the name of the process by which a star explodes at the end of its life cycle, releasing a tremendous amount of energy and potentially forming a neutron star or black hole?",
        options: ["Supernova", "Hypernova", "Nebula formation", "Stellar collapse"],
        answer: 0
      }
  ]
];

const Current_Affairs = [
  //ez
  [
      {
        question: "What is the name of the social media platform that recently changed its name to 'Meta'?",
        options: ["Twitter", "Facebook", "Instagram", "YouTube"],
        answer: 1
      },
      {
        question: "What renewable energy source uses wind to generate electricity?",
        options: ["Solar power", "Hydropower", "Wind power", "Geothermal energy"],
        answer: 2
      },
      {
        question: "The term 'NFT' stands for what in the digital art world?",
        options: ["New File Type", "Non-Fungible Token", "Network File Transfer", "National File Trust"],
        answer: 1
      },
      {
        question: "Which space agency recently launched the James Webb Space Telescope?",
        options: ["European Space Agency (ESA)", "China National Space Administration (CNSA)", "Japan Aerospace Exploration Agency (JAXA)", "National Aeronautics and Space Administration (NASA)"],
        answer: 3
      },
      {
        question: "What is the most populous country in the world?",
        options: ["United States", "India", "China", "Brazil"],
        answer: 2
      }
  ],
  //med
  [
      {
        question: "The ongoing conflict between Russia and Ukraine has caused a global shortage of which essential resource?",
        options: ["Water", "Oil", "Food", "Rare earth metals"],
        answer: 2
      },
      {
        question: "The COP27 climate change conference is scheduled to take place in which country in 2024?",
        options: ["Egypt", "Brazil", "India", "United Kingdom"],
        answer: 0  // Assuming COP27 happens in 2024, location yet to be confirmed
      },
      {
        question: "The term 'metaverse' refers to a concept of a future where the physical and digital worlds converge. Which major tech company is heavily invested in developing its own metaverse platform?",
        options: ["Apple", "Microsoft", "Meta (formerly Facebook)", "Amazon"],
        answer: 2
      },
      {
        question: "The ongoing political and economic crisis in Sri Lanka has led to shortages of essential goods and public protests. What is the capital of Sri Lanka?",
        options: ["Colombo", "Kandy", "Galle", "Jaffna"],
        answer: 0
      },
      {
        question: "The Artemis program is a crewed lunar exploration program by which space agency? This program aims to return humans to the Moon by 2025.",
        options: ["European Space Agency (ESA)", "Roscosmos (Russia)", "China National Space Administration (CNSA)", "National Aeronautics and Space Administration (NASA)"],
        answer: 3
      }
  ],
  //hard
  [
    {
      question: "The term 'Brexit' refers to the United Kingdom's withdrawal from which political and economic union?",
      options: ["European Union", "North American Free Trade Agreement (NAFTA)", "Association of Southeast Asian Nations (ASEAN)", "World Trade Organization (WTO)"],
      answer: 0
    },
    {
      question: "The International Court of Justice (ICJ), also known as the World Court, settles legal disputes between states. Where is the seat of the ICJ located?",
      options: ["New York City, USA", "The Hague, Netherlands", "Geneva, Switzerland", "Paris, France"],
      answer: 1
    },
    {
      question: "The term 'cryptocurrency mining' refers to the process of verifying transactions on a blockchain network and earning cryptocurrency as a reward. What is the main environmental concern associated with cryptocurrency mining?",
      options: ["Air pollution", "Water pollution", "Soil contamination", "High energy consumption"],
      answer: 3
    },
    {
      question: "The term 'artificial intelligence' (AI) is a broad field of computer science focused on creating intelligent machines. What is a major ethical concern surrounding the development of advanced AI?",
      options: ["Job displacement due to automation", "Bias and discrimination in AI algorithms", "The potential for autonomous weapons systems", "All of the above"],
      answer: 3 // Select all options
    },
    {
      question: "The term 'humanitarian intervention' refers to the use of military force for humanitarian purposes without the consent of the host government. What is a controversial example of a recent humanitarian intervention?",
      options: ["The 2011 NATO intervention in Libya", "The 2003 US-led invasion of Iraq", "The ongoing conflict in Yemen", "The deployment of UN peacekeepers in South Sudan"],
      answer: 1
    }
  ]
];

const Geography = [
  //ez
  [
      {
        question: "Which of the following is the largest continent by land area?",
        options: ["Africa", "Asia", "North America", "South America"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        answer: 2
      },
      {
        question: "Which of the following is a major desert located in Africa?",
        options: ["Sahara Desert", "Gobi Desert", "Patagonian Desert", "Australian Desert"],
        answer: 0
      },
      {
        question: "The Great Barrier Reef is a famous coral reef system located off the coast of which country?",
        options: ["United States", "Canada", "Australia", "New Zealand"],
        answer: 2
      },
      {
        question: "What is the highest mountain in the world?",
        options: ["Mount Everest", "K2", "Kilimanjaro", "Mount Fuji"],
        answer: 0
      }
  ],
  //med
  [
      {
        question: "The Amazon River is the world's longest river by discharge volume. In which South American country does it begin its journey?",
        options: ["Brazil", "Peru", "Colombia", "Argentina"],
        answer: 1
      },
      {
        question: "The Suez Canal is a strategic waterway connecting the Red Sea with which other body of water?",
        options: ["Mediterranean Sea", "Black Sea", "Indian Ocean", "Atlantic Ocean"],
        answer: 0
      },
      {
        question: "Mount Fuji is a dormant volcano and the highest mountain in which Asian country?",
        options: ["China", "Japan", "India", "Nepal"],
        answer: 1
      },
      {
        question: "The Ring of Fire is a region around the Pacific Ocean known for its frequent earthquakes and volcanic eruptions. Which of these countries is NOT part of the Ring of Fire?",
        options: ["Canada", "Chile", "Japan", "Australia"],
        answer: 0
      },
      {
        question: "The term 'archipelago' refers to a group of islands. Which island nation in Southeast Asia is a famous archipelago?",
        options: ["Indonesia", "Philippines", "Sri Lanka", "Madagascar"],
        answer: 0  // Indonesia is the world's largest archipelago
      }
  ],
  //hard
  [

    {
      question: "What is the name of the world's deepest trench, located in the western Pacific Ocean near Guam?",
      options: [
        "Mariana Trench",
        "Kerguelen Trench",
        "Tonga Trench",
        "Philippine Trench"
      ],
      answer: 0
    },
    {
      question: "The Taklamakan Desert is a vast desert basin located in western China. What mountain range borders the Taklamakan Desert to the south?",
      options: [
        "Himalayas",
        "Kunlun Mountains",
        "Tian Shan Mountains",
        "Altai Mountains"
      ],
      answer: 1
    },
    {
      question: "Bolivia is a landlocked country in South America. Which major body of water did Bolivia have access to before losing its coastline in the 19th century?",
      options: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Caribbean Sea",
        "Arctic Ocean"
      ],
      answer: 0
    },
    {
      question: "The Strait of Gibraltar is a narrow waterway separating Spain and Morocco. What is the name of one body of water that the Strait of Gibraltar connects?",
      options: [
        "Mediterranean Sea",
        "Atlantic Ocean",
        "Black Sea",
        "Red Sea"
      ],
      answer: 0
    },
    {
      question: "The island of Borneo is the world's third-largest island by area. It is divided among three countries. Besides Indonesia, which has the largest portion of the island, name one of the Southeast Asian countries that share Borneo.",
      options: [
        "Malaysia",
        "Philippines",
        "Vietnam",
        "Thailand"
      ],
      answer: 0
    }
  ]
];

const Countries_and_Cultures = [
  //ez
  [
    {
      question: "What is the capital of France?",
      options: [
        "London",
        "Paris",
        "Berlin",
        "Rome"
      ],
      answer: 1
    },
    {
      question: "What is the traditional clothing worn by women in India called?",
      options: [
        "Sari",
        "Kimono",
        "Ao Dai",
        "Hanbok"
      ],
      answer: 0
    },
    {
      question: "Which South American country is famous for its carnival celebration in Rio de Janeiro?",
      options: [
        "Argentina",
        "Brazil",
        "Colombia",
        "Peru"
      ],
      answer: 1
    },
    {
      question: "What is the national currency of Japan?",
      options: [
        "Yuan",
        "Yen",
        "Euro",
        "Rupee"
      ],
      answer: 1
    },
    {
      question: "Which European country is known for its leaning tower?",
      options: [
        "France",
        "Italy",
        "Spain",
        "Germany"
      ],
      answer: 1
    }
  ],
  //med
  [
    {
      question: "Tango is a passionate dance originating from which South American countries?",
      options: [
        "Argentina and Uruguay",
        "Brazil and Colombia",
        "Chile and Peru",
        "Bolivia and Paraguay"
      ],
      answer: 0
    },
    {
      question: "Ha Long Bay, a UNESCO World Heritage Site known for its towering limestone pillars, is located in which Southeast Asian country?",
      options: [
        "Thailand",
        "Vietnam",
        "Indonesia",
        "Philippines"
      ],
      answer: 1
    },
    {
      question: "Kwanzaa is a week-long harvest festival celebrated by African Americans. Its origins can be traced back to which culture?",
      options: [
        "West African",
        "East African",
        "North African",
        "Southern African"
      ],
      answer: 0
    },
    {
      question: "Didgeridoo is a traditional wind instrument from Aboriginal Australian culture. What material is it typically made from?",
      options: [
        "Bamboo",
        "Clay",
        "Animal horn",
        "Hollowed eucalyptus tree trunk"
      ],
      answer: 3
    },
    {
      question: "Oktoberfest, a world-famous beer festival, is held annually in which German city?",
      options: [
        "Berlin",
        "Munich",
        "Hamburg",
        "Cologne"
      ],
      answer: 1
    }
  ],
  //hard
  [
    {
      question: "Capoeira is a unique Afro-Brazilian martial art that combines elements of dance, acrobatics, and music. What historical period is believed to have contributed to the development of Capoeira?",
      options: [
        "Pre-Columbian era",
        "Portuguese colonial period",
        "Brazilian Empire",
        "Early Brazilian Republic"
      ],
      answer: 1
    },
    {
      question: "Hmong people are an ethnic group with a rich cultural heritage, primarily residing in Southeast Asia. Which country has the largest Hmong population?",
      options: [
        "Laos",
        "Vietnam",
        "Thailand",
        "Myanmar"
      ],
      answer: 0
    },
    {
      question: "Noh is a traditional Japanese theater form known for its stark visuals and symbolic storytelling. What is the typical mask worn by the main character in a Noh play called?",
      options: [
        "Kabuki",
        "Men",
        "Hannya",
        "Oni"
      ],
      answer: 1
    },
    {
      question: "The Inuit people are indigenous inhabitants of the Arctic regions of North America and Greenland. What is the traditional winter dwelling used by the Inuit called?",
      options: [
        "Tipi",
        "Yurt",
        "Igloo",
        "Longhouse"
      ],
      answer: 2
    },
    {
      question: "Eid al-Fitr is a major Islamic holiday celebrated at the end of Ramadan. What Arabic phrase traditionally translates to 'Happy Eid'?",
      options: [
        "Eid Mubarak",
        "Ramadan Kareem",
        "Inshallah",
        "Jumu'ah Mubarak"
      ],
      answer: 0
    }
  ]
];


