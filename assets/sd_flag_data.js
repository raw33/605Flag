window.SD_FLAG_DATA = {
  voteKey: 'sd_flag_vote_v3',
  countsKey: 'sd_flag_counts_v3',
  voteEmailKey: 'sd_flag_vote_email_v1',
  pollEndpoint: '', // Add your hosted API URL here before publishing online.
  currentFlag: {
    label: 'Current South Dakota Flag',
    year: '1992',
    src: 'assets/Flag_of_South_Dakota.svg.png',
    alt: 'Current South Dakota state flag',
    problem: "South Dakota's current flag crams the Great Seal and circular text onto a blue field. At distance, the seal becomes an unreadable smudge."
  },
  originalFlag: {
    label: 'Original South Dakota Flag',
    year: '1909',
    src: 'assets/1909-original-flag.png',
    alt: "South Dakota's original 1909 state flag",
    historyUrl: 'https://sodakgovs.com/2023/12/11/the-history-and-future-of-south-dakotas-state-flag/',
    note: 'South Dakota has changed its flag before. The opportunity now is to make a change that improves recognition, meaning, and public pride.'
  },
  options: [
    {
      label: 'A - Rich 3.0 Design',
      name: "Option A: Rich's 3.0 South Dakota Flag Design",
      imageDesc: 'Buffalo, Indigenous pattern work, Black Hills Spruce, pheasant, corn, East River tree, Missouri River, and South Dakota sun',
      imageLink: 'assets/rich-final-design.png?v=20260606a'
    },
    {
      label: 'B - CGP Grey-Inspired Concept',
      name: 'Option B: CGP Grey-Inspired Concept',
      imageDesc: 'Simplified modern flag-study concept based on public flag-design principles',
      imageLink: 'assets/cgp-grey-inspired-design-bg-removed.png'
    },
    {
      label: 'C - Solar Horizon',
      name: 'Option C: Solar Horizon',
      imageDesc: 'Bold gold sun over South Dakota blue with a Missouri River form',
      imageLink: 'assets/solar-horizon-design.png?v=20260606a'
    },
    {
      label: 'D - Other Concept Direction',
      name: 'Option D: Other Concept Direction',
      imageDesc: 'Preference for one of the broader concept-gallery designs',
      imageLink: 'assets/other-concept-bg-removed.png'
    },
    {
      label: 'E - Keep Current Flag',
      name: 'Option E: Keep Current SD Flag (1992)',
      imageDesc: 'South Dakota current flag with Great Seal and The Mount Rushmore State text',
      imageLink: 'assets/Flag_of_South_Dakota.svg.png'
    },
    {
      label: 'F - Return Toward the Original Flag',
      name: 'Option F: Return Toward South Dakota Original Flag',
      imageDesc: 'Preference for revisiting the 1909 flag direction and its simple sun-forward symbolism',
      imageLink: 'assets/1909-original-flag.png'
    },
    {
      label: 'G - Open Design Call',
      name: 'Option G: Open Design Challenge - Fresh Concept Needed',
      imageDesc: 'Voter preference for an entirely new public design competition',
      imageLink: 'assets/1780708999353%20Background%20Removed.png'
    }
  ],
  previewOptions: {
    rich: {
      label: "Rich's 3.0 Design",
      src: 'assets/rich-final-design.png?v=20260606a',
      alt: "Rich's 3.0 South Dakota flag design",
      caption: "<strong>The final recommendation:</strong> A narrative-driven redesign that still keeps the flag language clean: South Dakota blue, a unified Missouri River, a Sunshine State sun, West River heritage, East River agriculture, and symbols that tell the state's story without text or a seal.",
      summary: "At 200 feet, the current flag becomes an anonymous blue field. Rich's 3.0 design keeps its main read: blue field, gold state symbols, and a central river shape."
    },
    cgp: {
      label: 'CGP Grey-Inspired Concept',
      src: 'assets/cgp-grey-inspired-design-bg-removed.png',
      alt: 'CGP Grey-inspired South Dakota flag concept',
      caption: '<strong>The flag-principles option:</strong> This concept pushes toward simpler symbols, cleaner shapes, and stronger distance readability. It asks whether South Dakota can communicate more by doing less.',
      summary: 'At 200 feet, this simpler concept keeps the broad state-story layout readable while reducing some of the fine detail that can disappear at distance.'
    },
    solar: {
      label: 'Solar Horizon',
      src: 'assets/solar-horizon-design.png?v=20260606a',
      alt: 'Solar Horizon South Dakota flag concept',
      caption: '<strong>The simple-symbol option:</strong> A bold sun, South Dakota blue, and a Missouri River form create a direct, memorable design that is easier to recognize from far away.',
      summary: 'At 200 feet, the Solar Horizon concept keeps a clear blue field, gold sun, and river shape. It is the strongest simplicity-first direction.'
    },
    other: {
      label: 'Other Concept Direction',
      src: 'assets/other-concept-bg-removed.png',
      alt: 'Alternate South Dakota flag concept',
      caption: '<strong>The broader exploration option:</strong> This keeps the conversation open to other submitted concepts, especially if voters prefer a different balance of symbolism, simplicity, and regional storytelling.',
      summary: 'At distance, this alternate concept still shows the blue, gold, and river language while offering a different visual composition for public debate.'
    },
    original: {
      label: 'Original 1909 Flag',
      src: 'assets/1909-original-flag.png',
      alt: "South Dakota's original 1909 state flag",
      caption: '<strong>The historical option:</strong> South Dakota once had a sun-forward flag direction. Returning to that spirit could honor the original design while still inviting a cleaner modern execution.',
      summary: 'At 200 feet, the original flag reminds us why simple symbols matter: the sun reads faster than a seal, even if the old execution still needs refinement.'
    }
  },
  conceptJourney: [
    {
      key: 'cgp',
      kicker: 'Start With Flag Principles',
      title: 'CGP Grey-Inspired Concept',
      body: 'This direction starts with the modern flag-design question: can a person recognize it instantly, from far away, without reading text or inspecting a seal?',
      src: 'assets/cgp-grey-inspired-design-bg-removed.png',
      alt: 'CGP Grey-inspired South Dakota flag concept'
    },
    {
      key: 'solar',
      kicker: 'Simplify The Story',
      title: 'Solar Horizon with the Missouri River',
      body: 'The next step reduces the state story to three pieces: South Dakota blue, a gold Sunshine State symbol, and a Missouri River shape that divides and connects the state.',
      src: 'assets/solar-horizon-design.png?v=20260606a',
      alt: 'Solar Horizon South Dakota flag concept'
    },
    {
      key: 'rich',
      kicker: 'Then Add South Dakota Character',
      title: "Rich's 3.0 Design",
      body: 'The final recommendation adds narrative: buffalo and Black Hills Spruce for West River, pheasant and agriculture for East River, and the Missouri River as the unifying center.',
      src: 'assets/rich-final-design.png?v=20260606a',
      alt: "Rich's 3.0 South Dakota flag design"
    }
  ],
  otherConceptImages: [
    'assets/1780708840131 Background Removed.png',
    'assets/1780708861730 Background Removed.png',
    'assets/1780708944141 Background Removed.png',
    'assets/1780708974833 Background Removed.png',
    'assets/1780708999353 Background Removed.png',
    'assets/Gemini_Generated_Image_9cr89p9cr89p9cr8 Background Removed.png',
    'assets/Gemini_Generated_Image_uu5of4uu5of4uu5o Background Removed.png',
    'assets/other-concept-bg-removed.png'
  ]
};
