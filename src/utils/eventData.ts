
export interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  type: 'technical' | 'non-technical' | 'workshop';
  rules?: string[];
  criteria?: string[];
}

export const eventData: EventType[] = [
  {
    id: 'ideathon',
    title: 'Ideathon',
    description: 'Propose AI-based solutions to real-world problems. Showcase your innovative thinking and problem-solving abilities in this exciting challenge.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop',
    date: '2023-09-15',
    time: '10:00 AM - 2:00 PM',
    type: 'technical',
    rules: [
      'Teams of 3-4 members Final presentation in front of judges complete solution',
      'Problem statements will be provided on spot',
      '4 hours to develop complete solution',
      'Final presentation in front of judges'
    ],
    criteria: [
      'Innovation & Originality',
      'Technical Feasibility',
      'Impact & Scalability',
      'Presentation Quality'
    ]
  },
  {
    id: 'cook-with-prompt',
    title: 'Cook with Prompt',
    description: 'A prompt-engineering challenge where participants generate AI image prompts based on given themes. Timed event with instant feedback.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop',
    date: '2023-09-15',
    time: '2:30 PM - 4:30 PM',
    type: 'technical',
    rules: [
      'Individual participation',
      'Three rounds of increasing difficulty',
      'Limited time per prompt',
      'Results judged on creativity and accuracy'
    ],
    criteria: [
      'Prompt Effectiveness',
      'Creative Approach',
      'Technical Understanding',
      'Time Management'
    ]
  },
  {
    id: 'bug-bounty',
    title: 'Bug Bounty',
    description: 'Fix AI-related code bugs within a limited time. Put your debugging skills to the test in this high-pressure technical challenge.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop',
    date: '2023-09-16',
    time: '10:00 AM - 1:00 PM',
    type: 'technical',
    rules: [
      'Individual participation',
      'Bug details provided at the start',
      '3 hours to identify and fix all bugs',
      'Participants ranked by speed and accuracy'
    ],
    criteria: [
      'Code Quality',
      'Debug Methodology',
      'Solution Efficiency',
      'Documentation'
    ]
  },
  {
    id: 'meme-media',
    title: 'Meme Media',
    description: 'Contest for creating AI-generated memes based on given topics. Showcase your creativity and humor in this fun competition.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop',
    date: '2023-09-16',
    time: '2:00 PM - 4:00 PM',
    type: 'non-technical',
    rules: [
      'Individual or team participation',
      'Create 3 memes on the given themes',
      'Use of AI tools allowed',
      'Submissions judged on humor, creativity, relevance'
    ],
    criteria: [
      'Humor & Creativity',
      'Technical Execution',
      'Audience Response',
      'Originality'
    ]
  },
  {
    id: 'ai-photography',
    title: 'AI Photography',
    description: 'AI-enhanced photography contest where participants capture & edit AI-driven photos. Blend your artistic vision with technology.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2638&auto=format&fit=crop',
    date: '2023-09-16',
    time: '2:00 PM - 5:00 PM',
    type: 'non-technical',
    rules: [
      'Capture photos during the event',
      'AI enhancement required',
      'Submit 3 best photos',
      'Include brief description of techniques used'
    ],
    criteria: [
      'Composition & Aesthetics',
      'Creative AI Integration',
      'Technical Skills',
      'Storytelling'
    ]
  },
  {
    id: 'ai-workshop',
    title: 'Build AI Tools from Scratch',
    description: 'A hands-on workshop where participants learn to build practical AI tools from the ground up. Gain valuable skills from industry experts.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop',
    date: '2023-09-17',
    time: '10:00 AM - 4:00 PM',
    type: 'workshop',
    rules: [
      'Bring your own laptop',
      'Basic programming knowledge required',
      'All framework dependencies will be provided',
      'Interactive sessions with Q&A'
    ]
  }
];
