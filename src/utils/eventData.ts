
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
  bannerImage?: string
}



export const eventData: EventType[] = [
  {
    id: 'ideathon',
    title: 'TRACE BACK CODING',
    description: 'Trace Back Coding is a reverse coding challenge where you don’t get the problem statement—just the output and conditions! Your task is to analyze the given constraints, think logically, and write the correct code to match the expected output. If you love problem-solving and coding challenges, this is the ultimate test of your skills!',
    image:  'images/trace.jpg', 
    date: '2025-03-29',
    time: '10:00 AM - 1:00 PM',
    type: 'technical',
    rules: [
      "Open to all individual participants interested in solving coding challenges with logic and skill." ,  

      "Participants will receive an expected output and a set of conditions to guide their solution." ,

      "The actual problem statement is hidden—you must analyze the given conditions to solve it." ,

      "Write the correct code that meets all given conditions and produces the expected output." ,

      "The event has a set time limit, and all solutions must be submitted before it ends." ,

      "Programming language: Choose any language you prefer to implement your solution." 
    ],
    criteria: [
      "Correctness: Does the code accurately produce the expected output while following all given conditions?" ,

      "Logic & Efficiency: How effectively does the code implement logic and efficiently satisfy all conditions?",
      
      "Code Optimization: Is the solution well-optimized to enhance performance while maintaining correctness?" ,
      
      "Edge Cases Handling: Does the code handle all possible inputs, including edge cases, without errors?" 
    ]
  },
  {
    id: 'cook-with-prompt',
    title: 'PROMPT CHEF',
    description: 'Prompt Chef is a technical event where participants craft precise AI image generation prompts based on given themes. Compete individually to create the most effective prompts within a fixed time. Showcase your creativity and AI skills in this unique challenge!',
    image: 'images/super.webp',
    date: '2025-03-29',
    time: '10:00 AM - 1:00 PM',
    type: 'technical',
    rules: [
      "Open to all individual participants interested in AI-generated images and prompt creation challenges." ,
       "Participants will get specific themes and must craft AI image generation prompts based on them." ,

       "Prompts should be clear, detailed, and optimized to achieve the best possible AI-generated results." ,

"The event has a set time limit, and all prompts must be submitted before the given time runs out." 
    ],
    criteria: [
      "Creativity: How unique and engaging is your prompt in generating AI images based on the given theme?" ,

"Clarity: Is your prompt well-structured, easy to understand, and clear in its instructions for AI?" ,

"Relevance: Does your prompt accurately align with the given theme and ensure meaningful AI results?" ,

"AI Output Quality: How effectively does the AI generate an image that matches your prompt’s details?" 
    ]
  },
  {
    id: 'bug-bounty',
    title: 'INNOV8',
    description: 'INNOV8 is a technical event  where you can bring your ideas to life! Whether you have a groundbreaking concept or a prototype project, this is your chance to showcase it. Present your ideas using a PPT or a working prototype and impress the judges with your innovation, problem-solving skills, and creativity. Let your ideas shape the future!',
    image: 'images/innov8.jpg',
    date: '2025-03-29',
    time: '10:00 AM - 1:00 PM',
    type: 'technical',
    rules: [
      "Open to all individuals and teams with a maximum size of four members for participation." ,

"Participants must present their idea using a well-structured PPT or a working prototype." ,

"The idea can be a new concept, product, or an innovative solution to a real-world problem." ,

"The presentation must explain the problem, solution, implementation, and its overall impact." ,

"The total time limit for the presentation is set to 10 minutes, including all key points." ,

"After the presentation, judges may ask relevant questions to assess the idea’s depth." 
    ],
    criteria: [
      "Innovation & Creativity: How unique, original, and impactful is the idea in bringing new solutions?" ,

"Problem-Solving: Does the idea effectively address a real-world challenge with a practical approach?",

"Feasibility: Can the idea be realistically implemented, considering available resources and technology?" ,

"Presentation Quality: How clearly and effectively is the idea explained, structured, and visually presented?" ,

"Prototype (if any): How well does the prototype demonstrate and validate the concept’s functionality?" 
    ]
  },
  {
    id: 'meme-media',
    title: 'Reinz Auction',
    description: "Rinz Auction is an exciting non-technical event inspired by the IPL auction! Participants will step into the shoes of team owners, strategizing and bidding to build the best possible team within a fixed budget. Make smart decisions, outbid your rivals, and form the ultimate squad. It's all about strategy, planning, and quick thinking—are you ready to take the challenge?",
    image: 'images/Reinz auction.jpg',
    date: '2025-03-29',
    time: '2:00 PM - 4:00 PM',
    type: 'non-technical',
    rules: [
      "A list of players for bidding will be provided, categorized into groups with base prices." ,

"Each team gets a virtual budget of 140 crore to bid for players and build a squad." ,

"Bidding happens in rounds, and the highest bidder for a player secures that player." ,

"Teams must have 15-18 players, including 12 Indians and up to 6 overseas players." ,

"Each team must pick at least 2 marquee players and have at least 3 uncapped players." ,

"A squad must include at least 2 wicketkeepers, 3 batsmen, 4 all-rounders, and 3 bowlers." ,

"Teams must strategize wisely to build a balanced squad while staying within budget." 

    ],
    criteria: [
      'Team Balance: How well-structured is the final squad?',

'Budget Management: Did the team use their budget wisely?',

'Strategy & Decision-Making: How smart were the bids?',

'Overall Auction Performance: How well did the team compete in bidding wars?'
    ]
  },
  {
    id: 'ai-photography',
    title: 'Time Rush',
    description: "Time Rush is a fun team-based event where participants must complete a series of exciting and time-limited challenges. The tasks are designed to test your team's speed, coordination—all while having loads of fun! Each round brings a new surprise, and the difficulty increases as you progress. If your team fails to complete a task within the time limit, you're disqualified! Can your team survive the rush and emerge as the ultimate winners?",
    image: 'images/time.jpg',
    date: '2025-03-29',
    time: '2:00 PM - 4:00 PM',
    type: 'non-technical',
    rules: [
      "The event is team-based, allowing a maximum of four members per team to participate." ,

"It consists of three rounds, each featuring a fun, engaging, and non-technical challenge." ,

"Teams must complete each task within the given time limit to qualify for the next round." ,

"Failing to finish a task within the time limit leads to immediate elimination." ,

"Challenges will require strategy, coordination, and quick thinking but no technical skills." ,

"The last team remaining after all rounds will be declared the winner of the event." 
    ],
    criteria: [
      "Task Completion: Did the team successfully complete all assigned challenges within the given rules?" ,

"Speed: How quickly did the team complete each round while maintaining accuracy and efficiency?" ,

"Teamwork & Coordination: How well did the team communicate, collaborate, and work together to succeed?" ,

"Creativity & Adaptability: How effectively did the team handle unexpected twists and adapt to challenges?" 
    ]
  },
  {
    id: 'ai-workshop',
    title: 'Build AI-Powered Application',
    description: "Join our hands-on workshop to learn how to build AI-powered applications from scratch! This session is designed for beginners and enthusiasts who want to explore the potential of AI in real-world applications. Through step-by-step guidance, you will learn the fundamentals of AI development and build your own AI-based tool. No prior AI experience is required—just curiosity and a willingness to learn!",
    image: 'images/workshop.webp',
    date: '2025-03-29',
    time: '10:00 AM - 1:00 PM',
    type: 'workshop',
    rules: [
      "Open to all students, and no prior AI knowledge is required to participate in the session." ,

"Participants must attend the entire session to be eligible for receiving certification." ,

"Bringing a personal laptop is mandatory for all participants in the hands-on session." ,

"The workshop will follow a structured, step-by-step, and interactive learning approach." ,

"A dedicated Q&A session will be conducted at the end to enhance further learning." 
    ]
  }
];
