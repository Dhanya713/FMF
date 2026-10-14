export const INITIAL_INTERESTS = [
  { id: 'performing_arts', name: 'Performing Arts & Stage', icon: 'Music', category: 'Entertainment & Arts', description: 'Singing, acting, dancing, theatre, live performance, and stage presence' },
  { id: 'visual_design', name: 'Creative Design & Visuals', icon: 'Palette', category: 'Creative & Design', description: 'UI/UX, graphic design, animation, interior aesthetics, and video production' },
  { id: 'coding_tech', name: 'Software & Technology', icon: 'Terminal', category: 'Technology', description: 'Software engineering, AI/ML models, system architectures, and cybersecurity' },
  { id: 'business_strategy', name: 'Entrepreneurship & Business', icon: 'TrendingUp', category: 'Business & Management', description: 'Startups, financial analysis, product management, and strategic marketing' },
  { id: 'healthcare_wellness', name: 'Healthcare & Medicine', icon: 'HeartPulse', category: 'Healthcare & Wellness', description: 'Patient care, clinical medicine, physiotherapy, and dietary wellness' },
  { id: 'science_research', name: 'Science & Discovery', icon: 'Microscope', category: 'Science & Research', description: 'Laboratory research, biotechnology, genetics, and environmental systems' },
  { id: 'law_public_service', name: 'Law & Public Policy', icon: 'Scale', category: 'Law & Governance', description: 'Legal defense, civil administration, advocacy, and social justice' },
  { id: 'education_people', name: 'Education & Counseling', icon: 'GraduationCap', category: 'Education & Psychology', description: 'Teaching, mental health counseling, psychology, and student mentorship' },
  { id: 'culinary_hospitality', name: 'Culinary & Hospitality', icon: 'UtensilsCrossed', category: 'Hospitality & Lifestyle', description: 'Gastronomy, culinary experimentation, dining experiences, and event curation' },
  { id: 'sports_fitness', name: 'Sports & Athletics', icon: 'Activity', category: 'Athletics & Lifestyle', description: 'Athletic performance, personal fitness coaching, and sports management' },
  { id: 'media_storytelling', name: 'Media & Storytelling', icon: 'Sparkles', category: 'Media & Content', description: 'Podcasting, journalism, creative writing, hosting, and social media production' },
  { id: 'travel_exploration', name: 'Travel & Exploration', icon: 'Compass', category: 'Hospitality & Culture', description: 'Expedition curation, ecotourism, global culture, and guided travel' }
];

export const INITIAL_QUESTIONS = [
  {
    id: 1,
    dimension: "Work Style & Daily Energy",
    category: "Scenario",
    question: "You have an entire open afternoon to tackle any project you want. Where do you naturally gravitate?",
    options: [
      { text: "Building digital software, configuring servers, or testing algorithmic code", weights: { software_engineer: 35, ai_ml_engineer: 30, cybersecurity_analyst: 25, product_manager: 10 } },
      { text: "Practicing an instrument, singing vocal warmups, or perfecting choreography steps", weights: { singer_vocalist: 35, dancer_choreographer: 35, actor_performer: 25, music_producer: 30 } },
      { text: "Sketching creative UI layouts, styling interior spaces, or editing cinematic video", weights: { ui_ux_designer: 30, graphic_designer: 30, video_editor: 30, interior_designer: 30, animator: 25 } },
      { text: "Reviewing business pitch decks, market financial trends, or launching a side venture", weights: { entrepreneur: 35, marketing_specialist: 30, financial_analyst: 30, business_manager: 25, product_manager: 25 } },
      { text: "Conducting lab experiments, studying biological phenomena, or analyzing data", weights: { research_scientist: 35, biotechnologist: 35, medical_researcher: 30, doctor: 20 } }
    ]
  },
  {
    id: 2,
    dimension: "Performing & Stage Presence",
    category: "Behavioral",
    question: "You are given a blank stage, a spotlight, and 5 minutes in front of a live audience. What sounds most natural?",
    options: [
      { text: "Singing a song with vocal dynamics, or performing a high-energy dance routine", weights: { singer_vocalist: 40, dancer_choreographer: 38, actor_performer: 25, entertainment_media_host: 20 } },
      { text: "Delivering an emotional monologue, playing a dramatic character, or voice acting", weights: { actor_performer: 40, singer_vocalist: 20, film_director_producer: 25, writer: 20 } },
      { text: "Hosting the event with charismatic banter, interviewing guests, or doing stand-up", weights: { entertainment_media_host: 40, content_creator: 30, marketing_specialist: 20, event_manager: 25 } },
      { text: "Modeling high-fashion apparel and commanding the runway with striking posture", weights: { model_fashion: 40, fashion_designer: 25, photographer: 15, entertainment_media_host: 15 } },
      { text: "Operating behind the scenes — running the sound board, lighting, or directing the cue flow", weights: { music_producer: 35, film_director_producer: 35, video_editor: 25, event_manager: 30, cybersecurity_analyst: 15 } }
    ]
  },
  {
    id: 3,
    dimension: "Problem Solving Approach",
    category: "Analytical vs Creative",
    question: "When facing a completely new and ambiguous problem, what is your first instinct?",
    options: [
      { text: "Break it down logically into mathematical, systemic, or algorithmic variables", weights: { ai_ml_engineer: 35, software_engineer: 30, financial_analyst: 25, cybersecurity_analyst: 30, research_scientist: 25 } },
      { text: "Understand the human emotions, psychological drivers, and personal stories involved", weights: { psychologist: 35, counselor: 35, social_worker: 30, hr_specialist: 25, teacher: 25, doctor: 20 } },
      { text: "Brainstorm bold artistic concepts, visual moods, and out-of-the-box metaphors", weights: { ui_ux_designer: 25, writer: 30, graphic_designer: 30, fashion_designer: 30, film_director_producer: 25 } },
      { text: "Rally a team, allocate operational resources, and design a business growth strategy", weights: { entrepreneur: 35, business_manager: 35, product_manager: 30, event_manager: 25, marketing_specialist: 25 } },
      { text: "Examine legal precedents, constitutional rules, ethical standards, and policies", weights: { lawyer: 40, civil_services: 35, policy_analyst: 35, career_counselor: 15 } }
    ]
  },
  {
    id: 4,
    dimension: "Communication & Social Expression",
    category: "Interpersonal",
    question: "Which communication medium makes you feel most articulate and impactful?",
    options: [
      { text: "Storytelling through written essays, compelling copy, scripts, or literature", weights: { writer: 40, content_creator: 30, film_director_producer: 25, marketing_specialist: 20 } },
      { text: "Visual arts, infographics, 3D animations, aesthetic layouts, and video edits", weights: { graphic_designer: 35, animator: 35, video_editor: 35, photographer: 30, ui_ux_designer: 25 } },
      { text: "Direct face-to-face coaching, active listening, and mentoring individuals 1-on-1", weights: { counselor: 35, career_counselor: 35, psychologist: 30, teacher: 30, fitness_trainer: 25, physiotherapist: 25 } },
      { text: "Public speaking on camera, podcast broadcasting, and engaging social audiences", weights: { entertainment_media_host: 35, content_creator: 35, actor_performer: 25, marketing_specialist: 25 } },
      { text: "Clear structured documentation, technical RFCs, data charts, and code reviews", weights: { software_engineer: 25, ai_ml_engineer: 25, research_scientist: 25, financial_analyst: 25, product_manager: 20 } }
    ]
  },
  {
    id: 5,
    dimension: "Sensory & Physical Engagement",
    category: "Hands-on vs Intellectual",
    question: "Which physical or hands-on sensory environment sounds most energizing to you?",
    options: [
      { text: "A bustling kitchen crafting gourmet dishes, plating sauces, and balancing flavors", weights: { chef: 40, event_manager: 20, nutritionist: 25, travel_curator: 15 } },
      { text: "A high-energy gym, athletic training facility, or sports field executing drills", weights: { fitness_trainer: 40, sports_professional: 40, physiotherapist: 30, dancer_choreographer: 20 } },
      { text: "An architectural studio with 3D physical models, blueprint drafts, and materials", weights: { architect: 40, interior_designer: 35, fashion_designer: 30, civil_services: 10 } },
      { text: "A specialized clinical clinic or medical hospital helping patients recover", weights: { doctor: 35, nurse: 40, physiotherapist: 35, nutritionist: 25 } },
      { text: "A peaceful studio or quiet acoustic space with monitors, DAW synths, and gear", weights: { music_producer: 45, singer_vocalist: 20, video_editor: 25, software_engineer: 15 } }
    ]
  },
  {
    id: 6,
    dimension: "Creativity & Aesthetics",
    category: "Artistic Inclination",
    question: "When admiring a finished creative piece, what element catches your admiration first?",
    options: [
      { text: "The rhythm, chord progressions, sonic mix quality, and vocal range", weights: { music_producer: 35, singer_vocalist: 35, dancer_choreographer: 20 } },
      { text: "The cinematography, camera angles, color grading, and narrative arc", weights: { film_director_producer: 35, video_editor: 35, photographer: 30, animator: 25 } },
      { text: "The typography, micro-interactions, layout simplicity, and visual balance", weights: { ui_ux_designer: 35, graphic_designer: 35, fashion_designer: 20, architect: 20 } },
      { text: "The emotional vulnerability, dramatic tension, and authentic stage acting", weights: { actor_performer: 38, singer_vocalist: 25, writer: 25, entertainment_media_host: 20 } },
      { text: "The structural elegance, architectural sustainability, and functional spatial flow", weights: { architect: 38, interior_designer: 35, environmental_scientist: 20, civil_services: 15 } }
    ]
  },
  {
    id: 7,
    dimension: "Helping Others & Social Impact",
    category: "Altruism & Community",
    question: "If you could dedicate yourself to a major societal mission, which would you pick?",
    options: [
      { text: "Curing diseases, advancing healthcare treatments, or directly treating patients", weights: { doctor: 35, nurse: 35, medical_researcher: 35, biotechnologist: 25, nutritionist: 20 } },
      { text: "Combating climate change, preserving wildlife habitats, and clean energy", weights: { environmental_scientist: 40, research_scientist: 25, policy_analyst: 25, architect: 15 } },
      { text: "Mentoring the next generation, reforming classrooms, and inspiring students", weights: { teacher: 40, counselor: 30, career_counselor: 35, psychologist: 25 } },
      { text: "Defending human rights, ensuring equal justice, and creating fair legal laws", weights: { lawyer: 40, civil_services: 35, policy_analyst: 35, social_worker: 30 } },
      { text: "Building inclusive community programs, poverty relief, and family support systems", weights: { social_worker: 40, counselor: 30, psychologist: 25, civil_services: 25 } }
    ]
  },
  {
    id: 8,
    dimension: "Technical & Systems Inclination",
    category: "Technology Depth",
    question: "How do you feel about complex computer systems, network protocols, and artificial intelligence?",
    options: [
      { text: "Fascinated by neural networks, LLMs, computer vision, and predictive statistics", weights: { ai_ml_engineer: 45, software_engineer: 25, research_scientist: 25 } },
      { text: "Passionate about building scalable backend servers, APIs, and cloud infrastructure", weights: { software_engineer: 40, ai_ml_engineer: 20, cybersecurity_analyst: 25, product_manager: 15 } },
      { text: "Driven to hunt zero-day vulnerabilities, secure networks, and thwart cyber hackers", weights: { cybersecurity_analyst: 45, software_engineer: 20, policy_analyst: 15 } },
      { text: "I prefer using tech as a creative tool (Figma, Blender, DAWs, Premiere) rather than coding", weights: { ui_ux_designer: 25, graphic_designer: 25, video_editor: 30, animator: 30, music_producer: 25 } },
      { text: "I am more drawn to human connection, outdoor work, or live performance than screens", weights: { singer_vocalist: 25, actor_performer: 25, dancer_choreographer: 25, sports_professional: 25, travel_curator: 25, chef: 25 } }
    ]
  },
  {
    id: 9,
    dimension: "Leadership & Enterprise",
    category: "Management & Risk",
    question: "When working with a group on an ambitious project, which leadership role feels most natural?",
    options: [
      { text: "The Visionary Founder: Setting the company mission, raising capital, and taking bold risks", weights: { entrepreneur: 40, business_manager: 25, product_manager: 25, marketing_specialist: 20 } },
      { text: "The Product Architect: Defining user roadmaps, feature priorities, and cross-team execution", weights: { product_manager: 40, ui_ux_designer: 20, business_manager: 25, software_engineer: 15 } },
      { text: "The Creative Director: Guiding the artistic vision, storyboards, tone, and visual standards", weights: { film_director_producer: 35, graphic_designer: 25, fashion_designer: 30, event_manager: 25 } },
      { text: "The People Lead: Facilitating team harmony, coaching talent, and resolving workplace disputes", weights: { hr_specialist: 40, business_manager: 25, counselor: 20, career_counselor: 25 } },
      { text: "The Technical Specialist: Contributing deep expert knowledge without managing corporate politics", weights: { research_scientist: 30, biotechnologist: 30, cybersecurity_analyst: 30, software_engineer: 25, medical_researcher: 25 } }
    ]
  },
  {
    id: 10,
    dimension: "Entertainment & Media Creation",
    category: "Digital Content & Audience",
    question: "Which type of digital media creation sounds like an exciting endeavor you'd enjoy?",
    options: [
      { text: "Producing beats, recording vocals, mastering tracks, and releasing music on Spotify", weights: { music_producer: 38, singer_vocalist: 35, dancer_choreographer: 15 } },
      { text: "Hosting a high-energy video show, streaming gameplay with humor, or conducting podcasts", weights: { entertainment_media_host: 38, content_creator: 38, marketing_specialist: 20 } },
      { text: "Directing cinematic short films, writing narrative scripts, and editing footage", weights: { film_director_producer: 38, video_editor: 30, writer: 30, actor_performer: 20 } },
      { text: "Curating viral lifestyle content, fashion shoots, aesthetic lookbooks, and brand deals", weights: { model_fashion: 35, content_creator: 35, fashion_designer: 30, marketing_specialist: 25 } },
      { text: "Designing interactive 3D virtual worlds, stylized character animations, and game assets", weights: { animator: 40, graphic_designer: 25, ui_ux_designer: 25, software_engineer: 15 } }
    ]
  },
  {
    id: 11,
    dimension: "Travel & Cultural Curiosity",
    category: "Global Exploration",
    question: "When you travel to an unfamiliar country, how do you spend your days?",
    options: [
      { text: "Mapping out hidden heritage routes, ancient landmarks, and sharing stories with groups", weights: { travel_curator: 42, event_manager: 20, writer: 15, social_worker: 10 } },
      { text: "Hunting down authentic street food stalls, artisan bakeries, and regional spices", weights: { chef: 38, nutritionist: 20, travel_curator: 20, interior_designer: 10 } },
      { text: "Photographing architecture, historic monuments, textured facades, and local street fashion", weights: { photographer: 35, architect: 30, fashion_designer: 25, interior_designer: 25 } },
      { text: "Attending live music concerts, underground dance clubs, and street busking performances", weights: { dancer_choreographer: 30, singer_vocalist: 30, music_producer: 25, entertainment_media_host: 20 } },
      { text: "Analyzing the local economy, startup ecosystems, and international trade dynamics", weights: { financial_analyst: 30, entrepreneur: 30, policy_analyst: 25, civil_services: 20 } }
    ]
  },
  {
    id: 12,
    dimension: "Health, Body & Wellness",
    category: "Physical & Biological Care",
    question: "Which dimension of human wellness and physical performance sparks your passion?",
    options: [
      { text: "Diagnosing complex clinical symptoms, reading medical scans, and surgical precision", weights: { doctor: 40, medical_researcher: 30, nurse: 25 } },
      { text: "Rehabilitating sports injuries, rebuilding muscular mobility, and biomechanics", weights: { physiotherapist: 42, fitness_trainer: 30, sports_professional: 25 } },
      { text: "Designing customized meal plans, metabolic nutrition, and gut health protocols", weights: { nutritionist: 42, chef: 20, fitness_trainer: 25, doctor: 15 } },
      { text: "Pushing physical endurance, competitive athletics, and tactical teamwork in tournaments", weights: { sports_professional: 42, fitness_trainer: 30, dancer_choreographer: 20 } },
      { text: "Emotional mindfulness, trauma therapy, and psychological counseling for mental resilience", weights: { psychologist: 40, counselor: 40, social_worker: 25 } }
    ]
  },
  {
    id: 13,
    dimension: "Legal, Governance & Public Administration",
    category: "Rules & Policy",
    question: "When evaluating how society functions, where do you see yourself making a tangible mark?",
    options: [
      { text: "Argue compelling cases in court, draft watertight contracts, and defend client rights", weights: { lawyer: 45, civil_services: 20, policy_analyst: 20 } },
      { text: "Administer government departments, lead civic infrastructure, and implement public welfare", weights: { civil_services: 42, policy_analyst: 30, lawyer: 20, business_manager: 15 } },
      { text: "Draft data-backed economic policies, sustainability legislation, and think-tank whitepapers", weights: { policy_analyst: 42, research_scientist: 20, financial_analyst: 20, environmental_scientist: 20 } },
      { text: "Advocate for marginalized communities directly on the ground through casework and shelter support", weights: { social_worker: 40, counselor: 25, civil_services: 20 } },
      { text: "Disrupt outdated traditional policies through private sector technological innovation", weights: { entrepreneur: 30, product_manager: 25, software_engineer: 20 } }
    ]
  },
  {
    id: 14,
    dimension: "Events, Hospitality & Live Experience",
    category: "Organization & Hospitality",
    question: "Imagine you are tasked with producing a major 3-day international festival. Which part excites you?",
    options: [
      { text: "Coordinating the artist lineup, stage lighting schedules, VIP logistics, and crowd experience", weights: { event_manager: 42, entertainment_media_host: 20, business_manager: 20 } },
      { text: "Curating the culinary vendors, fine-dining popups, and signature cocktail menus", weights: { chef: 35, event_manager: 25, travel_curator: 15 } },
      { text: "Designing the stage aesthetics, banners, festival branding, and merchandise apparel", weights: { graphic_designer: 30, fashion_designer: 25, interior_designer: 25, marketing_specialist: 20 } },
      { text: "Performing on the main stage to thousands of cheering fans singing your lyrics", weights: { singer_vocalist: 40, dancer_choreographer: 35, actor_performer: 25 } },
      { text: "Securing corporate sponsors, calculating ticket revenue models, and budget forecasting", weights: { financial_analyst: 30, entrepreneur: 30, marketing_specialist: 25, business_manager: 25 } }
    ]
  },
  {
    id: 15,
    dimension: "Scientific Curiosity & Laboratory Discovery",
    category: "Biotech & Discovery",
    question: "Which scientific breakthrough would you be most thrilled to contribute to?",
    options: [
      { text: "Synthesizing mRNA gene therapies, CRISPR editing, and vaccine biotechnology", weights: { biotechnologist: 42, medical_researcher: 35, research_scientist: 30 } },
      { text: "Discovering new cellular pathways, neurobiology mechanisms, or oncology treatments", weights: { medical_researcher: 40, doctor: 25, research_scientist: 35, biotechnologist: 25 } },
      { text: "Engineering bio-degradable materials, coral reef restoration, and carbon capture solutions", weights: { environmental_scientist: 42, research_scientist: 30, biotechnologist: 25 } },
      { text: "Pioneering artificial general intelligence, quantum computing, or self-learning robotics", weights: { ai_ml_engineer: 42, software_engineer: 25, research_scientist: 25 } },
      { text: "Unraveling human cognitive behavioral quirks and subconscious memory formation", weights: { psychologist: 40, research_scientist: 25, counselor: 20 } }
    ]
  },
  {
    id: 16,
    dimension: "Fashion, Style & Spatial Aesthetics",
    category: "Spatial & Material Craft",
    question: "When you look at fabrics, textures, architectural spaces, or garments, what inspires you?",
    options: [
      { text: "Drafting avant-garde garment patterns, selecting sustainable textiles, and runway collections", weights: { fashion_designer: 45, model_fashion: 25, interior_designer: 15 } },
      { text: "Harmonizing room lighting, furniture ergonomics, paint palettes, and acoustic textures", weights: { interior_designer: 45, architect: 30, graphic_designer: 15 } },
      { text: "Structural engineering, parametric facades, passive solar design, and skyscraper blueprints", weights: { architect: 45, interior_designer: 20, environmental_scientist: 15 } },
      { text: "Wearing designer couture and striking dramatic poses for international Vogue editorials", weights: { model_fashion: 45, fashion_designer: 20, photographer: 15 } },
      { text: "Framing the perfect studio lighting, lens aperture, and capturing emotional human portraits", weights: { photographer: 45, video_editor: 25, film_director_producer: 20 } }
    ]
  },
  {
    id: 17,
    dimension: "Education, Mentorship & Human Potential",
    category: "Empowering Others",
    question: "When a friend or student comes to you feeling completely stuck and lost, what is your approach?",
    options: [
      { text: "Listen patiently with deep psychological empathy, validate their feelings, and unpack emotional barriers", weights: { counselor: 42, psychologist: 38, social_worker: 30 } },
      { text: "Map out actionable career options, review their strengths, and craft a step-by-step career path", weights: { career_counselor: 45, hr_specialist: 25, teacher: 20 } },
      { text: "Break complex subjects down with analogies, clear diagrams, and enthusiastic teaching", weights: { teacher: 45, counselor: 20, career_counselor: 20, writer: 20 } },
      { text: "Diagnose physical health habits, sleep quality, workout regimen, and dietary nutrition", weights: { fitness_trainer: 30, nutritionist: 30, doctor: 20, physiotherapist: 25 } },
      { text: "Help them write a resume, negotiate compensation, and prep mock behavioral interviews", weights: { hr_specialist: 40, career_counselor: 35, business_manager: 20 } }
    ]
  },
  {
    id: 18,
    dimension: "Risk Tolerance & Work Environment",
    category: "Independence & Stability",
    question: "What kind of career structure and risk profile matches your personality best?",
    options: [
      { text: "High risk, unlimited upside: Building my own venture, performing for global audiences, or creating IP", weights: { entrepreneur: 35, singer_vocalist: 30, actor_performer: 30, content_creator: 30, fashion_designer: 25 } },
      { text: "Structured, respected, and highly prestigious: Healthcare medicine, corporate law, or civil administration", weights: { doctor: 35, lawyer: 35, civil_services: 35, policy_analyst: 25, architect: 20 } },
      { text: "Tech flexibility & continuous learning: Remote software engineering, AI research, or product design", weights: { software_engineer: 35, ai_ml_engineer: 35, ui_ux_designer: 30, cybersecurity_analyst: 30 } },
      { text: "Creative freelance & artistic freedom: Photography, music production, writing, or interior design", weights: { photographer: 35, music_producer: 35, writer: 35, interior_designer: 30, video_editor: 30 } },
      { text: "Community-centered & human meaningful: Teaching, psychological therapy, clinical care, or social welfare", weights: { teacher: 35, psychologist: 35, counselor: 35, nurse: 30, social_worker: 35 } }
    ]
  }
];

export const INITIAL_CAREERS = [
  // TECHNOLOGY (Limited to 3 representative pillars as requested)
  {
    id: 'software_engineer',
    title: 'Software Engineer',
    category: 'Technology',
    tagline: 'Architecting scalable applications, cloud systems & digital platforms',
    description: 'Software Engineers design, build, test, and maintain software applications and distributed cloud systems. They solve real-world problems using algorithms, clean code architecture, and modern full-stack frameworks.',
    suitability: 95,
    whyItMatches: 'Your affinity for problem solving, structural logic, and building functional applications aligns directly with software engineering.',
    salaryRange: '$85,000 – $180,000 / yr',
    growth: '+25% (Much faster than average)',
    difficulty: 'Moderate to High',
    rating: '4.9',
    badge: 'High Demand',
    icon: 'Terminal',
    accentColor: 'indigo',
    demandLevel: 'Very High',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Data Structures & Algorithms', 'TypeScript & Python', 'React & Next.js', 'Node.js & Express REST/GraphQL', 'SQL & MongoDB', 'Git & CI/CD', 'Cloud (AWS/Docker)'],
    overview: 'As a Software Engineer, you translate conceptual ideas into interactive digital reality. Whether creating consumer mobile apps or high-throughput backends, the field offers immense flexibility, high compensation, and global remote opportunities.',
    keyResponsibilities: ['Write clean, testable, and maintainable code', 'Collaborate with UI/UX designers and product managers', 'Review code and architect scalable database schemas', 'Deploy and monitor cloud web services'],
    industries: ['SaaS', 'Fintech', 'HealthTech', 'E-Commerce', 'Gaming'],
    pros: ['High compensation & equity upside', 'Abundant remote & hybrid options', 'Continuous intellectual growth', 'Immediate tangible impact'],
    challenges: ['Rapidly evolving frameworks', 'Managing technical debt', 'Occasional on-call incident response'],
    certifications: ['AWS Certified Solutions Architect', 'Meta Certified Frontend Developer', 'MongoDB Certified Developer'],
    projects: ['Full-stack SaaS workspace', 'Real-time collaborative whiteboard', 'REST API microservice with Redis caching'],
    communities: ['GitHub Community', 'HackerNews', 'Dev.to', 'Reactiflux Discord'],
    learningResources: [
      { title: 'The Odin Project Full-Stack', type: 'Course', url: 'https://theodinproject.com', free: true },
      { title: 'MDN Web Docs', type: 'Docs', url: 'https://developer.mozilla.org', free: true },
      { title: 'Clean Code by Robert Martin', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['ai_ml_engineer', 'cybersecurity_analyst', 'product_manager', 'ui_ux_designer']
  },
  {
    id: 'ai_ml_engineer',
    title: 'AI / ML Engineer',
    category: 'Technology',
    tagline: 'Designing neural networks, generative AI systems & predictive models',
    description: 'AI/ML Engineers research, train, and deploy machine learning models and large language models (LLMs). They bridge mathematical algorithms with production software to power intelligent automated agents.',
    suitability: 93,
    whyItMatches: 'Your mathematical rigor, interest in cutting-edge algorithms, and systems intuition make machine learning an exceptional match.',
    salaryRange: '$110,000 – $220,000 / yr',
    growth: '+38% (Fastest Growing in Tech)',
    difficulty: 'Challenging',
    rating: '5.0',
    badge: 'AI Vanguard',
    icon: 'Sparkles',
    accentColor: 'purple',
    demandLevel: 'Extremely High',
    estimatedLearningTime: '9 – 18 Months',
    requiredSkills: ['Python & PyTorch', 'Linear Algebra & Statistics', 'Transformer Architecture & LLMs', 'Vector Databases & RAG', 'MLOps & Model Deployment', 'Feature Engineering'],
    overview: 'AI Engineers work at the absolute frontier of computational intelligence. You will develop models capable of vision, natural language understanding, reasoning, and autonomous task execution.',
    keyResponsibilities: ['Train and fine-tune transformer models on domain datasets', 'Build RAG pipelines with vector databases', 'Optimize model latency and inference throughput', 'Evaluate model bias, hallucination, and accuracy benchmarks'],
    industries: ['Artificial Intelligence', 'Autonomous Systems', 'Bioinformatics', 'Finance', 'Enterprise Tech'],
    pros: ['Industry-leading compensation', 'Groundbreaking technological breakthroughs', 'High strategic influence in companies'],
    challenges: ['Heavy mathematical prerequisites', 'High computational costs', 'Fast-moving research papers'],
    certifications: ['DeepLearning.AI TensorFlow / PyTorch Specialization', 'AWS Machine Learning Specialty'],
    projects: ['RAG-based AI document assistant', 'Image segmentation neural network', 'Fine-tuned LLM for specialized domain reasoning'],
    communities: ['Hugging Face Hub', 'r/MachineLearning', 'Weights & Biases Community'],
    learningResources: [
      { title: 'Fast.ai Practical Deep Learning', type: 'Course', url: 'https://course.fast.ai', free: true },
      { title: 'Hands-On Machine Learning (Géron)', type: 'Book', url: 'https://oreilly.com', free: false }
    ],
    relatedCareers: ['software_engineer', 'research_scientist', 'financial_analyst']
  },
  {
    id: 'cybersecurity_analyst',
    title: 'Cybersecurity Professional',
    category: 'Technology',
    tagline: 'Defending digital infrastructure, thwarting breaches & threat hunting',
    description: 'Cybersecurity Professionals protect networks, cloud infrastructure, and sensitive data from cyber attacks. They conduct vulnerability assessments, penetration tests, and architect zero-trust defense perimeters.',
    suitability: 90,
    whyItMatches: 'Your methodical investigation style, attention to systemic vulnerabilities, and ethical responsibility position you for high cybersecurity success.',
    salaryRange: '$80,000 – $165,000 / yr',
    growth: '+32% (Critical Global Demand)',
    difficulty: 'Challenging',
    rating: '4.8',
    badge: 'Critical Defense',
    icon: 'ShieldCheck',
    accentColor: 'rose',
    demandLevel: 'Very High',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Network Protocols (TCP/IP, DNS, TLS)', 'Linux Administration', 'Penetration Testing (Kali, Burp Suite)', 'SIEM & Threat Detection (Splunk)', 'Cloud Security (IAM, Zero Trust)', 'Cryptography Basics'],
    overview: 'In an increasingly interconnected world, cybersecurity specialists safeguard everything from critical power grids and banking systems to medical records against sophisticated adversaries.',
    keyResponsibilities: ['Monitor security alerts and investigate suspicious network anomalies', 'Perform ethical hacking and penetration tests on company assets', 'Enforce multi-factor authentication and encryption standards', 'Formulate incident response playbooks for disaster recovery'],
    industries: ['Defense & Aerospace', 'Banking & Fintech', 'Healthcare', 'Government', 'Enterprise Cloud'],
    pros: ['Recession-proof job security', 'Exciting red/blue team challenges', 'Direct protection of privacy and human safety'],
    challenges: ['High responsibility during active breach incidents', 'Continuous cat-and-mouse adversary evolution'],
    certifications: ['CompTIA Security+', 'Certified Ethical Hacker (CEH)', 'OSCP (Offensive Security Certified Professional)'],
    projects: ['Home lab SOC with Wazuh / Splunk', 'Automated vulnerability scanner script in Python', 'Capture the Flag (CTF) security challenges'],
    communities: ['Hack The Box', 'TryHackMe', 'r/netsec', 'OWASP Local Chapters'],
    learningResources: [
      { title: 'TryHackMe Pre-Security & SOC Paths', type: 'Interactive Lab', url: 'https://tryhackme.com', free: true },
      { title: 'OWASP Top 10 Security Guide', type: 'Docs', url: 'https://owasp.org', free: true }
    ],
    relatedCareers: ['software_engineer', 'lawyer', 'civil_services']
  },

  // CREATIVE & DESIGN (8 Careers)
  {
    id: 'ui_ux_designer',
    title: 'UI/UX Designer',
    category: 'Creative & Design',
    tagline: 'Designing intuitive user interfaces, digital interactions & design systems',
    description: 'UI/UX Designers synthesize user psychology, graphic aesthetics, and ergonomic interaction patterns to make software feel natural, engaging, and delightfully easy to navigate.',
    suitability: 94,
    whyItMatches: 'Your aesthetic taste, empathy for human frustration, and visual composition skills make product design a seamless fit.',
    salaryRange: '$75,000 – $155,000 / yr',
    growth: '+22% (Rapid Expansion)',
    difficulty: 'Moderate',
    rating: '4.9',
    badge: 'Design Leader',
    icon: 'Palette',
    accentColor: 'pink',
    demandLevel: 'High',
    estimatedLearningTime: '4 – 8 Months',
    requiredSkills: ['Figma & Component Auto-Layout', 'Design Systems & Tokens', 'User Journey Mapping', 'Interactive Prototyping', 'Usability Testing', 'Wireframing & Typography'],
    overview: 'Product designers shape how billions interact with digital technology every single day, ensuring applications are accessible, ergonomic, and aesthetically pleasing.',
    keyResponsibilities: ['Create interactive prototypes and design system libraries in Figma', 'Conduct user interviews to discover pain points', 'Hand off production specs to software developers', 'Run A/B usability experiments'],
    industries: ['Tech Apps', 'E-commerce', 'Fintech', 'Creative Agencies', 'HealthTech'],
    pros: ['High creative satisfaction', 'Direct visibility in shipping products', 'Strong cross-functional leadership'],
    challenges: ['Balancing user desires with business KPIs', 'Managing stakeholder feedback'],
    certifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group UX Master'],
    projects: ['Mobile banking accessibility redesign', 'SaaS enterprise design system with tokens', 'Interactive e-commerce checkout prototype'],
    communities: ['Figma Community', 'Dribbble', 'Design Buddies Discord'],
    learningResources: [
      { title: 'Refactoring UI (Wathan & Schoger)', type: 'Book', url: 'https://refactoringui.com', free: false },
      { title: 'Figma Official Academy', type: 'Tutorials', url: 'https://youtube.com/figma', free: true }
    ],
    relatedCareers: ['graphic_designer', 'product_manager', 'content_creator', 'software_engineer']
  },
  {
    id: 'graphic_designer',
    title: 'Graphic Designer',
    category: 'Creative & Design',
    tagline: 'Crafting brand visual identities, typography & commercial art',
    description: 'Graphic Designers create visual concepts that inspire, inform, and captivate consumers. They craft brand identities, marketing collateral, packaging, typography, and advertising assets.',
    suitability: 88,
    whyItMatches: 'Your visual instinct, command of color theory, and passion for visual identity make graphic design a natural avenue.',
    salaryRange: '$50,000 – $105,000 / yr',
    growth: '+12% (Steady Creative Demand)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Brand Creator',
    icon: 'Palette',
    accentColor: 'amber',
    demandLevel: 'Moderate',
    estimatedLearningTime: '4 – 9 Months',
    requiredSkills: ['Adobe Illustrator & Photoshop', 'Typography & Layout Hierarchy', 'Brand Identity Systems', 'Print & Packaging Specs', 'Color Harmony & Vector Art'],
    overview: 'Graphic Designers build the visual voice of modern brands, from iconic logos to packaging on store shelves and dynamic digital billboard campaigns.',
    keyResponsibilities: ['Design logo marks, brand guideline decks, and style guides', 'Produce digital banners, editorial layouts, and packaging', 'Collaborate with marketing teams to drive visual campaigns', 'Prepare print-ready vector files with bleed and spot colors'],
    industries: ['Advertising', 'Publishing', 'Consumer Brands', 'Fashion', 'Media Agencies'],
    pros: ['High artistic freedom', 'Tangible printed and digital portfolio', 'Diverse client variety'],
    challenges: ['Subjective client feedback', 'Fast turnaround deadlines'],
    certifications: ['Adobe Certified Professional in Visual Design'],
    projects: ['Full brand identity for sustainable beverage startup', 'Typographic editorial magazine layout', 'Vector illustration icon set'],
    communities: ['Behance', 'AIGA Design Community', 'Dribbble'],
    learningResources: [
      { title: 'Thinking with Type (Ellen Lupton)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'CreativeLive Graphic Design Courses', type: 'Course', url: 'https://creativelive.com', free: false }
    ],
    relatedCareers: ['ui_ux_designer', 'animator', 'fashion_designer', 'photographer']
  },
  {
    id: 'animator',
    title: '3D Animator & Motion Designer',
    category: 'Creative & Design',
    tagline: 'Bringing characters, worlds & motion graphics to life with dynamic timing',
    description: 'Animators and Motion Designers use 3D and 2D software to breathe life, motion, and emotion into characters, cinematic visual effects, and kinetic user interface micro-interactions.',
    suitability: 89,
    whyItMatches: 'Your spatial visualization, appreciation for timing and physics, and storytelling flair empower standout animation work.',
    salaryRange: '$62,000 – $130,000 / yr',
    growth: '+16% (Expanding in Games & Cinema)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Visual Motion',
    icon: 'Clapperboard',
    accentColor: 'indigo',
    demandLevel: 'High',
    estimatedLearningTime: '8 – 16 Months',
    requiredSkills: ['Blender / Maya / Cinema 4D', 'After Effects & Motion Graphics', '12 Principles of Animation', 'Rigging & Skinning', 'Keyframe Timing & Weight', 'Lighting & Texturing'],
    overview: 'From blockbuster animated films and video games to tech product launch commercials, animators craft unforgettable visual motion.',
    keyResponsibilities: ['Animate character walk cycles, expressions, and action sequences', 'Rig 3D skeleton meshes for fluid articulation', 'Render lighting, physics simulations, and particle FX', 'Composite motion graphics for commercials and UI'],
    industries: ['Game Studios', 'Film & TV Animation', 'Advertising Agencies', 'Tech Hardware Demos'],
    pros: ['Pure imaginative creation', 'Thriving gaming and virtual production industry', 'Dynamic visual showcase'],
    challenges: ['Time-intensive rendering pipelines', 'Meticulous attention to single frame timing'],
    certifications: ['Autodesk Certified Professional in Maya'],
    projects: ['30-second stylized 3D character action reel', 'Kinetic typography motion commercial', 'Rigged game-ready mascot asset'],
    communities: ['Blender Artists Community', 'Animation Guild', 'r/3Dmodeling'],
    learningResources: [
      { title: 'The Animator’s Survival Kit (Richard Williams)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Blender Guru Donut Tutorial Series', type: 'Video', url: 'https://youtube.com', free: true }
    ],
    relatedCareers: ['video_editor', 'graphic_designer', 'film_director_producer']
  },
  {
    id: 'interior_designer',
    title: 'Interior Designer & Spatial Stylist',
    category: 'Creative & Design',
    tagline: 'Designing functional, harmonious & sustainable living and commercial spaces',
    description: 'Interior Designers plan, organize, and furnish interior environments. They balance architectural ergonomics, acoustic materials, ambient lighting, and bespoke aesthetics to enhance human wellbeing.',
    suitability: 86,
    whyItMatches: 'Your keen sensitivity to ambient environments, color balance, and spatial harmony make interior design a fulfilling craft.',
    salaryRange: '$52,000 – $110,000 / yr',
    growth: '+14% (Commercial & Residential)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Spatial Living',
    icon: 'Home',
    accentColor: 'emerald',
    demandLevel: 'Steady Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['AutoCAD & SketchUp / Revit', 'Spatial Planning & Ergonomics', 'Material & Textile Sourcing', 'Lighting & Color Schematics', 'Building Codes & Accessibility (ADA)', 'Moodboarding & Client Presentation'],
    overview: 'Interior designers shape restaurants, boutique hotels, luxury residences, and corporate offices into transformative sensory spaces.',
    keyResponsibilities: ['Draft dimensional floor plans, elevations, and 3D renderings', 'Source sustainable textiles, bespoke furniture, and fixture packages', 'Coordinate on-site with contractors, electricians, and architects', 'Ensure ADA compliance and life-safety egress standards'],
    industries: ['Hospitality & Resorts', 'Residential Design', 'Commercial Workplaces', 'Retail Experiences'],
    pros: ['Transforming physical environments', 'Strong client relationships', 'High tactile creativity'],
    challenges: ['Managing vendor supply-chain delays', 'Navigating construction site disputes'],
    certifications: ['NCIDQ Certification (National Council for Interior Design Qualification)'],
    projects: ['Modern Scandinavian boutique cafe concept', 'Eco-friendly smart home residential remodel', 'Acoustic-optimized creative agency office'],
    communities: ['ASID (American Society of Interior Designers)', 'Houzz Pro Community', 'r/InteriorDesign'],
    learningResources: [
      { title: 'Interior Design Handbook (Frida Ramstedt)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'SketchUp Official Campus', type: 'Tutorials', url: 'https://learn.sketchup.com', free: true }
    ],
    relatedCareers: ['architect', 'fashion_designer', 'event_manager']
  },
  {
    id: 'photographer',
    title: 'Commercial & Editorial Photographer',
    category: 'Creative & Design',
    tagline: 'Capturing storytelling imagery, studio portraits & evocative landscapes',
    description: 'Photographers master the physics of natural and artificial lighting, camera optics, composition, and digital raw color grading to produce iconic imagery for brands, journalism, and art.',
    suitability: 87,
    whyItMatches: 'Your sharp visual framing, timing intuition, and passion for capturing authentic human and environmental moments shine in photography.',
    salaryRange: '$45,000 – $115,000 / yr',
    growth: '+10% (Commercial, Fashion & Events)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Visual Lens',
    icon: 'Camera',
    accentColor: 'amber',
    demandLevel: 'Steady Demand',
    estimatedLearningTime: '4 – 8 Months',
    requiredSkills: ['Manual Camera Exposure (Aperture/Shutter/ISO)', 'Studio Strobe & Softbox Lighting', 'Adobe Lightroom & Photoshop Retouching', 'Visual Composition & Posing Direction', 'Color Calibration & Print Proofing'],
    overview: 'Photographers travel the globe, collaborate with high-fashion models, capture breaking documentary moments, and direct commercial product campaigns.',
    keyResponsibilities: ['Set up multi-point studio strobe lighting for product and portrait shoots', 'Direct and pose human subjects to evoke genuine emotion', 'Batch curate and color-grade RAW captures in Lightroom', 'Conduct high-end frequency separation skin retouching'],
    industries: ['Fashion & Editorial', 'Advertising', 'Travel & Nature', 'E-Commerce Studios', 'Weddings & Live Events'],
    pros: ['Exciting travel opportunities', 'Instant artistic gratification', 'Diverse freelance autonomy'],
    challenges: ['High upfront camera and lens investment', 'Unpredictable seasonal booking cycles'],
    certifications: ['PPA Certified Professional Photographer (CPP)'],
    projects: ['10-piece editorial studio portrait series', 'Commercial luxury watch advertising photoshoot', 'Environmental documentary photo essay'],
    communities: ['500px', 'r/photography', 'Magnum Photos Workshops'],
    learningResources: [
      { title: 'Light Science & Magic (Fil Hunter)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Strobist Lighting 101 Free Course', type: 'Course', url: 'https://strobist.blogspot.com', free: true }
    ],
    relatedCareers: ['video_editor', 'model_fashion', 'graphic_designer', 'film_director_producer']
  },
  {
    id: 'video_editor',
    title: 'Video Editor & Post-Production Specialist',
    category: 'Creative & Design',
    tagline: 'Cutting narrative rhythm, pacing stories & mastering cinematic color grades',
    description: 'Video Editors assemble raw footage, sound effects, music scores, and color grading to create compelling narrative films, commercials, YouTube series, and television broadcasts.',
    suitability: 91,
    whyItMatches: 'Your sense of storytelling pacing, auditory-visual synchronization, and patience with detail make video editing an ideal match.',
    salaryRange: '$55,000 – $125,000 / yr',
    growth: '+18% (Explosive Digital Video Expansion)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Story Pacing',
    icon: 'Film',
    accentColor: 'violet',
    demandLevel: 'High Demand',
    estimatedLearningTime: '4 – 8 Months',
    requiredSkills: ['Premiere Pro & DaVinci Resolve', 'Color Grading with LUTs & Waveforms', 'Sound Design & Audio Mixing', 'J-Cuts, L-Cuts & Narrative Rhythm', 'Motion Graphics (After Effects)', 'Multi-cam Sync & Proxy Workflows'],
    overview: 'Post-production is where the magic of filmmaking happens. You set the mood, shape comedic timing or heart-wrenching drama, and finalize broadcast-ready color grades.',
    keyResponsibilities: ['Ingest and organize raw footage with proxy workflows', 'Build rough narrative cuts aligned with director vision', 'Color grade log footage using color wheels and scopes in DaVinci Resolve', 'Layer Foley sound effects, ambient beds, and music tracks'],
    industries: ['YouTube & Creator Economy', 'Film & Television', 'Advertising Agencies', 'Documentaries', 'Music Videos'],
    pros: ['Extremely high digital demand', 'Work remotely from any powerful editing rig', 'Direct influence on storytelling impact'],
    challenges: ['Tight broadcast turnaround deadlines', 'Handling large terabyte file libraries'],
    certifications: ['DaVinci Resolve Certified Colorist / Editor', 'Adobe Certified Professional in Premiere Pro'],
    projects: ['Cinematic 3-minute documentary short', 'High-energy commercial trailer with custom sound design', 'Music video with multi-camera sync and stylistic grade'],
    communities: ['r/editors', 'Creative COW', 'Post Cave Discord'],
    learningResources: [
      { title: 'In the Blink of an Eye (Walter Murch)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Blackmagic Design Official Resolve Training', type: 'Video', url: 'https://blackmagicdesign.com', free: true }
    ],
    relatedCareers: ['film_director_producer', 'animator', 'content_creator', 'photographer']
  },
  {
    id: 'writer',
    title: 'Author, Copywriter & Storyteller',
    category: 'Creative & Design',
    tagline: 'Evoking human emotion, drafting prose & shaping persuasive narratives',
    description: 'Writers craft captivating prose, novels, advertising copy, investigative articles, and narrative worldbuilding that inform, move, and inspire millions of readers globally.',
    suitability: 89,
    whyItMatches: 'Your articulate vocabulary, philosophical curiosity, and introspective storytelling drive indicate natural resonance with writing.',
    salaryRange: '$48,000 – $118,000 / yr',
    growth: '+11% (Publishing, Copywriting & Media)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Prose & Lore',
    icon: 'BookOpen',
    accentColor: 'blue',
    demandLevel: 'Moderate to High',
    estimatedLearningTime: '4 – 9 Months',
    requiredSkills: ['Story Arc & Narrative Structure', 'Direct Response & Brand Copywriting', 'Editorial Proofreading & Grammar', 'Character Voice & Dialogue', 'Research & Fact-Checking', 'SEO Content Strategy'],
    overview: 'From bestseller fiction novels and thought leadership essays to high-converting advertising campaigns, words wield transformative power.',
    keyResponsibilities: ['Research topics and conduct insightful background interviews', 'Write compelling first drafts with distinctive tone of voice', 'Edit and refine drafts for flow, rhythm, and clarity', 'Collaborate with literary agents, editors, and marketing strategists'],
    industries: ['Book Publishing', 'Tech Copywriting', 'Journalism & Magazines', 'Screenwriting', 'Gaming Worldbuilding'],
    pros: ['Ultimate remote work flexibility', 'Enduring legacy of published works', 'Intellectual autonomy'],
    challenges: ['Writer’s block & discipline', 'Building initial publication credibility'],
    certifications: ['Copyblogger Certified Content Marketer'],
    projects: ['Published 5-part speculative fiction short story series', 'Full conversion copywriting audit for SaaS brand', 'Long-form investigative cultural essay'],
    communities: ['NaNoWriMo', 'r/writing', 'Substack Writer Community'],
    learningResources: [
      { title: 'On Writing: A Memoir of the Craft (Stephen King)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Bird by Bird (Anne Lamott)', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['content_creator', 'film_director_producer', 'marketing_specialist']
  },
  {
    id: 'content_creator',
    title: 'Digital Content Creator & Media Strategist',
    category: 'Creative & Design',
    tagline: 'Building digital communities, viral formats & omnichannel creator media',
    description: 'Content Creators produce original video, audio, and visual content across YouTube, TikTok, podcasts, and social channels, transforming passionate audiences into thriving digital enterprises.',
    suitability: 92,
    whyItMatches: 'Your charismatic communication, understanding of internet culture, and creative agility position you for top creator success.',
    salaryRange: '$50,000 – $160,000+ / yr',
    growth: '+28% (Hyper-growth Creator Economy)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Creator Economy',
    icon: 'Sparkles',
    accentColor: 'amber',
    demandLevel: 'High Demand',
    estimatedLearningTime: '3 – 6 Months',
    requiredSkills: ['Short-Form & Long-Form Video Production', 'Audience Retention & Hook Engineering', 'Personal Brand Building', 'Sponsorship & Brand Deal Negotiation', 'Community Engagement & Discord/Substack', 'Analytics & Algorithm Optimization'],
    overview: 'Modern creators are modern media companies. You develop ideas, produce content, build deep rapport with fans, and launch your own products.',
    keyResponsibilities: ['Script, film, and edit weekly video releases', 'Analyze YouTube Studio and TikTok audience retention graphs', 'Collaborate with sponsor brands on integrated campaigns', 'Build email newsletters and membership tiers for fans'],
    industries: ['Creator Economy', 'Social Platforms', 'Entertainment', 'EdTech', 'Consumer Tech'],
    pros: ['Complete creative ownership', 'Unlimited audience reach and revenue scale', 'Fun and dynamic day-to-day variety'],
    challenges: ['Algorithm volatility and platform changes', 'Burnout risk without disciplined boundaries'],
    certifications: ['YouTube Creator Academy Certification'],
    projects: ['10,000-subscriber YouTube channel with consistent cadence', 'Viral TikTok educational series reaching 1M views', 'Paid community newsletter with premium digital drops'],
    communities: ['Creator Hooks', 'VidCon Community', 'r/NewTubers'],
    learningResources: [
      { title: 'The YouTube Formula (Derral Eves)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Think Media YouTube Strategy Masterclass', type: 'Video', url: 'https://youtube.com', free: true }
    ],
    relatedCareers: ['entertainment_media_host', 'video_editor', 'marketing_specialist', 'writer']
  },

  // BUSINESS & MANAGEMENT (6 Careers)
  {
    id: 'entrepreneur',
    title: 'Startup Founder & Entrepreneur',
    category: 'Business & Management',
    tagline: 'Launching ventures, innovating products & scaling market solutions',
    description: 'Entrepreneurs identify unmet market needs, assemble top talent, raise venture capital, and build innovative companies that disrupt industries and solve global challenges.',
    suitability: 93,
    whyItMatches: 'Your risk appetite, strategic drive, resourcefulness, and ambition make startup venture leadership a powerful path.',
    salaryRange: '$60,000 – $250,000+ (Equity Driven)',
    growth: '+18% (Venture & Small Business Innovation)',
    difficulty: 'High',
    rating: '4.9',
    badge: 'Visionary Leader',
    icon: 'TrendingUp',
    accentColor: 'emerald',
    demandLevel: 'High Impact',
    estimatedLearningTime: '6 – 18 Months',
    requiredSkills: ['Business Model Innovation', 'Venture Capital & Pitching', 'Product-Market Fit Validation', 'Customer Discovery Interviews', 'Financial Unit Economics', 'Talent Hiring & Culture Building'],
    overview: 'Founding a venture lets you turn bold visions into market reality, creating jobs and engineering products that change how society lives and works.',
    keyResponsibilities: ['Define company vision and go-to-market strategy', 'Pitch angel investors and venture capital funds', 'Recruit and motivate a world-class founding team', 'Analyze burn rate, customer acquisition cost (CAC), and LTV'],
    industries: ['Tech Startups', 'E-Commerce', 'CleanTech', 'Consumer Goods', 'Social Ventures'],
    pros: ['Immense financial upside through equity', 'Total autonomy over mission and culture', 'Exciting, fast-paced problem solving'],
    challenges: ['High financial risk during early stages', 'Navigating relentless uncertainty and setbacks'],
    certifications: ['Y Combinator Startup School Graduate'],
    projects: ['MVP launch with 100 paying pilot customers', 'Venture pitch deck with financial 3-year model', 'Customer discovery survey across 200 industry stakeholders'],
    communities: ['Y Combinator Startup School', 'Indie Hackers', 'Product Hunt'],
    learningResources: [
      { title: 'The Lean Startup (Eric Ries)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Zero to One (Peter Thiel)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'YC Startup School Free Curriculum', type: 'Course', url: 'https://startupschool.org', free: true }
    ],
    relatedCareers: ['product_manager', 'business_manager', 'marketing_specialist', 'financial_analyst']
  },
  {
    id: 'marketing_specialist',
    title: 'Marketing Professional & Brand Strategist',
    category: 'Business & Management',
    tagline: 'Driving user acquisition, viral campaigns & brand equity growth',
    description: 'Marketing Professionals analyze consumer psychology, execute multi-channel growth campaigns, manage brand messaging, and optimize digital funnels to drive revenue.',
    suitability: 90,
    whyItMatches: 'Your blend of human empathy, analytical metric tracking, and creative storytelling makes growth marketing a natural fit.',
    salaryRange: '$60,000 – $135,000 / yr',
    growth: '+19% (Digital Marketing Surge)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Growth Driver',
    icon: 'Megaphone',
    accentColor: 'indigo',
    demandLevel: 'High Demand',
    estimatedLearningTime: '4 – 8 Months',
    requiredSkills: ['Digital Advertising (Meta/Google Ads)', 'Conversion Rate Optimization (CRO)', 'Content & SEO Strategy', 'Marketing Analytics (GA4, Mixpanel)', 'Customer Lifecycle & Email Automation', 'Brand Positioning & Copywriting'],
    overview: 'Marketers bridge products with the people who need them, designing creative campaigns that generate viral buzz and predictable sales pipelines.',
    keyResponsibilities: ['Manage paid digital advertising budgets and optimize ROAS', 'Analyze customer acquisition funnels and cohort retention', 'Coordinate influencer partnerships and press announcements', 'Produce high-converting landing pages and email drips'],
    industries: ['E-Commerce', 'B2B SaaS', 'Consumer Tech', 'Entertainment', 'Fashion Brands'],
    pros: ['Directly measurable impact on business revenue', 'Diverse mix of data analysis and creative campaigns', 'High remote job availability'],
    challenges: ['Fluctuating ad platform algorithms', 'Pressure to meet quarterly acquisition targets'],
    certifications: ['Google Ads & Analytics Certified', 'HubSpot Inbound Marketing Certified'],
    projects: ['Multi-channel ad campaign generating $50k revenue at 4x ROAS', 'SEO content cluster ranking top 3 on Google for 10 keywords', 'Email marketing automation sequence with 35% open rate'],
    communities: ['Reforge Community', 'GrowthHackers', 'r/marketing'],
    learningResources: [
      { title: 'Building a StoryBrand (Donald Miller)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'HubSpot Academy Inbound Course', type: 'Course', url: 'https://academy.hubspot.com', free: true }
    ],
    relatedCareers: ['content_creator', 'entrepreneur', 'product_manager', 'ui_ux_designer']
  },
  {
    id: 'financial_analyst',
    title: 'Financial Analyst & Investment Planner',
    category: 'Business & Management',
    tagline: 'Evaluating capital investments, fiscal risk & corporate valuations',
    description: 'Financial Analysts analyze market trends, build financial projection models, evaluate corporate balance sheets, and guide investment decisions for corporations, banks, and funds.',
    suitability: 91,
    whyItMatches: 'Your quantitative rigor, methodical data discipline, and strategic mindset position you for high finance success.',
    salaryRange: '$75,000 – $160,000 / yr + bonus',
    growth: '+15% (Corporate & Private Equity)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Capital Strategy',
    icon: 'BadgeDollarSign',
    accentColor: 'emerald',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Financial Modeling (DCF, LBO, 3-Statement)', 'Advanced Excel & Financial Functions', 'Balance Sheet & Cash Flow Analysis', 'Corporate Valuation Methodologies', 'SQL & Financial Data Analytics', 'Investment Risk Assessment'],
    overview: 'Financial Analysts inform major capital allocation choices — evaluating mergers, acquisitions, stock valuations, and corporate budget forecasting.',
    keyResponsibilities: ['Build 3-statement financial models and discounted cash flow forecasts', 'Evaluate historical variance between budgeted vs actual performance', 'Present quarterly investment memos to executive leadership', 'Monitor macroeconomic interest rates and industry competitors'],
    industries: ['Investment Banking', 'Venture Capital', 'Corporate Finance', 'Asset Management', 'Real Estate Funds'],
    pros: ['High compensation with significant performance bonuses', 'Steep learning curve in corporate mechanics', 'Prestigious career trajectory'],
    challenges: ['Demanding work hours during deal cycles', 'High precision requirement with zero tolerance for math errors'],
    certifications: ['CFA (Chartered Financial Analyst) Level I/II/III', 'FMVA (Financial Modeling & Valuation Analyst)'],
    projects: ['Comprehensive Discounted Cash Flow valuation of Apple (AAPL)', '3-Statement dynamic corporate budget model in Excel', 'Private equity buyout (LBO) investment memo'],
    communities: ['Wall Street Oasis', 'CFA Institute Community', 'r/FinancialCareers'],
    learningResources: [
      { title: 'Valuation: Measuring and Managing Value of Companies (McKinsey)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Corporate Finance Institute (CFI) Free Essentials', type: 'Course', url: 'https://corporatefinanceinstitute.com', free: true }
    ],
    relatedCareers: ['entrepreneur', 'business_manager', 'ai_ml_engineer', 'lawyer']
  },
  {
    id: 'business_manager',
    title: 'Business Manager & Operations Director',
    category: 'Business & Management',
    tagline: 'Optimizing corporate processes, team logistics & operational efficiency',
    description: 'Business Managers lead organizational operations, streamline operational workflows, manage department budgets, and ensure cross-functional teams deliver on company goals.',
    suitability: 87,
    whyItMatches: 'Your organizational clarity, leadership presence, and pragmatic problem-solving make business management a great fit.',
    salaryRange: '$70,000 – $145,000 / yr',
    growth: '+14% (Corporate Operations)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Operational Lead',
    icon: 'Briefcase',
    accentColor: 'slate',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Operational Workflow Optimization', 'P&L Budget Management', 'Cross-Functional Team Leadership', 'Agile & Scrum Project Governance', 'Performance KPI Tracking', 'Vendor & Contract Negotiation'],
    overview: 'Operations and business managers are the heartbeat of thriving organizations, making sure strategy transforms into seamless day-to-day execution.',
    keyResponsibilities: ['Oversee departmental budget allocation and resource utilization', 'Streamline cross-team operational workflows to reduce friction', 'Track and report quarterly OKRs to executive leadership', 'Resolve operational bottlenecks and manage supplier relationships'],
    industries: ['Enterprise Corporations', 'Logistics & Supply Chain', 'Healthcare Systems', 'Retail Chains', 'Tech Operations'],
    pros: ['Broad versatility across every industry sector', 'High leadership visibility within executive teams', 'Direct authority over projects'],
    challenges: ['Balancing conflicting departmental priorities', 'Managing change resistance during workflow pivots'],
    certifications: ['Project Management Professional (PMP)', 'Six Sigma Green / Black Belt'],
    projects: ['Standard Operating Procedure (SOP) manual for 50-person department', 'Cost reduction audit identifying $100k in annual vendor savings', 'Company-wide OKR rollout and dashboard tracking system'],
    communities: ['PMI (Project Management Institute)', 'Harvard Business Review Forum', 'r/business'],
    learningResources: [
      { title: 'The Goal: A Process of Ongoing Improvement (Eliyahu Goldratt)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Coursera Project Management Specialization', type: 'Course', url: 'https://coursera.org', free: false }
    ],
    relatedCareers: ['product_manager', 'entrepreneur', 'hr_specialist', 'event_manager']
  },
  {
    id: 'product_manager',
    title: 'Product Manager',
    category: 'Business & Management',
    tagline: 'Leading product vision, user requirements & engineering execution',
    description: 'Product Managers sit at the intersection of technology, design, and business. They define the "why, what, and when" of software products, guiding engineering and design teams to build features that delight users.',
    suitability: 94,
    whyItMatches: 'Your holistic thinking, empathy for customer needs, and strategic communication make product management an extraordinary match.',
    salaryRange: '$90,000 – $190,000 / yr',
    growth: '+24% (Very High Tech Demand)',
    difficulty: 'Moderate to High',
    rating: '4.9',
    badge: 'Product Visionary',
    icon: 'Layers',
    accentColor: 'blue',
    demandLevel: 'Very High',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Product Strategy & Roadmap Planning', 'User Story & PRD Specification Writing', 'Data Analytics (SQL, Amplitude, Mixpanel)', 'Agile Sprint Facilitation', 'Customer Discovery & Empathy Mapping', 'Stakeholder Alignment'],
    overview: 'As the "mini-CEO" of a feature or product line, product managers align engineers, designers, sales teams, and executives around a compelling vision.',
    keyResponsibilities: ['Author comprehensive Product Requirements Documents (PRDs)', 'Prioritize product backlog based on customer value and business impact', 'Lead sprint grooming and kickoff meetings with software engineers', 'Measure post-launch metrics like activation, retention, and churn'],
    industries: ['B2B SaaS', 'Consumer Mobile Apps', 'Fintech', 'Autonomous Tech', 'Healthcare Apps'],
    pros: ['High strategic impact on company success', 'Collaborative and varied daily work', 'Exceptional compensation and career path to CEO/CPO'],
    challenges: ['Responsibility for product outcome without direct authority over engineers', 'Juggling competing stakeholder demands'],
    certifications: ['Pragmatic Institute Certified Product Manager', 'Product School Product Management Certificate'],
    projects: ['Detailed PRD and wireframe spec for collaborative document feature', 'Complete product tear-down and strategy analysis of Notion/Spotify', 'User onboarding funnel optimization reducing churn by 18%'],
    communities: ['Mind the Product', 'Product Coalition', 'Lenny’s Newsletter Community'],
    learningResources: [
      { title: 'Inspired: How to Create Tech Products Customers Love (Marty Cagan)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Lenny’s Product Management Podcast & Newsletter', type: 'Articles', url: 'https://lennysnewsletter.com', free: true }
    ],
    relatedCareers: ['ui_ux_designer', 'software_engineer', 'entrepreneur', 'business_manager']
  },
  {
    id: 'hr_specialist',
    title: 'Human Resources Professional & People Lead',
    category: 'Business & Management',
    tagline: 'Fostering talent culture, recruitment & employee organizational growth',
    description: 'Human Resources Professionals champion organizational culture, recruit top talent, manage competitive benefits packages, and mediate workplace relationships to build high-performing teams.',
    suitability: 88,
    whyItMatches: 'Your interpersonal warmth, ethical fairness, and talent for resolving conflicts make people operations a rewarding discipline.',
    salaryRange: '$55,000 – $120,000 / yr',
    growth: '+13% (Steady Corporate Demand)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'People Culture',
    icon: 'Users',
    accentColor: 'purple',
    demandLevel: 'Steady Demand',
    estimatedLearningTime: '4 – 9 Months',
    requiredSkills: ['Full-Cycle Talent Recruitment', 'Employee Relations & Conflict Resolution', 'Compensation & Benefits Strategy', 'Onboarding & Training Program Design', 'Labor Law & Compliance (EEOC, FLSA)', 'HRIS Software (Workday, BambooHR)'],
    overview: 'People operations professionals shape company culture, ensure fair and inclusive hiring, and nurture employees throughout their career journeys.',
    keyResponsibilities: ['Source, screen, and interview candidates for high-priority vacancies', 'Facilitate employee performance review cycles and manager feedback', 'Design workplace wellness, equity, and inclusion initiatives', 'Handle employee grievances with confidentiality and empathy'],
    industries: ['Technology & Startups', 'Healthcare Organizations', 'Financial Institutions', 'Global Corporations', 'Non-Profits'],
    pros: ['Directly helping individuals advance their careers', 'Shaping positive workplace cultures', 'Stable corporate career opportunities'],
    challenges: ['Navigating difficult personnel terminations', 'Balancing employee advocacy with corporate legal interests'],
    certifications: ['SHRM-CP (Society for Human Resource Management Certified Professional)', 'PHR (Professional in Human Resources)'],
    projects: ['Comprehensive 90-day employee onboarding framework', 'Structured behavioral interview rubric for technical roles', 'Remote workplace culture and engagement program'],
    communities: ['SHRM Community', 'r/humanresources', 'People Ops Leaders Slack'],
    learningResources: [
      { title: 'Work Rules! (Laszlo Bock, Former Google VP of People)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'SHRM Free Resources & Employment Law Guides', type: 'Docs', url: 'https://shrm.org', free: true }
    ],
    relatedCareers: ['career_counselor', 'counselor', 'business_manager', 'teacher']
  },

  // EDUCATION & PEOPLE (5 Careers)
  {
    id: 'teacher',
    title: 'Teacher & Educator',
    category: 'Education & People',
    tagline: 'Inspiring curious minds, structuring knowledge & mentoring students',
    description: 'Teachers educate, inspire, and mentor students across foundational subjects. They design interactive curricula, assess student understanding, and cultivate lifelong curiosity.',
    suitability: 91,
    whyItMatches: 'Your joy in explaining concepts, patient mentorship, and social responsibility make education a profound calling.',
    salaryRange: '$48,000 – $95,000 / yr + benefits',
    growth: '+12% (Continuous Need)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Lifelong Mentor',
    icon: 'GraduationCap',
    accentColor: 'indigo',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Curriculum & Lesson Plan Design', 'Classroom Management & Engagement', 'Differentiated Learning Strategies', 'Educational Technology (Canvas, Google Classroom)', 'Student Assessment & Formative Feedback', 'Parent-Teacher Communication'],
    overview: 'Educators ignite curiosity in young minds, helping students discover their passions and acquire foundational skills for a lifetime.',
    keyResponsibilities: ['Create engaging daily lesson plans that address diverse learning styles', 'Evaluate student homework, projects, and exams with constructive feedback', 'Maintain an encouraging, disciplined, and inclusive classroom environment', 'Collaborate with school counselors and parents on student growth'],
    industries: ['K-12 Public & Private Schools', 'Universities & Colleges', 'EdTech & Online Academies', 'International Schools'],
    pros: ['Immeasurable positive impact on young lives', 'Structured academic calendar and seasonal breaks', 'Deeply rewarding sense of purpose'],
    challenges: ['Administrative grading outside classroom hours', 'Navigating standardized testing pressures'],
    certifications: ['State Teaching License / Credential', 'National Board Certification (NBPTS)'],
    projects: ['Semester-long project-based science and storytelling unit', 'Interactive digital gamified learning module on Kahoot/Quizlet', 'Classroom inclusion guide for neurodivergent learners'],
    communities: ['Edutopia Community', 'National Education Association (NEA)', 'r/Teachers'],
    learningResources: [
      { title: 'Teach Like a Champion 3.0 (Doug Lemov)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Edutopia Free Evidence-Based Teaching Articles', type: 'Articles', url: 'https://edutopia.org', free: true }
    ],
    relatedCareers: ['career_counselor', 'psychologist', 'writer', 'social_worker']
  },
  {
    id: 'psychologist',
    title: 'Psychologist & Behavioral Specialist',
    category: 'Education & People',
    tagline: 'Decoding cognitive patterns, human behavior & emotional wellness',
    description: 'Psychologists study cognitive, emotional, and social processes. They conduct clinical assessments, apply psychotherapy modalities, and help individuals overcome trauma and anxiety.',
    suitability: 93,
    whyItMatches: 'Your deep psychological curiosity, emotional intelligence, and analytical empathy align directly with psychological practice.',
    salaryRange: '$80,000 – $150,000 / yr',
    growth: '+14% (High Mental Health Demand)',
    difficulty: 'Challenging (Advanced Degree)',
    rating: '4.9',
    badge: 'Mind & Behavior',
    icon: 'Brain',
    accentColor: 'purple',
    demandLevel: 'Very High',
    estimatedLearningTime: '12 – 24 Months',
    requiredSkills: ['Cognitive Behavioral Therapy (CBT) Frameworks', 'Psychological Diagnostic Criteria (DSM-5)', 'Active Empathetic Listening', 'Psychometric Assessment & Testing', 'Clinical Case Formulation & Notes', 'Ethical Confidentiality Standards'],
    overview: 'Psychologists empower individuals to heal psychological wounds, develop emotional resilience, and unlock their authentic potential.',
    keyResponsibilities: ['Conduct clinical intake evaluations and psychometric diagnostic tests', 'Deliver evidence-based psychotherapy sessions (CBT, ACT, Psychodynamic)', 'Formulate personalized treatment plans with measurable behavioral goals', 'Publish empirical research on cognitive processing and emotional regulation'],
    industries: ['Private Practice', 'Hospitals & Medical Centers', 'Universities & Research Labs', 'Corporate Wellness'],
    pros: ['Transformative positive impact on patients’ lives', 'Fascinating, deeply meaningful intellectual work', 'High autonomy in private practice'],
    challenges: ['Risk of secondary traumatic stress and emotional fatigue', 'Rigorous doctoral and licensure requirements'],
    certifications: ['Licensed Clinical Psychologist (PsyD / PhD)', 'ABPP Board Certification'],
    projects: ['Comprehensive empirical research paper on anxiety intervention outcomes', 'Structured 8-week mindfulness and CBT workbook', 'Community workshop on adolescent emotional resilience'],
    communities: ['American Psychological Association (APA)', 'r/psychology', 'Psychology Today Network'],
    learningResources: [
      { title: 'Man’s Search for Meaning (Viktor Frankl)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'The Body Keeps the Score (Bessel van der Kolk)', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['counselor', 'social_worker', 'doctor', 'career_counselor']
  },
  {
    id: 'counselor',
    title: 'Mental Health Counselor',
    category: 'Education & People',
    tagline: 'Guiding emotional healing, relationship growth & personal resilience',
    description: 'Mental Health Counselors provide confidential support and therapeutic strategies to individuals, couples, and families navigating grief, life transitions, depression, and relationship distress.',
    suitability: 92,
    whyItMatches: 'Your patient presence, compassionate listening, and desire to help others heal make counseling an exceptional fit.',
    salaryRange: '$52,000 – $105,000 / yr',
    growth: '+22% (Surging Need for Therapy)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Emotional Care',
    icon: 'Heart',
    accentColor: 'rose',
    demandLevel: 'Very High',
    estimatedLearningTime: '8 – 18 Months',
    requiredSkills: ['Person-Centered Therapeutic Technique', 'Crisis De-escalation & Safety Planning', 'Grief & Trauma Counseling', 'Family Systems Therapy', 'Confidential Documentation & Ethics', 'Mindfulness & Grounding Techniques'],
    overview: 'Counselors build safe, non-judgmental spaces where people unburden their pain, gain self-awareness, and rebuild fulfilling lives.',
    keyResponsibilities: ['Facilitate 50-minute individual and family counseling sessions', 'Develop personalized coping toolkits for anxiety and stress management', 'Conduct suicide risk assessments and safety protocols when needed', 'Maintain secure and HIPAA-compliant clinical progress notes'],
    industries: ['Community Clinics', 'Outpatient Centers', 'Telehealth Platforms', 'Schools & Universities', 'Private Practice'],
    pros: ['Deeply fulfilling human connections', 'Rapidly growing telehealth flexibility', 'Immediate observable healing in clients'],
    challenges: ['Navigating emotional burnout and boundaries', 'Managing emergency crisis calls'],
    certifications: ['Licensed Professional Counselor (LPC / LMHC)', 'NCC (National Certified Counselor)'],
    projects: ['Interactive mindfulness toolkit for acute panic management', '10-session relationship communication therapy curriculum', 'Community support group syllabus for grief recovery'],
    communities: ['American Counseling Association (ACA)', 'r/therapists', 'Open Path Collective'],
    learningResources: [
      { title: 'On Becoming a Person (Carl Rogers)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Counseling Today Magazine Articles', type: 'Articles', url: 'https://ct.counseling.org', free: true }
    ],
    relatedCareers: ['psychologist', 'social_worker', 'career_counselor', 'teacher']
  },
  {
    id: 'social_worker',
    title: 'Community Social Worker',
    category: 'Education & People',
    tagline: 'Advocating for vulnerable communities, social equity & family stability',
    description: 'Social Workers connect vulnerable families, children, and elderly citizens with vital housing, medical, and psychological resources. They advocate for systemic justice and empower marginalized populations.',
    suitability: 89,
    whyItMatches: 'Your passion for social justice, empathy for the underprivileged, and on-the-ground action make social work a deeply meaningful career.',
    salaryRange: '$50,000 – $92,000 / yr',
    growth: '+16% (Strong Community Need)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Social Advocacy',
    icon: 'HandHeart',
    accentColor: 'teal',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Case Management & Needs Assessment', 'Community Resource Navigation', 'Child & Family Welfare Advocacy', 'Crisis Intervention & Mediation', 'Empathy & Cultural Humility', 'Public Assistance Regulations'],
    overview: 'Social workers are the frontline guardians of community welfare, fighting against homelessness, child neglect, and healthcare disparities.',
    keyResponsibilities: ['Conduct home visits and assess family living conditions and safety', 'Connect clients with food assistance, housing shelters, and healthcare', 'Advocate for clients in family court proceedings and welfare reviews', 'Coordinate with police, doctors, and schools to safeguard at-risk youth'],
    industries: ['Child Welfare Agencies', 'Hospitals & Hospice Care', 'Community Non-Profits', 'Veterans Affairs', 'Correctional Facilities'],
    pros: ['Directly protecting vulnerable human beings', 'Unshakable purpose and community impact', 'Varied, active fieldwork'],
    challenges: ['Under-resourced public systems', 'Emotionally heavy cases requiring strong self-care'],
    certifications: ['Licensed Clinical Social Worker (LCSW)', 'NASW Social Work Credential'],
    projects: ['Comprehensive community housing resource portal', 'Youth mentorship and anti-truancy intervention program', 'Senior citizen food security and wellness initiative'],
    communities: ['National Association of Social Workers (NASW)', 'r/socialwork', 'Social Work Action Network'],
    learningResources: [
      { title: 'Days in the Lives of Social Workers (Linda May Grobman)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'NASW Code of Ethics Official Document', type: 'Docs', url: 'https://socialworkers.org', free: true }
    ],
    relatedCareers: ['counselor', 'psychologist', 'civil_services', 'lawyer']
  },
  {
    id: 'career_counselor',
    title: 'Career Counselor & Talent Advisor',
    category: 'Education & People',
    tagline: 'Guiding career transitions, discovering strengths & opening doors',
    description: 'Career Counselors help students and professionals discover their vocational passions, craft winning resumes, master interviews, and navigate rewarding career trajectories.',
    suitability: 91,
    whyItMatches: 'Your enthusiasm for personal growth, career discovery, and strategic guidance aligns perfectly with career counseling.',
    salaryRange: '$52,000 – $105,000 / yr',
    growth: '+15% (Higher Ed & Private Coaching)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Career Navigator',
    icon: 'Compass',
    accentColor: 'indigo',
    demandLevel: 'High Demand',
    estimatedLearningTime: '4 – 8 Months',
    requiredSkills: ['Career Diagnostic Assessments (Holland Code/MBTI)', 'Resume & LinkedIn Optimization', 'Behavioral Mock Interview Coaching', 'Job Market & Industry Trend Analysis', 'Salary Negotiation Tactics', 'Active Mentorship'],
    overview: 'Career coaches transform career confusion into focused clarity, unlocking the potential inside students and professionals.',
    keyResponsibilities: ['Administer and interpret career aptitude diagnostics and interests', 'Review and revamp client resumes and portfolio presentations', 'Conduct live mock behavioral and case interview drills', 'Host career readiness workshops at universities and online bootcamps'],
    industries: ['University Career Centers', 'Executive Coaching Agencies', 'EdTech Platforms', 'Corporate Talent Outplacement'],
    pros: ['Watching clients land life-changing dream jobs', 'High satisfaction and gratitude from students', 'Flexible private coaching model'],
    challenges: ['Keeping up with constantly changing job markets and AI recruitment tools', 'Managing client job-search anxiety'],
    certifications: ['Certified Career Counselor (CCC)', 'Global Career Development Facilitator (GCDF)'],
    projects: ['Complete university student career discovery roadmap', 'Comprehensive tech resume and LinkedIn optimization masterclass', 'Interactive salary negotiation workbook with email scripts'],
    communities: ['NCDA (National Career Development Association)', 'r/careerguidance', 'LinkedIn Career Coaches Hub'],
    learningResources: [
      { title: 'What Color Is Your Parachute? (Richard N. Bolles)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'NCDA Career Development Resources', type: 'Articles', url: 'https://ncda.org', free: true }
    ],
    relatedCareers: ['hr_specialist', 'teacher', 'counselor', 'psychologist']
  },

  // SCIENCE & RESEARCH (4 Careers)
  {
    id: 'research_scientist',
    title: 'Research Scientist',
    category: 'Science & Research',
    tagline: 'Conducting foundational experiments, testing hypotheses & expanding human knowledge',
    description: 'Research Scientists design and conduct controlled laboratory experiments, analyze empirical data, formulate theoretical models, and publish peer-reviewed papers that push the frontiers of physics, chemistry, and computation.',
    suitability: 92,
    whyItMatches: 'Your intellectual rigor, empirical curiosity, and love for discovering underlying laws of nature make research science a great fit.',
    salaryRange: '$85,000 – $170,000 / yr',
    growth: '+14% (Academic & Corporate R&D)',
    difficulty: 'Challenging',
    rating: '4.9',
    badge: 'Frontier Discovery',
    icon: 'Microscope',
    accentColor: 'cyan',
    demandLevel: 'High Demand',
    estimatedLearningTime: '12 – 24 Months',
    requiredSkills: ['Experimental Design & Control Variables', 'Statistical Data Analysis (R / Python / MATLAB)', 'Peer-Reviewed Scientific Writing', 'Laboratory Equipment Mastery', 'Hypothesis Formulation', 'Grant Proposal Writing'],
    overview: 'From uncovering quantum phenomena to engineering novel battery chemistries, research scientists pioneer the technologies of tomorrow.',
    keyResponsibilities: ['Formulate rigorous scientific hypotheses and experimental protocols', 'Operate spectrophotometers, electron microscopes, and high-precision sensors', 'Analyze multi-variable experimental datasets using statistical models', 'Write grant proposals to secure funding and author academic journal papers'],
    industries: ['National Research Laboratories', 'University Institutes', 'Pharmaceutical Giants', 'Advanced Materials R&D', 'DeepTech Startups'],
    pros: ['Working on genuine scientific breakthroughs', 'High intellectual prestige and publication citations', 'Collaboration with global scientific leaders'],
    challenges: ['Long experiment timelines and grant funding competition', 'Navigating peer review publication cycles'],
    certifications: ['Doctorate / Master of Science Credentials'],
    projects: ['Published peer-reviewed paper on nanomaterial thermal conductivity', 'Automated laboratory data collection pipeline in Python', 'Research grant proposal awarded $150k in scientific funding'],
    communities: ['ResearchGate', 'Nature & Science Journals', 'r/labrats'],
    learningResources: [
      { title: 'The Structure of Scientific Revolutions (Thomas Kuhn)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'MIT OpenCourseWare Physics & Chemistry', type: 'Course', url: 'https://ocw.mit.edu', free: true }
    ],
    relatedCareers: ['biotechnologist', 'medical_researcher', 'environmental_scientist', 'ai_ml_engineer']
  },
  {
    id: 'biotechnologist',
    title: 'Biotechnologist & Genetic Engineer',
    category: 'Science & Research',
    tagline: 'Editing genomes, engineering cellular systems & developing biotherapies',
    description: 'Biotechnologists leverage biological organisms, molecular biology, and CRISPR gene editing to create life-saving pharmaceuticals, drought-resistant agricultural crops, and sustainable biofuels.',
    suitability: 93,
    whyItMatches: 'Your fascination with molecular life, genetics, and biotechnology solutions matches the forefront of biotech innovation.',
    salaryRange: '$75,000 – $155,000 / yr',
    growth: '+18% (Biopharma & Synthetic Biology)',
    difficulty: 'Challenging',
    rating: '4.9',
    badge: 'Synthetic Biology',
    icon: 'Dna',
    accentColor: 'emerald',
    demandLevel: 'Very High',
    estimatedLearningTime: '9 – 18 Months',
    requiredSkills: ['CRISPR-Cas9 & Gene Editing', 'Recombinant DNA & Molecular Cloning', 'Cell Culture & Fermentation Bioreactors', 'Bioinformatics & DNA Sequencing Tools (BLAST)', 'Protein Purification & Gel Electrophoresis', 'GLP / GMP Quality Compliance'],
    overview: 'Biotechnology is rewriting the code of living systems, curing hereditary genetic disorders, and engineering sustainable biological factories.',
    keyResponsibilities: ['Design plasmid vectors and execute recombinant DNA cloning', 'Culture mammalian, bacterial, and fungal cell lines in sterile bioreactors', 'Analyze genomic sequencing data using computational bioinformatics', 'Validate protein expression and purity using HPLC and Western blot'],
    industries: ['Biotechnology Startups', 'Pharmaceutical Companies', 'Agricultural Tech', 'Industrial Bio-Manufacturing'],
    pros: ['Curing genetic diseases and revolutionizing medicine', 'Rapidly booming venture-backed industry', 'Deep intellectual fulfillment'],
    challenges: ['Strict regulatory approval processes (FDA/EMA)', 'Complex and sensitive cell-culture contamination risks'],
    certifications: ['BioPharma GMP Compliance Certificate', 'ASBMB Molecular Biologist Certificate'],
    projects: ['CRISPR guide RNA design for targeted gene knockout', 'Bioinformatics pipeline analyzing cancer mutation frequencies', 'Recombinant protein expression and purification protocol'],
    communities: ['iGEM Synthetic Biology Hub', 'SynBioBeta', 'r/bioinformatics'],
    learningResources: [
      { title: 'Molecular Biology of the Cell (Alberts)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'NCBI Bioinformatics Tutorials & Databases', type: 'Docs', url: 'https://ncbi.nlm.nih.gov', free: true }
    ],
    relatedCareers: ['medical_researcher', 'research_scientist', 'doctor', 'environmental_scientist']
  },
  {
    id: 'environmental_scientist',
    title: 'Environmental Scientist & Conservationist',
    category: 'Science & Research',
    tagline: 'Protecting ecosystems, analyzing climate data & restoring natural habitats',
    description: 'Environmental Scientists study the earth’s natural systems, monitor air and water pollution, analyze climate change impacts, and design sustainable policies to preserve ecosystems.',
    suitability: 90,
    whyItMatches: 'Your passion for nature, planetary conservation, and ecological sustainability makes environmental science a deeply fulfilling career.',
    salaryRange: '$58,000 – $120,000 / yr',
    growth: '+15% (Clean Energy & Climate Transition)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Planet Guardian',
    icon: 'Trees',
    accentColor: 'green',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Environmental Impact Assessments (EIA)', 'GIS Spatial Mapping (ArcGIS / QGIS)', 'Water & Soil Chemical Sampling', 'Ecology & Biodiversity Monitoring', 'Climate Modeling & Carbon Accounting', 'Environmental Law (EPA / Clean Water Act)'],
    overview: 'Environmental scientists work in forests, coastal wetlands, and research stations to protect ecosystems and safeguard clean water and air for future generations.',
    keyResponsibilities: ['Collect and test environmental soil, air, and watershed samples', 'Generate GIS heatmaps of deforestation and wildlife migration corridors', 'Author Environmental Impact Assessment (EIA) reports for new infrastructure', 'Advise government bodies on renewable energy and conservation policy'],
    industries: ['Environmental Consulting Agencies', 'Government Parks & Wildlife', 'Renewable Energy Companies', 'Conservation Non-Profits'],
    pros: ['Working outdoors in natural landscapes', 'Tangible contribution to combating climate change', 'Increasing corporate sustainability demand'],
    challenges: ['Navigating political resistance to environmental regulations', 'Physically demanding outdoor fieldwork in extreme weather'],
    certifications: ['Certified Environmental Scientist (CES)', 'GIS Professional (GISP) Certification'],
    projects: ['GIS spatial analysis mapping urban heat island mitigation through tree canopy', 'Watershed chemical contaminant assessment and restoration proposal', 'Corporate carbon footprint baseline audit with reduction roadmap'],
    communities: ['Society for Conservation Biology (SCB)', 'r/environmental_science', 'ESRI GIS User Network'],
    learningResources: [
      { title: 'Silent Spring (Rachel Carson)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Coursera Environmental Science & Climate Change', type: 'Course', url: 'https://coursera.org', free: false }
    ],
    relatedCareers: ['research_scientist', 'biotechnologist', 'policy_analyst', 'architect']
  },
  {
    id: 'medical_researcher',
    title: 'Medical Researcher & Clinical Trial Lead',
    category: 'Science & Research',
    tagline: 'Discovering drug therapies, analyzing epidemiology & clinical trials',
    description: 'Medical Researchers investigate the pathology of human diseases, discover novel pharmaceuticals, design randomized clinical trials, and advance modern medical breakthroughs.',
    suitability: 92,
    whyItMatches: 'Your drive to eradicate illness, rigorous medical curiosity, and laboratory mindset position you for major clinical impact.',
    salaryRange: '$82,000 – $165,000 / yr',
    growth: '+17% (Global Clinical R&D)',
    difficulty: 'Challenging',
    rating: '4.9',
    badge: 'Clinical Vanguard',
    icon: 'Stethoscope',
    accentColor: 'rose',
    demandLevel: 'Very High',
    estimatedLearningTime: '9 – 18 Months',
    requiredSkills: ['Clinical Trial Design & Protocols (Phase I-IV)', 'Epidemiological Statistics (Biostatistics)', 'Oncology & Immunology Pathways', 'Good Clinical Practice (GCP) Standards', 'Medical Manuscript Authoring', 'Patient Safety Monitoring'],
    overview: 'Medical researchers bridge biological discoveries with hospital bedsides, ensuring new cancer treatments and antiviral drugs are safe and effective.',
    keyResponsibilities: ['Design double-blind randomized clinical trial protocols', 'Analyze statistical patient outcomes and adverse reaction profiles', 'Liaise with ethics boards (IRB) and regulatory health bodies (FDA)', 'Present novel clinical findings at international medical symposiums'],
    industries: ['Academic Medical Centers', 'Pharmaceutical Giants', 'Contract Research Organizations (CROs)', 'Public Health Institutes'],
    pros: ['Direct role in saving millions of human lives', 'High intellectual prestige and clinical collaboration', 'Deeply rewarding purpose'],
    challenges: ['Strict regulatory oversight and extensive paperwork', 'Multi-year clinical trial timelines before approval'],
    certifications: ['Certified Clinical Research Professional (CCRP)', 'NIH Clinical Research Training'],
    projects: ['Phase II clinical trial protocol for novel immunotherapy candidate', 'Biostatistical analysis of patient survival curves using R/SPSS', 'Published literature review on mRNA vaccine mechanism efficacy'],
    communities: ['Society of Clinical Research Associates (SOCRA)', 'r/medicine', 'PubMed Central Network'],
    learningResources: [
      { title: 'The Emperor of All Maladies: A Biography of Cancer (Siddhartha Mukherjee)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'NIH Clinical Research Curriculum', type: 'Course', url: 'https://nih.gov', free: true }
    ],
    relatedCareers: ['doctor', 'biotechnologist', 'research_scientist', 'nurse']
  },

  // HEALTHCARE (4 Careers)
  {
    id: 'doctor',
    title: 'Doctor & Medical Physician',
    category: 'Healthcare',
    tagline: 'Diagnosing complex illnesses, saving lives & patient clinical care',
    description: 'Medical Doctors examine patients, diagnose illnesses, prescribe targeted therapies, perform surgical procedures, and provide holistic care to heal human suffering.',
    suitability: 94,
    whyItMatches: 'Your profound empathy, quick clinical decision-making, and passion for human anatomy make medical practice an exceptional calling.',
    salaryRange: '$180,000 – $380,000+ / yr',
    growth: '+15% (Enduring Universal Need)',
    difficulty: 'Extremely High (Medical Degree)',
    rating: '5.0',
    badge: 'Lifesaver',
    icon: 'HeartPulse',
    accentColor: 'rose',
    demandLevel: 'Extremely High',
    estimatedLearningTime: '18 – 36 Months Pre-Med Track',
    requiredSkills: ['Clinical Diagnostic Reasoning', 'Human Anatomy & Physiology', 'Pharmacology & Drug Interactions', 'Emergency Triage & Patient Stabilization', 'Empathetic Bedside Communication', 'Medical Ethics & Patient Confidentiality'],
    overview: 'Being a doctor is one of humanity’s most revered callings. You stand between patients and illness, providing hope and healing during life’s most vulnerable moments.',
    keyResponsibilities: ['Perform physical examinations and interpret lab diagnostics, ECGs, and imaging', 'Formulate accurate differential diagnoses and personalized treatment plans', 'Perform or assist in surgical and procedural interventions', 'Communicate complex medical prognoses clearly and compassionately to families'],
    industries: ['Hospitals & Trauma Centers', 'Private Medical Clinics', 'Specialized Surgery Centers', 'Global Humanitarian Health (MSF)'],
    pros: ['Highest level of patient impact and life preservation', 'Supreme professional respect and excellent compensation', 'Lifelong continuous medical learning'],
    challenges: ['Extremely rigorous multi-year residency training', 'High adrenaline pressure during acute life-threatening emergencies'],
    certifications: ['Medical Doctor (MD / DO) Degree', 'USMLE / Medical Board Certifications'],
    projects: ['Pre-med clinical volunteering and shadow logs (200+ hours)', 'Published clinical case study on rare autoimmune presentation', 'MCAT preparation milestone scoring top 90th percentile'],
    communities: ['American Medical Association (AMA)', 'r/medicalschool', 'Student Doctor Network (SDN)'],
    learningResources: [
      { title: 'First Aid for the USMLE Step 1', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Khan Academy Medicine & Anatomy Series', type: 'Course', url: 'https://khanacademy.org', free: true }
    ],
    relatedCareers: ['nurse', 'physiotherapist', 'medical_researcher', 'nutritionist']
  },
  {
    id: 'nurse',
    title: 'Registered Nurse & Clinical Care Specialist',
    category: 'Healthcare',
    tagline: 'Administering patient care, emergency triage & bedside advocacy',
    description: 'Registered Nurses are the compassionate core of the healthcare system. They administer medications, monitor patient vital signs, assist in operating rooms, and provide critical emotional support.',
    suitability: 91,
    whyItMatches: 'Your compassionate bedside empathy, calm composure under pressure, and clinical vigilance make nursing a stellar match.',
    salaryRange: '$65,000 – $125,000 / yr',
    growth: '+18% (Critical Global Shortage)',
    difficulty: 'Moderate to High',
    rating: '4.9',
    badge: 'Care Guardian',
    icon: 'HeartPulse',
    accentColor: 'teal',
    demandLevel: 'Very High',
    estimatedLearningTime: '8 – 16 Months',
    requiredSkills: ['Patient Vitals & Clinical Assessment', 'Medication Administration & IV Infusions', 'Emergency Resuscitation (BLS / ACLS)', 'Wound Care & Sterile Procedures', 'Electronic Health Records (Epic / Cerner)', 'Patient & Family Health Education'],
    overview: 'Nurses spend more direct time with patients than any other medical professionals, acting as their primary advocate, caregiver, and clinical watchdog.',
    keyResponsibilities: ['Administer oral, IV, and subcutaneous medications following safety protocols', 'Monitor telemetry monitors and alert physicians to sudden clinical declines', 'Perform sterile wound dressing changes and post-operative monitoring', 'Educate patients on home medication regimens and recovery exercises'],
    industries: ['Intensive Care Units (ICU)', 'Emergency Departments', 'Pediatric & Maternity Wards', 'Surgical Centers', 'Travel Nursing'],
    pros: ['Tremendous schedule flexibility (3-day 12-hour shifts)', 'Immense demand and lucrative travel nursing rates', 'Deeply rewarding daily human gratitude'],
    challenges: ['Physically demanding shifts on your feet', 'Emotional toll of patient mortality and family grief'],
    certifications: ['Registered Nurse (RN) License', 'NCLEX-RN Examination', 'BLS / ACLS / PALS Certifications'],
    projects: ['NCLEX-RN comprehensive review question bank mastery', 'Clinical rotation simulation lab documentation and telemetry logs', 'Evidence-based nursing capstone on central-line infection reduction'],
    communities: ['American Nurses Association (ANA)', 'r/nursing', 'AllNurses Community'],
    learningResources: [
      { title: 'Saunders Comprehensive Review for the NCLEX-RN', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'RegisteredNurseRN Free Video Lectures', type: 'Video', url: 'https://youtube.com', free: true }
    ],
    relatedCareers: ['doctor', 'physiotherapist', 'nutritionist', 'social_worker']
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist & Rehabilitation Specialist',
    category: 'Healthcare',
    tagline: 'Restoring physical mobility, biomechanics & injury rehabilitation',
    description: 'Physiotherapists assess muscular, skeletal, and neurological dysfunctions. They prescribe therapeutic exercise regimens, manual joint mobilization, and neuromuscular re-education to restore human movement.',
    suitability: 89,
    whyItMatches: 'Your hands-on body intuition, knowledge of human biomechanics, and passion for physical recovery make physiotherapy a stellar path.',
    salaryRange: '$70,000 – $120,000 / yr',
    growth: '+17% (Aging Population & Sports Medicine)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Mobility Healer',
    icon: 'Activity',
    accentColor: 'amber',
    demandLevel: 'High Demand',
    estimatedLearningTime: '8 – 16 Months',
    requiredSkills: ['Musculoskeletal Biomechanics Assessment', 'Therapeutic Exercise Prescription', 'Manual Therapy & Joint Mobilization', 'Neurological Rehabilitation Techniques', 'Gait Analysis & Postural Correction', 'Pain Science & Ergonomics'],
    overview: 'From professional athletes tearing ACLs to stroke patients relearning to walk, physiotherapists guide people back to strength and physical independence.',
    keyResponsibilities: ['Evaluate joint range of motion, muscle strength, and movement patterns', 'Design progressive resistance and stretching rehabilitation programs', 'Perform soft-tissue manual therapy and spinal/joint mobilizations', 'Educate patients on posture, ergonomics, and sports injury prevention'],
    industries: ['Sports Medicine Clinics', 'Orthopedic Rehabilitation Centers', 'Hospital Inpatient Units', 'Private Physical Therapy Practices'],
    pros: ['Highly hands-on and active work environment', 'Joy in seeing patients regain independence and walk again', 'Regular daytime clinic hours without graveyard shifts'],
    challenges: ['Physically demanding manual therapy on multiple patients daily', 'Keeping unmotivated patients consistent with home exercises'],
    certifications: ['Doctor of Physical Therapy (DPT) License', 'OCS (Orthopedic Clinical Specialist)'],
    projects: ['12-week post-op ACL reconstruction return-to-sport protocol', 'Comprehensive ergonomic workplace assessment guide', 'Stroke recovery functional gait re-training exercise plan'],
    communities: ['American Physical Therapy Association (APTA)', 'r/physicaltherapy', 'Physiopedia Hub'],
    learningResources: [
      { title: 'Therapeutic Exercise: Foundations and Techniques (Kisner & Colby)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Physiopedia Free Clinical Guides', type: 'Docs', url: 'https://physio-pedia.com', free: true }
    ],
    relatedCareers: ['fitness_trainer', 'sports_professional', 'doctor', 'nurse']
  },
  {
    id: 'nutritionist',
    title: 'Clinical Nutritionist & Dietitian',
    category: 'Healthcare',
    tagline: 'Optimizing metabolic health, dietary science & culinary wellness',
    description: 'Nutritionists and Dietitians use nutritional biochemistry and dietary planning to treat chronic metabolic conditions, fuel elite athletic performance, and instill sustainable healthy lifestyle habits.',
    suitability: 88,
    whyItMatches: 'Your fascination with food chemistry, health longevity, and dietary coaching makes nutritional science a fantastic career.',
    salaryRange: '$52,000 – $98,000 / yr',
    growth: '+14% (Wellness & Preventive Health Surge)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Metabolic Health',
    icon: 'Apple',
    accentColor: 'green',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Macronutrient & Micronutrient Biochemistry', 'Medical Nutrition Therapy (MNT)', 'Metabolic & Blood Panel Interpretation', 'Personalized Meal Plan Engineering', 'Behavioral Food Psychology & Counseling', 'Gut Microbiome Science'],
    overview: 'Nutritionists transform food from calories into precision medicine, reversing diabetes, lowering cardiovascular risk, and optimizing athletic output.',
    keyResponsibilities: ['Assess patient dietary intake, food allergies, and metabolic lab markers', 'Design customized, culturally sensitive meal plans with macronutrient targets', 'Counsel patients on overcoming emotional eating patterns and food cravings', 'Deliver group corporate wellness seminars on heart-healthy and anti-inflammatory diets'],
    industries: ['Hospital Clinical Dietetics', 'Sports Nutrition for Pro Teams', 'Private Nutrition Coaching', 'Functional Medicine Clinics', 'Food Product Formulation'],
    pros: ['Empowering patients to transform their health naturally', 'High demand in sports, wellness, and corporate sectors', 'Great freelance and private consulting opportunities'],
    challenges: ['Combatting widespread internet diet myths and fad trends', 'Guiding patients through stubborn behavioral lifestyle resistance'],
    certifications: ['Registered Dietitian Nutritionist (RDN)', 'Certified Nutrition Specialist (CNS)'],
    projects: ['8-week Mediterranean anti-inflammatory meal plan with recipes', 'Nutritional protocol for type-2 diabetes glycemic regulation', 'Sports nutrition macronutrient loading guide for marathon runners'],
    communities: ['Academy of Nutrition and Dietetics', 'r/nutrition', 'Today’s Dietitian Network'],
    learningResources: [
      { title: 'Krause and Mahan’s Food & the Nutrition Care Process', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Harvard T.H. Chan School of Public Health Nutrition Source', type: 'Docs', url: 'https://hsph.harvard.edu/nutritionsource', free: true }
    ],
    relatedCareers: ['chef', 'fitness_trainer', 'doctor', 'physiotherapist']
  },

  // LAW & PUBLIC SERVICE (3 Careers)
  {
    id: 'lawyer',
    title: 'Corporate & Human Rights Lawyer',
    category: 'Law & Public Service',
    tagline: 'Advocating in courtrooms, drafting watertight contracts & defending rights',
    description: 'Lawyers interpret legal statutes, represent clients in civil and criminal litigation, negotiate commercial agreements, and uphold the rule of law and constitutional justice.',
    suitability: 93,
    whyItMatches: 'Your sharp logical argumentation, articulateness under pressure, and ethical standard make the legal profession a powerhouse match.',
    salaryRange: '$95,000 – $225,000+ / yr',
    growth: '+14% (Corporate, IP & Litigation Demand)',
    difficulty: 'Challenging (Law Degree)',
    rating: '4.9',
    badge: 'Legal Defender',
    icon: 'Scale',
    accentColor: 'indigo',
    demandLevel: 'High Demand',
    estimatedLearningTime: '12 – 24 Months Pre-Law / Bar Prep',
    requiredSkills: ['Legal Research (Westlaw / LexisNexis)', 'Statutory Interpretation & Case Precedents', 'Oral Advocacy & Courtroom Argumentation', 'Contract Drafting & Due Diligence', 'Negotiation & Settlement Tactics', 'Legal Brief Writing'],
    overview: 'Whether defending constitutional liberties in supreme courts or structuring billion-dollar corporate mergers, lawyers wield immense influence.',
    keyResponsibilities: ['Conduct deep statutory research on judicial precedents using legal databases', 'Draft watertight commercial contracts, discovery motions, and appeal briefs', 'Represent clients in courtroom trials, hearings, and arbitrations', 'Advise corporate executive boards on regulatory and liability exposure'],
    industries: ['Top Law Firms', 'Corporate In-House Legal', 'Public Defender Offices', 'Human Rights Non-Profits', 'Government Agencies'],
    pros: ['Exceptional compensation and intellectual stature', 'Direct ability to defend justice and protect human rights', 'Mastery over the laws governing society'],
    challenges: ['Extensive document review and high billing hour expectations', 'Intense adversarial courtroom pressure'],
    certifications: ['Juris Doctor (JD) Degree', 'State Bar Examination Admission'],
    projects: ['Appellate moot court brief with oral argument simulation', 'Comprehensive legal due diligence review of tech startup acquisition', 'Pro bono asylum application legal memorandum'],
    communities: ['American Bar Association (ABA)', 'r/LawSchool', 'Legal Cheek Forum'],
    learningResources: [
      { title: 'The Legal Analyst: A Toolkit for Thinking about the Law (Ward Farnsworth)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Oyez.org Supreme Court Audio Archives', type: 'Audio', url: 'https://oyez.org', free: true }
    ],
    relatedCareers: ['civil_services', 'policy_analyst', 'social_worker', 'cybersecurity_analyst']
  },
  {
    id: 'civil_services',
    title: 'Civil Services & Public Administrator',
    category: 'Law & Public Service',
    tagline: 'Administering governance, managing civic infrastructure & public welfare',
    description: 'Civil Servants and Public Administrators manage government agencies, implement public policy, oversee municipal budgets, and ensure public services run with integrity and efficiency.',
    suitability: 89,
    whyItMatches: 'Your public-spirited integrity, strategic administrative leadership, and civic duty position you for high governance impact.',
    salaryRange: '$60,000 – $135,000 / yr + pension',
    growth: '+12% (Stable Public Administration)',
    difficulty: 'Moderate to High',
    rating: '4.7',
    badge: 'Civic Governance',
    icon: 'Landmark',
    accentColor: 'slate',
    demandLevel: 'Steady Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Public Policy Execution & Administration', 'Municipal Budget Allocation', 'Stakeholder & Community Engagement', 'Regulatory Compliance & Auditing', 'Civic Infrastructure Management', 'Crisis & Disaster Management'],
    overview: 'Public administrators serve communities by building transportation systems, managing clean water programs, directing emergency responses, and ensuring equitable civic services.',
    keyResponsibilities: ['Oversee multi-million dollar municipal program budgets', 'Coordinate inter-agency emergency management responses', 'Ensure transparency and ethical compliance across civil contracts', 'Engage local neighborhood councils to address public service needs'],
    industries: ['City & Municipal Governments', 'State & Federal Agencies', 'Foreign Diplomatic Services', 'Public Transit & Port Authorities'],
    pros: ['Unmatched stability and comprehensive government pension benefits', 'Direct responsibility for the welfare of entire cities and nations', 'High public trust'],
    challenges: ['Navigating bureaucratic red tape and administrative delays', 'Public scrutiny and political administration shifts'],
    certifications: ['Master of Public Administration (MPA)', 'Certified Public Manager (CPM)'],
    projects: ['Municipal smart transit routing and budget optimization proposal', 'Public emergency disaster evacuation and shelter protocol', 'Civic open data transparency dashboard plan'],
    communities: ['ASPA (American Society for Public Administration)', 'r/publicadministration', 'GovLoop Network'],
    learningResources: [
      { title: 'Public Administration: Concepts and Cases (Richard Stillman)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'GovLoop Free Government Leadership Guides', type: 'Articles', url: 'https://govloop.com', free: true }
    ],
    relatedCareers: ['policy_analyst', 'lawyer', 'business_manager', 'social_worker']
  },
  {
    id: 'policy_analyst',
    title: 'Public Policy Analyst & Governance Advisor',
    category: 'Law & Public Service',
    tagline: 'Researching social issues, forecasting policy impacts & drafting legislation',
    description: 'Policy Analysts research complex societal problems (healthcare access, energy transition, economic equality), model legislative outcomes with data, and advise lawmakers on effective policy.',
    suitability: 90,
    whyItMatches: 'Your analytical mindset, passion for societal reform, and data-backed research skills align directly with policy advisory.',
    salaryRange: '$65,000 – $130,000 / yr',
    growth: '+14% (Think Tanks & Advisory Firms)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Policy Architect',
    icon: 'FileText',
    accentColor: 'blue',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Econometric Modeling & Quantitative Research', 'Legislative Policy Evaluation', 'Cost-Benefit Analysis (CBA)', 'Whitepaper & Policy Brief Writing', 'Data Visualization (R / Tableau)', 'Stakeholder Coalition Building'],
    overview: 'Policy analysts shape the laws of the future — evaluating the environmental impact of renewable subsidies or designing affordable housing policies.',
    keyResponsibilities: ['Analyze large demographic and economic datasets to identify societal trends', 'Perform cost-benefit analyses on proposed legislative bills', 'Author executive policy briefs for senators, ministers, and think-tank directors', 'Testify at public hearings and policy reform roundtables'],
    industries: ['Think Tanks (Brookings, RAND)', 'Government Legislative Research', 'Global NGOs (World Bank, UN)', 'Corporate Government Affairs'],
    pros: ['Shaping national and global legislation', 'High intellectual rigor and policy debate', 'Collaboration with leading economists and lawmakers'],
    challenges: ['Bridging deep research with polarized political realities', 'Long timelines before policies are enacted into law'],
    certifications: ['Master of Public Policy (MPP)', 'Certified Policy Analyst (CPA)'],
    projects: ['Comprehensive policy brief on clean energy grid modernization incentives', 'Econometric cost-benefit analysis of universal pre-K education', 'Affordable housing zoning reform proposal for municipal council'],
    communities: ['APPAM (Association for Public Policy Analysis and Management)', 'r/publicpolicy', 'RAND Corporation Publications'],
    learningResources: [
      { title: 'A Practical Guide for Policy Analysis: The Eightfold Path (Eugene Bardach)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Brookings Institution Policy Research Papers', type: 'Articles', url: 'https://brookings.edu', free: true }
    ],
    relatedCareers: ['civil_services', 'lawyer', 'research_scientist', 'environmental_scientist']
  },

  // LIFESTYLE & PRACTICAL CAREERS (7 Careers)
  {
    id: 'architect',
    title: 'Architect & Structural Designer',
    category: 'Lifestyle & Practical',
    tagline: 'Designing iconic buildings, sustainable skylines & living spaces',
    description: 'Architects blend structural engineering, aesthetic elegance, and sustainability to design homes, skyscrapers, museums, and public plazas that define human civilization.',
    suitability: 91,
    whyItMatches: 'Your rare blend of mathematical spatial geometry, artistic vision, and tangible construction interest makes architecture an inspiring path.',
    salaryRange: '$75,000 – $150,000 / yr',
    growth: '+14% (Urbanization & Green Architecture)',
    difficulty: 'Challenging',
    rating: '4.9',
    badge: 'Master Builder',
    icon: 'Building2',
    accentColor: 'slate',
    demandLevel: 'High Demand',
    estimatedLearningTime: '9 – 18 Months',
    requiredSkills: ['Revit BIM & AutoCAD', 'Parametric 3D Modeling (Rhino / Grasshopper)', 'Structural Mechanics & Materials Science', 'LEED Sustainable Building Certification', 'Building Codes & Life Safety Egress', 'Architectural Visualization & Render (Lumion)'],
    overview: 'Architects design the physical world we inhabit. You turn empty plots of land into sustainable skyscrapers, modern residences, and cultural landmarks.',
    keyResponsibilities: ['Produce architectural drawing sets, structural sections, and construction documents', 'Model parametric building forms and energy efficiency in BIM software', 'Coordinate structural engineers, MEP consultants, and general contractors', 'Ensure compliance with regional zoning laws, seismic codes, and ADA access'],
    industries: ['Architectural Firms', 'Urban Planning Authorities', 'Real Estate Development', 'Sustainable Green Building'],
    pros: ['Creating enduring physical monuments that last for centuries', 'High artistic and engineering prestige', 'Direct impact on city skylines'],
    challenges: ['Lengthy architectural licensure examinations (ARE 5.0)', 'Managing budget constraints from developers'],
    certifications: ['Registered Architect (RA) License', 'LEED AP (Accredited Professional) Building Design'],
    projects: ['Zero-emission mixed-use community center BIM model in Revit', 'Parametric kinetic facade design in Rhino/Grasshopper', 'Residential passive-solar sustainable home blueprint set'],
    communities: ['American Institute of Architects (AIA)', 'ArchDaily', 'r/architecture'],
    learningResources: [
      { title: 'Towards a New Architecture (Le Corbusier)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'ArchDaily Global Project Showcase', type: 'Articles', url: 'https://archdaily.com', free: true }
    ],
    relatedCareers: ['interior_designer', 'fashion_designer', 'environmental_scientist']
  },
  {
    id: 'fashion_designer',
    title: 'Fashion & Apparel Designer',
    category: 'Lifestyle & Practical',
    tagline: 'Designing haute couture, sustainable apparel & global runway collections',
    description: 'Fashion Designers conceptualize garments, footwear, and accessories. They select sustainable textiles, create pattern drafts, supervise sample manufacturing, and present seasonal collections.',
    suitability: 89,
    whyItMatches: 'Your visual eye for silhouettes, tactile textile intuition, and fashion trend awareness position you for fashion innovation.',
    salaryRange: '$55,000 – $135,000 / yr',
    growth: '+12% (Apparel, Streetwear & Luxury)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Couture Creator',
    icon: 'Sparkles',
    accentColor: 'pink',
    demandLevel: 'Steady Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Garment Pattern Drafting & Draping', 'Textile Selection & Sustainable Fabrics', 'Fashion Illustration (CLO 3D / Illustrator)', 'Garment Construction & Sewing Precision', 'Trend Forecasting (WGSN)', 'Tech Pack Specification Sheets'],
    overview: 'Fashion designers express cultural identity, personality, and art through apparel — from streetwear drops to Paris Fashion Week runways.',
    keyResponsibilities: ['Sketch seasonal collection moodboards and color palettes', 'Create 3D digital garment simulations in CLO 3D', 'Draft technical spec packs with grading and stitch tolerances for factories', 'Direct runway fittings and styling with models'],
    industries: ['Luxury Fashion Houses', 'Contemporary Streetwear Brands', 'Athleisure & Performance Wear', 'Sustainable Apparel Startups'],
    pros: ['Seeing your wearable art worn by people worldwide', 'Thrilling creative runways and fashion weeks', 'Fast-paced artistic expression'],
    challenges: ['Competitive apparel market', 'Managing fast manufacturing lead times'],
    certifications: ['CLO 3D Certified Fashion Designer'],
    projects: ['6-look sustainable capsule collection with tech packs', 'Digital 3D runway presentation rendered in CLO 3D', 'Streetwear brand identity and garment line sheet'],
    communities: ['Council of Fashion Designers of America (CFDA)', 'The Business of Fashion', 'r/femalefashionadvice'],
    learningResources: [
      { title: 'Patternmaking for Fashion Design (Helen Joseph-Armstrong)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Business of Fashion Daily Articles', type: 'Articles', url: 'https://businessoffashion.com', free: true }
    ],
    relatedCareers: ['model_fashion', 'interior_designer', 'graphic_designer', 'photographer']
  },
  {
    id: 'chef',
    title: 'Executive Chef & Culinary Artist',
    category: 'Lifestyle & Practical',
    tagline: 'Mastering flavor chemistry, Michelin gastronomy & kitchen leadership',
    description: 'Chefs master food science, sensory seasoning balance, knife precision, and high-speed kitchen brigade leadership. They design seasonal tasting menus and unforgettable dining experiences.',
    suitability: 92,
    whyItMatches: 'Your hands-on culinary drive, sensory appreciation, and passion for delighting guests make culinary craft a natural calling.',
    salaryRange: '$52,000 – $120,000 / yr',
    growth: '+15% (Fine Dining & Hospitality Expansion)',
    difficulty: 'Challenging (Hands-on)',
    rating: '4.8',
    badge: 'Culinary Master',
    icon: 'UtensilsCrossed',
    accentColor: 'amber',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Knife Precision & Mise en Place', 'Flavor Profiling & Seasoning Balance', 'The Five French Mother Sauces', 'Meat & Seafood Butchery & Searing', 'Modernist Gastronomy (Sous-Vide/Emulsions)', 'Kitchen Sanitation (ServSafe HACCP)', 'Brigade Line Leadership'],
    overview: 'From fine dining Michelin-starred restaurants to boutique bakeries and private dining, the culinary profession blends precision chemistry, high-adrenaline teamwork, and pure sensory art.',
    keyResponsibilities: ['Design signature tasting menus celebrating local seasonal produce', 'Direct kitchen line execution during fast-paced peak dinner rush', 'Maintain rigorous food safety (HACCP) and kitchen hygiene standards', 'Train and mentor line cooks and apprentice chefs'],
    industries: ['Fine Dining Restaurants', 'Luxury Hotels & Resorts', 'Private Catering & Dining', 'Artisan Bakeries', 'Food Media & Development'],
    pros: ['Direct sensory joy and artistic satisfaction', 'High camaraderie in kitchen brigades', 'Universal global demand in every culture'],
    challenges: ['Intense physical heat and long evening service hours', 'High pace during peak dinner rush'],
    certifications: ['ServSafe Food Protection Manager', 'Certified Executive Chef (CEC - American Culinary Federation)'],
    projects: ['5-course seasonal tasting menu design with ingredient costings', 'Charcuterie and whole-fish fabrication master test', 'Modernist gastronomy dessert utilizing spherification and gels'],
    communities: ['American Culinary Federation (ACF)', 'r/KitchenConfidential', 'ChefSteps Hub'],
    learningResources: [
      { title: 'Salt, Fat, Acid, Heat (Samin Nosrat)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'The Professional Chef (Culinary Institute of America)', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['nutritionist', 'event_manager', 'travel_curator']
  },
  {
    id: 'fitness_trainer',
    title: 'Personal Fitness Trainer & Kinesiologist',
    category: 'Lifestyle & Practical',
    tagline: 'Coaching athletic hypertrophy, functional mobility & lifestyle wellness',
    description: 'Fitness Trainers design customized strength, cardiovascular, and flexibility programs. They motivate clients, correct exercise mechanics, and inspire sustainable lifestyle transformations.',
    suitability: 90,
    whyItMatches: 'Your physical energy, enthusiasm for health, and motivating personality make fitness training a natural avenue.',
    salaryRange: '$45,000 – $98,000 / yr',
    growth: '+19% (Booming Personal Wellness Demand)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Strength Coach',
    icon: 'Dumbbell',
    accentColor: 'orange',
    demandLevel: 'High Demand',
    estimatedLearningTime: '3 – 6 Months',
    requiredSkills: ['Exercise Physiology & Kinesiology', 'Biomechanics & Form Correction', 'Periodized Strength Program Design', 'Functional Movement Screening (FMS)', 'Client Motivation & Habit Coaching', 'Nutrition Fundamentals for Fat Loss/Hypertrophy'],
    overview: 'Personal trainers transform people’s physical vitality, building confidence, muscular strength, and cardiovascular health.',
    keyResponsibilities: ['Conduct postural, mobility, and cardiovascular fitness assessments', 'Design progressive overload periodization workout plans', 'Instruct and spot clients on safe lifting mechanics (squat, deadlift, press)', 'Track client body composition, strength PRs, and nutritional consistency'],
    industries: ['Private Training Studios', 'Commercial Gyms', 'Online Fitness Coaching', 'Corporate Wellness Centers'],
    pros: ['Active, healthy, and non-sedentary work environment', 'Joy in seeing clients lose weight and gain confidence', 'High hourly rates in private coaching'],
    challenges: ['Early morning and evening client scheduling', 'Maintaining client motivation during plateaus'],
    certifications: ['NASM-CPT (National Academy of Sports Medicine)', 'CSCS (Certified Strength and Conditioning Specialist)'],
    projects: ['12-week progressive strength and hypertrophy training blueprint', 'Mobility and postural restoration corrective exercise protocol', 'Online fitness client onboarding and habit-tracking app setup'],
    communities: ['NASM Trainer Network', 'r/personaltraining', 'Strength & Conditioning Forum'],
    learningResources: [
      { title: 'Starting Strength: Basic Barbell Training (Mark Rippetoe)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'NASM Official Study Guides & Video Lab', type: 'Course', url: 'https://nasm.org', free: false }
    ],
    relatedCareers: ['sports_professional', 'physiotherapist', 'nutritionist']
  },
  {
    id: 'sports_professional',
    title: 'Sports Athlete & Athletic Coach',
    category: 'Lifestyle & Practical',
    tagline: 'Competing at elite levels, tactical sports strategy & athletic leadership',
    description: 'Sports Professionals and Coaches train athletes to peak physical performance, design game tactics, study opposition footage, and lead teams through competitive leagues and tournaments.',
    suitability: 89,
    whyItMatches: 'Your competitive drive, teamwork spirit, and passion for sports performance make athletic coaching and competition a great fit.',
    salaryRange: '$48,000 – $130,000+ / yr',
    growth: '+15% (Youth & Professional Sports Leagues)',
    difficulty: 'High (Athletic Performance)',
    rating: '4.8',
    badge: 'Athletic Champion',
    icon: 'Trophy',
    accentColor: 'amber',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Game Strategy & Tactical Playbooks', 'High-Performance Athletic Conditioning', 'Video Game Footage Breakdown', 'Team Psychology & Morale Building', 'Injury Prevention & Recovery Drills', 'Scouting & Talent Evaluation'],
    overview: 'Athletic coaches and sports professionals live for the thrill of the game, instilling discipline, tactical excellence, and championship culture.',
    keyResponsibilities: ['Plan and direct intense tactical team practice drills', 'Analyze opposition game tape and draft scouting reports', 'Manage in-game substitutions, time-outs, and strategy shifts', 'Foster team leadership, resilience, and sportsmanship values'],
    industries: ['Professional Sports Leagues', 'Collegiate Athletic Programs', 'Youth Sports Academies', 'Private Athletic Coaching'],
    pros: ['Pure adrenaline and passion for sports', 'Deep camaraderie with athletes and coaching staff', 'Thrilling competitive victories'],
    challenges: ['High pressure on team win-loss records', 'Weekend and seasonal travel schedules'],
    certifications: ['National Governing Body Coaching License (e.g. USSF Soccer, USA Basketball)'],
    projects: ['Complete season tactical playbook and drill breakdown manual', 'Opposition scouting report with offensive and defensive adjustments', 'Off-season speed and agility conditioning regimen'],
    communities: ['Coaches Association Hub', 'r/coaching', 'Positive Coaching Alliance'],
    learningResources: [
      { title: 'The Score Takes Care of Itself (Bill Walsh)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Wooden: A Lifetime of Observations and Reflections (John Wooden)', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['fitness_trainer', 'physiotherapist', 'dancer_choreographer']
  },
  {
    id: 'event_manager',
    title: 'Event Experience & Festival Producer',
    category: 'Lifestyle & Practical',
    tagline: 'Orchestrating unforgettable festivals, live galas & brand activations',
    description: 'Event Managers conceptualize, organize, and execute large-scale conferences, music festivals, weddings, and corporate galas. They direct venue logistics, stage production, catering, and guest experiences.',
    suitability: 91,
    whyItMatches: 'Your organizational mastermind, calm multitasking under pressure, and passion for live human experiences make event management a standout fit.',
    salaryRange: '$52,000 – $115,000 / yr',
    growth: '+18% (Live Experiences & Corporate Events)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Live Experience',
    icon: 'PartyPopper',
    accentColor: 'purple',
    demandLevel: 'High Demand',
    estimatedLearningTime: '4 – 9 Months',
    requiredSkills: ['Event Budgeting & Vendor Negotiation', 'Timeline & Run-of-Show Scheduling', 'Stage AV, Lighting & Production Coordination', 'Guest Hospitality & Crowd Safety Protocols', 'Event Permitting & Insurance Regulations', 'Crisis Problem Solving on Site'],
    overview: 'Event producers build temporary magic worlds, organizing events where thousands gather to celebrate, learn, and make unforgettable memories.',
    keyResponsibilities: ['Develop complete event budgets, floor plans, and run-of-show cue sheets', 'Negotiate contracts with venues, caterers, AV production crews, and talent', 'Supervise on-site setup, registration queues, and live stage transitions', 'Resolve unexpected emergencies smoothly without guests ever noticing'],
    industries: ['Music Festivals & Concerts', 'Corporate Tech Conferences', 'Luxury Weddings & Galas', 'Sports Tournaments', 'Brand Popups'],
    pros: ['Tremendous thrill watching live events come to life', 'Working with diverse creative artists and vendors', 'Every event is unique and never monotonous'],
    challenges: ['High adrenaline pressure on live event days', 'Long hours during event setup and teardown'],
    certifications: ['Certified Meeting Professional (CMP)', 'Certified Special Events Professional (CSEP)'],
    projects: ['Comprehensive 1,000-attendee tech conference run-of-show and budget master', 'Luxury wedding timeline and vendor coordination matrix', 'Music festival crowd safety, security, and medical egress protocol'],
    communities: ['ILEA (International Live Events Association)', 'EventMB Forum', 'r/eventplanning'],
    learningResources: [
      { title: 'Special Events: The Roots and Wings of Event Leadership (Joe Goldblatt)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'EventMB Industry Trends & Guides', type: 'Articles', url: 'https://eventmanagerblog.com', free: true }
    ],
    relatedCareers: ['entertainment_media_host', 'chef', 'travel_curator', 'business_manager']
  },
  {
    id: 'travel_curator',
    title: 'Travel Curator & Expedition Guide',
    category: 'Lifestyle & Practical',
    tagline: 'Curating bespoke world expeditions, cultural storytelling & eco-travel',
    description: 'Travel Curators and Expedition Guides design immersive journeys across global destinations. They navigate remote landscapes, share rich cultural history, and forge life-changing travel memories.',
    suitability: 90,
    whyItMatches: 'Your adventurous curiosity, cross-cultural charisma, and love for global exploration make travel curation a perfect calling.',
    salaryRange: '$42,000 – $98,000 / yr + gratuities',
    growth: '+18% (Expanding Experiential Global Tourism)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Global Explorer',
    icon: 'Compass',
    accentColor: 'teal',
    demandLevel: 'High Demand',
    estimatedLearningTime: '3 – 6 Months',
    requiredSkills: ['Cross-Cultural Storytelling & History', 'Expedition Navigation & Itinerary Planning', 'Multilingual Conversational Communication', 'Wilderness First Aid & Crisis Safety', 'Boutique Vendor Partnerships', 'Guest Hospitality & Group Pacing'],
    overview: 'Turn your wanderlust into a fulfilling career, introducing travelers to hidden mountain vistas, ancient architectural ruins, and authentic local artisans.',
    keyResponsibilities: ['Guide traveler groups through landmark monuments, national parks, and heritage routes', 'Narrate engaging historical, ecological, and cultural backstories', 'Manage transport reservations, ticketing, and route contingency buffers', 'Ensure guest safety, comfort, and seamless hospitality at all times'],
    industries: ['Experiential Tour Companies', 'Eco-Tourism Lodges', 'National Geographic Expeditions', 'Luxury Bespoke Travel Agencies'],
    pros: ['Paid to travel the world and explore breathtaking destinations', 'Meeting fascinating people from every walk of life', 'High personal freedom and adventure'],
    challenges: ['Living out of a suitcase during peak tour departure seasons', 'Managing logistics during flight delays and weather shifts'],
    certifications: ['WFR (Wilderness First Responder)', 'Certified Tour Director (ITMI)'],
    projects: ['10-day bespoke culinary and cultural itinerary through Northern Italy', 'Comprehensive wilderness safety and emergency evacuation protocol', 'High-converting TripAdvisor and Viator travel experience listing'],
    communities: ['ITMI Alumni Network', 'Adventure Travel Trade Association (ATTA)', 'r/travel'],
    learningResources: [
      { title: 'Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel (Rolf Potts)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'National Geographic Traveler Heritage Archives', type: 'Articles', url: 'https://nationalgeographic.com', free: true }
    ],
    relatedCareers: ['chef', 'photographer', 'event_manager']
  },

  // ENTERTAINMENT & PERFORMING ARTS (7 Dedicated Grouped Paths as requested)
  {
    id: 'singer_vocalist',
    title: 'Singer / Vocal Performer',
    category: 'Entertainment & Performing Arts',
    tagline: 'Vocal artistry, live concert performance & sonic emotional expression',
    description: 'Singers and Vocal Performers master breath control, pitch, resonance, vocal agility, and stage charisma. They perform live concerts, record studio albums, and communicate deep emotional resonance with audiences worldwide.',
    suitability: 93,
    whyItMatches: 'Your vocal musical intuition, emotional expression, and passion for performing center you for vocal artistry.',
    salaryRange: '$45,000 – $140,000+ / yr',
    growth: '+14% (Streaming & Live Touring)',
    difficulty: 'Moderate to High',
    rating: '4.9',
    badge: 'Vocal Artist',
    icon: 'Mic',
    accentColor: 'purple',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Diaphragmatic Breath & Vocal Control', 'Pitch Accuracy & Microtonal Ear Training', 'Vocal Range Extension & Mix Voice', 'Stage Presence & Mic Technique', 'Harmony & Improvisation', 'Studio Recording & Vocal Stacking'],
    specializations: ['Singer / Songwriter', 'K-Pop / Idol Performer', 'Rapper / Lyricist', 'Musical Theatre Performer'],
    overview: 'Vocal performers captivate crowds from indie venues to sold-out arena stadiums, channeling raw human emotion into unforgettable musical melodies.',
    keyResponsibilities: ['Rehearse daily vocal warmups, scales, and breath control exercises', 'Record lead vocals, harmonies, and ad-libs in professional recording studios', 'Execute dynamic live stage performances with choreography and stamina', 'Collaborate with music producers, lyricists, and sound engineers'],
    industries: ['Music Industry & Record Labels', 'Musical Theatre (Broadway / West End)', 'Live Touring & Festivals', 'Commercial Jingles & Gaming Soundtracks'],
    pros: ['Immense emotional connection with fans worldwide', 'Pure artistic vocal expression', 'Exciting touring and recording life'],
    challenges: ['Vocal health preservation against strain', 'Audition competition in early career'],
    certifications: ['Berklee Vocal Mastery Certificate', 'Estill Voice Training Certification'],
    projects: ['3-track EP recorded with lead, doubles, and 4-part harmonies', 'Live 15-minute acoustic vocal performance set video', 'Professional vocal audition reel with pop, theatre, and R&B samples'],
    communities: ['Berklee College of Music Online', 'r/singing', 'Vocalist Guild Discord'],
    learningResources: [
      { title: 'Singing for the Stars (Seth Riggs)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Berklee Online Vocal Technique Free Lessons', type: 'Course', url: 'https://online.berklee.edu', free: true }
    ],
    relatedCareers: ['actor_performer', 'dancer_choreographer', 'music_producer', 'entertainment_media_host']
  },
  {
    id: 'actor_performer',
    title: 'Actor / Dramatic Performer',
    category: 'Entertainment & Performing Arts',
    tagline: 'Embodying characters, on-camera dramatic performance & theatre arts',
    description: 'Actors portray characters in film, television, theatre productions, and voice acting. They analyze scripts, embody complex psychological motives, master vocal diction, and deliver authentic dramatic performances.',
    suitability: 92,
    whyItMatches: 'Your emotional empathy, narrative imagination, and stage presence make dramatic acting an exceptional fit.',
    salaryRange: '$42,000 – $150,000+ / yr',
    growth: '+13% (Film, Streaming Series & Voiceover)',
    difficulty: 'Moderate to High',
    rating: '4.8',
    badge: 'Dramatic Artist',
    icon: 'Drama',
    accentColor: 'rose',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 14 Months',
    requiredSkills: ['Method & Meisner Acting Techniques', 'Vocal Diction & Dialect Adaptation', 'Script Analysis & Subtext Breakdown', 'On-Camera Blocking & Eyeline Control', 'Improvisation & Emotional Access', 'Voice Acting & ADR Mic Technique'],
    specializations: ['Film & Cinema Actor', 'Television Series Actor', 'Theatre & Broadway Performer', 'Voiceover & Animation Actor'],
    overview: 'Actors step into the shoes of diverse human souls, bringing fictional scripts to life with truth, vulnerability, and cinematic power.',
    keyResponsibilities: ['Break down scene subtext, character objectives, and obstacles', 'Memorize dialogue and execute blocking on set or stage', 'Perform on-camera takes with consistent emotional continuity', 'Record voiceover auditions for animated films and video games'],
    industries: ['Feature Films', 'Streaming Television (Netflix/HBO)', 'Theatre Companies', 'Animation & Game Voiceover', 'Commercials'],
    pros: ['Transformative creative expression embodying different lives', 'Thrill of performing on film sets and live stages', 'Collaborating with renowned directors'],
    challenges: ['Handling frequent casting audition rejections', 'Irregular project-to-project shooting schedules'],
    certifications: ['SAG-AFTRA Union Eligibility', 'Lee Strasberg / Juilliard Conservatory Training'],
    projects: ['Professional 2-minute dramatic and comedic showreel', 'Self-tape audition submission library with multi-genre scenes', 'Lead role in indie short film or mainstage theatre production'],
    communities: ['SAG-AFTRA Foundation', 'Backstage Actors Forum', 'r/acting'],
    learningResources: [
      { title: 'Respect for Acting (Uta Hagen)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'An Actor Prepares (Constantin Stanislavski)', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['singer_vocalist', 'film_director_producer', 'entertainment_media_host', 'writer']
  },
  {
    id: 'dancer_choreographer',
    title: 'Dancer & Choreographer',
    category: 'Entertainment & Performing Arts',
    tagline: 'Physical kinetic expression, stage choreography & performance movement',
    description: 'Dancers and Choreographers communicate narratives and musical rhythms through physical movement. They master classical and commercial styles, choreograph stage routines, and perform in live tours, music videos, and theatre.',
    suitability: 91,
    whyItMatches: 'Your rhythmic coordination, kinetic physical energy, and creative expression position you for dance mastery.',
    salaryRange: '$40,000 – $110,000 / yr',
    growth: '+14% (Commercial Entertainment & Music Tours)',
    difficulty: 'Challenging (Physical Discipline)',
    rating: '4.8',
    badge: 'Kinetic Movement',
    icon: 'Activity',
    accentColor: 'indigo',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['Choreography Sequencing & Musicality', 'Contemporary, Hip-Hop & Ballet Foundations', 'Stage Formations & Group Synchronization', 'Freestyle Improvisation & Flow', 'Physical Stamina & Flexibility', 'Audition Combos & Rapid Memory'],
    specializations: ['Professional Commercial Dancer', 'Stage & Tour Choreographer', 'Performance Artist', 'Dance Studio Director'],
    overview: 'Dancers translate sonic vibrations into breathtaking visual motion, electrifying stages on world tours and music videos.',
    keyResponsibilities: ['Rehearse intense conditioning, stretching, and technical routines daily', 'Memorize complex choreography combinations in fast-paced auditions', 'Choreograph original dance routines for music videos and artists', 'Perform live on tour stages with high physical stamina and stage presence'],
    industries: ['World Concert Tours', 'Music Videos', 'Commercial Dance Companies', 'Broadway Shows', 'Dance Academies'],
    pros: ['Unparalleled physical fitness and artistic expression', 'Touring the globe with top music artists', 'Thriving commercial music video industry'],
    challenges: ['Physical strain and injury prevention discipline', 'Competitive audition calls'],
    certifications: ['Royal Academy of Dance (RAD) Certificate', 'Commercial Choreography Intensive'],
    projects: ['3-minute polished commercial dance concept video', 'Original 8-count stage choreography routine for 10 dancers', 'Professional commercial dance reel highlighting versatile styles'],
    communities: ['Millennium Dance Complex Hub', 'r/dance', 'Dance NYC Network'],
    learningResources: [
      { title: 'The Intimate Act of Choreography (Blom & Chaplin)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Steezy Studio Online Dance Classes', type: 'Video', url: 'https://steezy.co', free: false }
    ],
    relatedCareers: ['singer_vocalist', 'actor_performer', 'sports_professional', 'fitness_trainer']
  },
  {
    id: 'model_fashion',
    title: 'Fashion & Commercial Model',
    category: 'Entertainment & Performing Arts',
    tagline: 'Runway poise, commercial editorial posing & brand campaigns',
    description: 'Fashion and Commercial Models embody designer aesthetics, pose for magazine editorials, walk high-fashion runways, and represent global luxury brands in advertising campaigns.',
    suitability: 88,
    whyItMatches: 'Your photogenic poise, physical confidence, runway discipline, and personal style make professional modeling a compelling path.',
    salaryRange: '$45,000 – $160,000+ / yr',
    growth: '+11% (Fashion, E-Commerce & Luxury Brands)',
    difficulty: 'Moderate',
    rating: '4.7',
    badge: 'Runway & Lens',
    icon: 'Sparkles',
    accentColor: 'pink',
    demandLevel: 'Moderate to High',
    estimatedLearningTime: '3 – 6 Months',
    requiredSkills: ['Runway Walk & Posture Mechanics', 'Editorial & High-Fashion Posing Angles', 'Facial Expression & Eyeline Control', 'Brand Representation & Media Poise', 'Portfolio & Comp Card Curation', 'On-Set Professionalism with Photographers'],
    specializations: ['High-Fashion Runway Model', 'Commercial & Catalog Model', 'Editorial & Beauty Model', 'Digital & Social Brand Ambassador'],
    overview: 'Models bring clothing, jewelry, and cosmetics to life, transforming designer garments into iconic imagery printed in Vogue and displayed on global billboards.',
    keyResponsibilities: ['Walk runway shows during international fashion weeks with signature stride', 'Execute dynamic poses during multi-hour commercial and editorial photoshoots', 'Maintain professional comp card portfolios and attend agency go-sees', 'Collaborate with stylists, makeup artists, and art directors'],
    industries: ['Fashion Weeks (Paris, Milan, NY, London)', 'Editorial Magazines (Vogue, Harper’s Bazaar)', 'Luxury Advertising Campaigns', 'E-Commerce Retail Brands'],
    pros: ['Traveling to global fashion capitals', 'Working with world-renowned photographers and designers', 'High visibility and personal brand building'],
    challenges: ['Casting rejection resilience', 'Maintaining strict physical and skin wellness'],
    certifications: ['Top Modeling Agency Representation (IMG / Ford / Elite)'],
    projects: ['High-fashion editorial portfolio with 12 diverse looks', 'Clean commercial comp card with accurate measurements', 'Runway video walk reel demonstrating strong posture and turn'],
    communities: ['Models.com Network', 'r/modeling', 'Fashion Model Directory'],
    learningResources: [
      { title: 'The Business of Modeling: The Complete Guide', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Models.com Industry Showcases & Agency Rankings', type: 'Articles', url: 'https://models.com', free: true }
    ],
    relatedCareers: ['fashion_designer', 'photographer', 'content_creator', 'actor_performer']
  },
  {
    id: 'music_producer',
    title: 'Music Producer & Composer',
    category: 'Entertainment & Performing Arts',
    tagline: 'Sound architecture, beat composition & digital audio engineering',
    description: 'Music Producers and Composers architect songs from initial chords to final radio master. They compose arrangements, program beats, record artists, and sculpt acoustic frequencies in digital audio workstations.',
    suitability: 93,
    whyItMatches: 'Your auditory sensitivity, appreciation for groove and harmony, and technical sonic curiosity make music production an extraordinary match.',
    salaryRange: '$50,000 – $145,000+ / yr',
    growth: '+15% (Streaming, Film Scores & Gaming Audio)',
    difficulty: 'Moderate to High',
    rating: '4.9',
    badge: 'Sonic Architect',
    icon: 'Music',
    accentColor: 'violet',
    demandLevel: 'High Demand',
    estimatedLearningTime: '6 – 12 Months',
    requiredSkills: ['DAW Mastery (Ableton Live / Logic Pro / Pro Tools)', 'Sound Design & Synthesizer Programming (Serum/Vital)', 'Audio Mixing & Parametric Equalization', 'Dynamic Range Compression & Limiting', 'Music Theory & Chord Progressions', 'Vocal Tuning & Melodyne Processing'],
    specializations: ['Music Producer & Beatmaker', 'Film & Game Score Composer', 'Songwriter & Lyricist', 'Mixing & Mastering Engineer'],
    overview: 'From billboard pop hits and cinematic orchestral scores to underground electronic tracks, music producers engineer the soundtracks of human lives.',
    keyResponsibilities: ['Compose original hooks, melodies, basslines, and drum patterns', 'Record, edit, tune, and stack vocal takes with recording artists', 'Carve frequency space using EQ, compression, reverb, and saturation', 'Master final audio stems to streaming loudness standards (-14 LUFS)'],
    industries: ['Record Labels & Streaming', 'Film & TV Scoring', 'Video Game Soundtracks', 'Sync Licensing for Advertising'],
    pros: ['Immense creative freedom in sound design', 'Royalty revenues from streaming and sync licensing', 'Direct collaboration with top musical artists'],
    challenges: ['Extensive sonic ear training required', 'Standing out in competitive digital streaming platforms'],
    certifications: ['Ableton Certified Trainer / Pro Tools Certified Operator', 'Berklee Music Production Specialist'],
    projects: ['Full 5-track produced, mixed, and mastered commercial EP', 'Original 2-minute cinematic orchestral score synced to film scene', 'Beat store portfolio with 20 genre-tagged commercial licenses'],
    communities: ['Sound on Sound Community', 'Gearspace Forum', 'r/edmproduction', 'r/WeAreTheMusicMakers'],
    learningResources: [
      { title: 'Mixing Secrets for the Small Studio (Mike Senior)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Syntorial Interactive Synthesizer Training', type: 'Course', url: 'https://syntorial.com', free: false }
    ],
    relatedCareers: ['singer_vocalist', 'video_editor', 'software_engineer', 'content_creator']
  },
  {
    id: 'entertainment_media_host',
    title: 'TV Host & Entertainment Presenter',
    category: 'Entertainment & Performing Arts',
    tagline: 'Broadcasting charisma, live interview hosting & comedic presentation',
    description: 'Entertainment Media Hosts, VJs, and Presenters anchor television broadcasts, live red-carpet ceremonies, podcasts, and digital shows. They engage audiences with wit, charismatic interviews, and dynamic storytelling.',
    suitability: 91,
    whyItMatches: 'Your conversational confidence, rapid improv wit, and natural charm make live hosting and presentation a great match.',
    salaryRange: '$48,000 – $140,000 / yr',
    growth: '+14% (Digital Media & Live Broadcasts)',
    difficulty: 'Moderate',
    rating: '4.8',
    badge: 'Broadcasting Host',
    icon: 'Radio',
    accentColor: 'amber',
    demandLevel: 'High Demand',
    estimatedLearningTime: '4 – 8 Months',
    requiredSkills: ['Teleprompter & Ear-Prompter (IFB) Delivery', 'Improvisational Banter & Rapid Wit', 'Celebrity Interview Technique', 'Vocal Projection & Diction', 'Live Show Timing & Pacing', 'On-Camera Charisma'],
    specializations: ['Television & Red Carpet Host', 'Radio & Podcast Host', 'VJ & Live Stage Presenter', 'Stand-up Comedian & MC'],
    overview: 'Media hosts guide the audience experience, making celebrities feel comfortable, energizing live crowds, and delivering memorable broadcast moments.',
    keyResponsibilities: ['Host live and pre-recorded entertainment shows and podcasts', 'Conduct insightful, charismatic interviews with artists and thought leaders', 'Read teleprompter scripts seamlessly while maintaining organic conversational tone', 'Improvise and adapt during unexpected live broadcast technical glitches'],
    industries: ['Television Networks', 'Podcast Networks (Spotify/iHeart)', 'Live Award Ceremonies', 'Digital Entertainment Channels', 'Comedy Clubs'],
    pros: ['Meeting extraordinary cultural icons', 'Fun, high-energy live broadcasting environment', 'High personal visibility and brand deals'],
    challenges: ['Thinking on your feet during unscripted live broadcast moments', 'Maintaining high energy on demanding shooting schedules'],
    certifications: ['Broadcasting & Media Communications Certification'],
    projects: ['3-minute entertainment news hosting showreel', 'Full 30-minute celebrity interview podcast episode', 'Live event MC hosting portfolio video'],
    communities: ['National Association of Broadcasters (NAB)', 'r/podcasting', 'Toastmasters International'],
    learningResources: [
      { title: 'Talk Like TED (Carmine Gallo)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Toastmasters International Public Speaking Guides', type: 'Articles', url: 'https://toastmasters.org', free: true }
    ],
    relatedCareers: ['content_creator', 'actor_performer', 'singer_vocalist', 'marketing_specialist']
  },
  {
    id: 'film_director_producer',
    title: 'Film Director & Screenwriter',
    category: 'Entertainment & Performing Arts',
    tagline: 'Guiding cinematic vision, screenplay narrative & film production',
    description: 'Film Directors and Screenwriters craft the visual language, dramatic pacing, and emotional tone of cinematic stories. They direct actors, collaborate with cinematographers, and shepherd films from script to screen.',
    suitability: 92,
    whyItMatches: 'Your grand storytelling vision, cinematic eye, and ability to lead creative teams make filmmaking a profound career.',
    salaryRange: '$55,000 – $180,000+ / yr',
    growth: '+15% (Streaming Wars & Global Cinema)',
    difficulty: 'High',
    rating: '4.9',
    badge: 'Cinematic Vision',
    icon: 'Clapperboard',
    accentColor: 'indigo',
    demandLevel: 'High Demand',
    estimatedLearningTime: '8 – 18 Months',
    requiredSkills: ['Visual Storyboarding & Shot Listing', 'Directing Actors for Emotional Depth', 'Screenplay Formatting (Final Draft)', 'Cinematography & Lens Selection', 'Film Production Budgeting & Scheduling', 'Post-Production Supervision'],
    specializations: ['Feature Film Director', 'Screenwriter & Showrunner', 'Film & Commercial Producer', 'Stunt & Action Director'],
    overview: 'Directors orchestrate every element of the cinematic canvas — lighting, performances, music, and camera movement — to create timeless cinematic art.',
    keyResponsibilities: ['Write or refine screenplays with three-act structural arcs', 'Create detailed shot lists, storyboards, and moodbooks for cinematographers', 'Direct actors on set to elicit authentic, nuanced performances', 'Collaborate with film editors, colorists, and composers in post-production'],
    industries: ['Film Studios & Cinema', 'Streaming Platforms (Netflix/Apple/Amazon)', 'Commercial Production Companies', 'Independent Cinema'],
    pros: ['Complete artistic leadership over cinematic worlds', 'Seeing your films premiere on theater screens and festivals', 'Working with world-class actors and crews'],
    challenges: ['Securing film financing and production budgets', 'Managing large crews under tight shooting schedules'],
    certifications: ['Directors Guild of America (DGA) Eligibility', 'AFI Conservatory / NYU Film Training'],
    projects: ['Award-winning 10-minute dramatic short film', 'Full-length 100-page feature screenplay in Final Draft', 'Commercial director spec reel with narrative cinematic lighting'],
    communities: ['Directors Guild of America', 'r/Filmmakers', 'Screenwriters Hub on Reddit'],
    learningResources: [
      { title: 'Directing Actors (Judith Weston)', type: 'Book', url: 'https://amazon.com', free: false },
      { title: 'Save the Cat! The Last Book on Screenwriting You’ll Ever Need (Blake Snyder)', type: 'Book', url: 'https://amazon.com', free: false }
    ],
    relatedCareers: ['video_editor', 'writer', 'actor_performer', 'photographer']
  }
];

// GENERATE 4-STAGE ROADMAPS FOR ALL CAREERS DYNAMICALLY & WITH CAREER-SPECIFIC CURRICULA
export function generateCuratedRoadmaps() {
  const roadmaps = {};

  for (const career of INITIAL_CAREERS) {
    roadmaps[career.id] = createCareerRoadmap(career);
  }

  return roadmaps;
}

function createCareerRoadmap(career) {
  const cid = career.id;

  // Career-specific tailored stages
  if (cid === 'singer_vocalist') {
    return {
      careerId: cid,
      careerTitle: career.title,
      stages: [
        {
          stage: 'Beginner',
          badge: 'Vocal Foundations',
          color: 'emerald',
          description: 'Master breath support, pitch ear-training, vocal health, and tonal placement.',
          items: [
            { id: `${cid}-1`, title: 'Diaphragmatic Breathing & Posture', description: 'Eliminate clavicular tension, engage lower abdominal support, and build sustained breath control.', estimatedTime: '15 hours', resource: 'Seth Riggs Speech Level Singing Basics', type: 'concept', completed: false },
            { id: `${cid}-2`, title: 'Pitch Accuracy & Microtonal Ear Training', description: 'Practice interval jumps, solfège scales, and match pitch precisely to piano tones without wobbling.', estimatedTime: '20 hours', resource: 'Teoria Ear Training & Functional Pitch Trainer', type: 'practice', completed: false },
            { id: `${cid}-3`, title: 'Vocal Warmups & Resonance Registers', description: 'Lip trills, sirening, tongue-root relaxation, and discovering chest-to-head register bridge points.', estimatedTime: '20 hours', resource: 'Berklee Online Vocal Warmup Suite', type: 'practice', completed: false },
            { id: `${cid}-4`, title: 'Vocal Health & Hydration Routine', description: 'Vocal rest protocols, avoiding vocal nodules, hydration, and warm-down techniques.', estimatedTime: '10 hours', resource: 'The Vocal Athlete Health Handbook', type: 'book', completed: false }
          ]
        },
        {
          stage: 'Intermediate',
          badge: 'Technique & Agility',
          color: 'purple',
          description: 'Mix voice development, vibrato control, vocal runs, and studio microphone technique.',
          items: [
            { id: `${cid}-5`, title: 'Developing the Mix Voice (Passaggio)', description: 'Seamlessly transition through the vocal break into a resonant, unforced mixed voice register.', estimatedTime: '30 hours', resource: 'Brett Manning Singing Success Mixed Voice', type: 'practice', completed: false },
            { id: `${cid}-6`, title: 'Riffs, Runs & Vocal Agility Drills', description: 'Master pentatonic ornamentation, melisma precision, and rapid vocal velocity.', estimatedTime: '25 hours', resource: 'Cheryl Porter Vocal Agility Masterclass', type: 'practice', completed: false },
            { id: `${cid}-7`, title: 'Microphone Technique & Proximity Effect', description: 'Plosive management, distance control for belting vs whispering, and in-ear monitor setups.', estimatedTime: '15 hours', resource: 'Shure Vocal Microphone Mastery Guide', type: 'concept', completed: false },
            { id: `${cid}-8`, title: 'Song Interpretation & Emotional Phrasing', description: 'Infuse dynamics, vowel modifications, consonants, and raw vulnerability into lyrical delivery.', estimatedTime: '25 hours', resource: 'The Art of Singing (Richard Miller)', type: 'book', completed: false }
          ]
        },
        {
          stage: 'Advanced',
          badge: 'Studio & Stage Craft',
          color: 'pink',
          description: 'Studio vocal tracking, harmony arrangements, live performance stamina, and audition readiness.',
          items: [
            { id: `${cid}-9`, title: 'Studio Vocal Stacking & Harmony Arranging', description: 'Record tight double-tracks, 3-part harmonies, octave ad-libs, and comping vocal playlists in DAWs.', estimatedTime: '30 hours', resource: 'Logic Pro / Ableton Vocal Production Blueprint', type: 'project', completed: false },
            { id: `${cid}-10`, title: 'Live Stage Presence & Choreography Singing', description: 'Perform high-energy songs while moving and executing choreography without losing breath stability.', estimatedTime: '35 hours', resource: 'K-Pop & Pop Tour Vocal Stamina Drills', type: 'practice', completed: false },
            { id: `${cid}-11`, title: 'Audition Repertoire & Versatility Book', description: 'Build a versatile 16-bar and 32-bar audition songbook spanning Pop, R&B, Rock, and Musical Theatre.', estimatedTime: '20 hours', resource: 'Broadway Audition Singer Handbook', type: 'project', completed: false }
          ]
        },
        {
          stage: 'Professional',
          badge: 'Artist & Performer',
          color: 'indigo',
          description: 'Album releases, live tour headline sets, vocal branding, and recording industry operations.',
          items: [
            { id: `${cid}-12`, title: 'Original EP Recording & Vocal Delivery', description: 'Record and release a 4-track original vocal EP showcase on streaming platforms.', estimatedTime: '40 hours', resource: 'Independent Artist Release Playbook', type: 'project', completed: false },
            { id: `${cid}-13`, title: 'Music Publishing, Royalties & Live Touring', description: 'PRO registration (BMI/ASCAP), mechanical royalties, booking agents, and touring riders.', estimatedTime: '25 hours', resource: 'All You Need to Know About the Music Business (Passman)', type: 'book', completed: false }
          ]
        }
      ]
    };
  }

  if (cid === 'actor_performer') {
    return {
      careerId: cid,
      careerTitle: career.title,
      stages: [
        {
          stage: 'Beginner',
          badge: 'Acting Foundations',
          color: 'emerald',
          description: 'Voice & diction, relaxation, emotional freedom, and Stanislavski fundamentals.',
          items: [
            { id: `${cid}-1`, title: 'Vocal Diction & Diaphragm Projection', description: 'Master Linklater vocal release, articulation drills, phonetic clarity, and overcoming stage fright.', estimatedTime: '18 hours', resource: 'Freeing the Natural Voice (Kristin Linklater)', type: 'book', completed: false },
            { id: `${cid}-2`, title: 'Stanislavski Basics: Objectives & Actions', description: 'Understand "Given Circumstances", the "Magic If", super-objectives, and actionable verbs.', estimatedTime: '25 hours', resource: 'An Actor Prepares (Stanislavski)', type: 'book', completed: false },
            { id: `${cid}-3`, title: 'Improvisation & Spontaneity Exercises', description: 'Yes-and principles, spatial status games, listening actively, and emotional impulse reactions.', estimatedTime: '20 hours', resource: 'Spolin Theater Games & UCB Improv Manual', type: 'practice', completed: false },
            { id: `${cid}-4`, title: 'Sensory Memory & Emotional Access', description: 'Strasberg sense memory exercises to tap into genuine organic emotional states without forcing.', estimatedTime: '20 hours', resource: 'A Dream of Passion: The Development of the Method', type: 'concept', completed: false }
          ]
        },
        {
          stage: 'Intermediate',
          badge: 'Scene Study & On-Camera',
          color: 'blue',
          description: 'Meisner repetition, scene study breakdown, and on-camera audition techniques.',
          items: [
            { id: `${cid}-5`, title: 'Meisner Repetition & Truth in Acting', description: 'Living truthfully under imaginary circumstances through active partner connection and active listening.', estimatedTime: '30 hours', resource: 'Sanford Meisner on Acting', type: 'book', completed: false },
            { id: `${cid}-6`, title: 'Script & Scene Analysis (Subtext & Beats)', description: 'Break down scripts into beats, transitions, hidden motives, and psychological power shifts.', estimatedTime: '25 hours', resource: 'Backwards and Forwards: A Technical Manual for Reading Plays', type: 'concept', completed: false },
            { id: `${cid}-7`, title: 'On-Camera Acting & Eyeline Discipline', description: 'Adjusting performance scale for close-up lenses vs wide shots, hit marks, and eye discipline.', estimatedTime: '25 hours', resource: 'Secrets of Screen Acting (Patrick Tucker)', type: 'practice', completed: false },
            { id: `${cid}-8`, title: 'Self-Tape Setup & Audition Execution', description: 'Ring lighting, backdrop choice, clear shotgun audio, and submitting high-impact self-tapes.', estimatedTime: '15 hours', resource: 'Self-Tape Audition Masterclass (Backstage)', type: 'project', completed: false }
          ]
        },
        {
          stage: 'Advanced',
          badge: 'Voiceover & Dialect Mastery',
          color: 'purple',
          description: 'Dialect adaptation, voice acting in recording booths, and stunt/movement basics.',
          items: [
            { id: `${cid}-9`, title: 'Dialect & Accent Mastery (IPA)', description: 'Master British RP, Southern, New York, and International accents using International Phonetic Alphabet.', estimatedTime: '25 hours', resource: 'Accents: A Manual for Actors (Robert Blum)', type: 'practice', completed: false },
            { id: `${cid}-10`, title: 'Voiceover & Animation Acting Techniques', description: 'Character voices, video game combat callouts, ADR looping, and commercial script pacing.', estimatedTime: '20 hours', resource: 'The Art of Voice Acting (James Alburger)', type: 'practice', completed: false },
            { id: `${cid}-11`, title: 'Stage Combat & Physical Stunts Basics', description: 'Hand-to-hand stage combat, unarmed falls, slap/punch choreography with safety distance.', estimatedTime: '20 hours', resource: 'Society of American Fight Directors (SAFD) Guidelines', type: 'concept', completed: false }
          ]
        },
        {
          stage: 'Professional',
          badge: 'Working Actor',
          color: 'indigo',
          description: 'Showreel curation, talent agent representation, SAG-AFTRA, and feature filming.',
          items: [
            { id: `${cid}-12`, title: 'Showreel Production & Headshots', description: 'Produce a 2-minute cinematic showreel featuring contrasting dramatic and comedic scenes.', estimatedTime: '35 hours', resource: 'Actors Showreel Production Lab', type: 'project', completed: false },
            { id: `${cid}-13`, title: 'Agent Representation & SAG-AFTRA Union', description: 'Pitching agents, manager contracts, union points, and navigating major casting directors.', estimatedTime: '20 hours', resource: 'SAG-AFTRA Foundation Career Series', type: 'concept', completed: false }
          ]
        }
      ]
    };
  }

  if (cid === 'dancer_choreographer') {
    return {
      careerId: cid,
      careerTitle: career.title,
      stages: [
        {
          stage: 'Beginner',
          badge: 'Physical Foundations',
          color: 'emerald',
          description: 'Core conditioning, alignment, flexibility, and foundational dance vocabulary.',
          items: [
            { id: `${cid}-1`, title: 'Body Alignment & Core Stability', description: 'Pelvic placement, spine elongation, turnout mechanics, and joint injury prevention.', estimatedTime: '20 hours', resource: 'Dance Anatomy (Jacqui Greene Haas)', type: 'book', completed: false },
            { id: `${cid}-2`, title: 'Ballet & Contemporary Foundations', description: 'Pliés, tendus, pirouette preparation, weight transfer, and floorwork dynamics.', estimatedTime: '30 hours', resource: 'Royal Academy of Dance Syllabus', type: 'practice', completed: false },
            { id: `${cid}-3`, title: 'Rhythm, Time Signatures & Groove', description: 'Counting music in 8-counts, polyrhythms, syncopation, and bounce/groove fundamentals.', estimatedTime: '20 hours', resource: 'Steezy Studio: Beginner Groove & Isolation', type: 'practice', completed: false },
            { id: `${cid}-4`, title: 'Flexibility & Daily Mobility Regimen', description: 'Hamstring, hip flexor, and shoulder mobility drills for split extensions and back bridges.', estimatedTime: '15 hours', resource: 'Dynamic Flexibility for Dancers Guide', type: 'practice', completed: false }
          ]
        },
        {
          stage: 'Intermediate',
          badge: 'Styles & Fast Combinations',
          color: 'orange',
          description: 'Commercial hip-hop, contemporary flow, rapid combination retention, and freestyle.',
          items: [
            { id: `${cid}-5`, title: 'Commercial Hip-Hop & Isolation Mastery', description: 'Popping, waving, chest isolations, floor glides, and hard hitting dynamic textures.', estimatedTime: '30 hours', resource: 'Millennium Dance Complex Masterclasses', type: 'practice', completed: false },
            { id: `${cid}-6`, title: 'Freestyle Flow & Movement Vocabulary', description: 'Develop your signature dance identity through improvisational prompts and musical accents.', estimatedTime: '25 hours', resource: 'The Freestyle Dance Method', type: 'practice', completed: false },
            { id: `${cid}-7`, title: 'Rapid Combination Retention in Auditions', description: 'Pick up 8-count combinations in under 15 minutes and perform them on count under pressure.', estimatedTime: '25 hours', resource: 'Commercial Dance Audition Drills', type: 'practice', completed: false }
          ]
        },
        {
          stage: 'Advanced',
          badge: 'Choreography & Formations',
          color: 'purple',
          description: 'Choreographing routines, stage blocking, visual textures, and music video directing.',
          items: [
            { id: `${cid}-8`, title: 'Choreography Structure & Musicality', description: 'Transform vocal cues, drum fills, and lyrics into intricate visual movement motifs.', estimatedTime: '30 hours', resource: 'The Intimate Act of Choreography (Blom & Chaplin)', type: 'book', completed: false },
            { id: `${cid}-9`, title: 'Group Formations, Transitions & Cannons', description: 'Design dynamic geometric stage formations, seamless partner switches, and visual cannons.', estimatedTime: '25 hours', resource: 'Choreography Stage Blocking Masterclass', type: 'project', completed: false },
            { id: `${cid}-10`, title: 'Camera Dance Staging & Video Concepts', description: 'Choreographing specifically for sweeping drone and steadicam camera angles in music videos.', estimatedTime: '20 hours', resource: 'Filming Dance & Concept Videos', type: 'concept', completed: false }
          ]
        },
        {
          stage: 'Professional',
          badge: 'Stage Director',
          color: 'indigo',
          description: 'Directing world tour choreography, music video contracts, and dance academy leadership.',
          items: [
            { id: `${cid}-11`, title: 'Original Concept Video Production', description: 'Direct, choreograph, and star in a high-production 3-minute dance visual with costume design.', estimatedTime: '40 hours', resource: 'Dance Concept Video Production Capstone', type: 'project', completed: false },
            { id: `${cid}-12`, title: 'Dance Agency Representation & Tour Contracts', description: 'Signing with dance agencies (Bloc, MSA, Clear Talent) and navigating tour contracts.', estimatedTime: '20 hours', resource: 'The Commercial Dance Industry Guidebook', type: 'concept', completed: false }
          ]
        }
      ]
    };
  }

  // DEFAULT HIGH-QUALITY 4-STAGE ROADMAP GENERATOR FOR OTHER CAREERS
  const stage1Title = `${career.title} Foundations`;
  const stage2Title = `Core ${career.title} Competencies`;
  const stage3Title = `Advanced ${career.title} Architecture & Projects`;
  const stage4Title = `Professional Mastery & Leadership`;

  const skills = career.requiredSkills || ['Fundamental Concepts', 'Core Tools', 'Methodology', 'Execution', 'Evaluation'];

  return {
    careerId: cid,
    careerTitle: career.title,
    stages: [
      {
        stage: 'Beginner',
        badge: 'Foundation',
        color: 'emerald',
        description: `Master foundational principles, vocabulary, and primary tools of ${career.title}.`,
        items: [
          { id: `${cid}-1`, title: `${skills[0] || 'Core Domain Principles'}`, description: `Understand theoretical foundations, standard terminology, and baseline workflows.`, estimatedTime: '15 hours', resource: `${career.learningResources?.[0]?.title || 'Official Introductory Curriculum'}`, type: 'concept', completed: false },
          { id: `${cid}-2`, title: `${skills[1] || 'Primary Software & Tools'}`, description: `Setup environment and gain fluency in standard industry software and toolsets.`, estimatedTime: '20 hours', resource: `${career.learningResources?.[1]?.title || 'Essential Tool Training Guide'}`, type: 'practice', completed: false },
          { id: `${cid}-3`, title: `${skills[2] || 'Fundamental Methodologies'}`, description: `Apply structured thinking, best practices, and standard operating procedures.`, estimatedTime: '20 hours', resource: 'Industry Fundamentals Textbook', type: 'book', completed: false },
          { id: `${cid}-4`, title: 'Industry Ethics & Quality Standards', description: 'Understand legal guidelines, compliance, and ethical safety standards.', estimatedTime: '12 hours', resource: 'Professional Code of Ethics', type: 'concept', completed: false }
        ]
      },
      {
        stage: 'Intermediate',
        badge: 'Practitioner',
        color: 'blue',
        description: `Build robust practical projects, refine execution speed, and solve complex challenges.`,
        items: [
          { id: `${cid}-5`, title: `${skills[3] || 'Applied Technical Workflows'}`, description: `Design, execute, and troubleshoot real-world scenarios independently.`, estimatedTime: '30 hours', resource: 'Intermediate Practitioner Lab Guide', type: 'practice', completed: false },
          { id: `${cid}-6`, title: `${skills[4] || 'Advanced Problem Solving'}`, description: `Tackle edge cases, optimize performance metrics, and handle multi-variable requirements.`, estimatedTime: '25 hours', resource: 'Case Studies & Diagnostic Workbooks', type: 'concept', completed: false },
          { id: `${cid}-7`, title: 'Cross-Functional Collaboration & Handoffs', description: 'Communicate specifications, coordinate with stakeholders, and document processes.', estimatedTime: '20 hours', resource: 'Team Delivery Masterclass', type: 'concept', completed: false },
          { id: `${cid}-8`, title: 'First Capstone Portfolio Piece', description: `Execute and document a complete end-to-end ${career.title} project showcase.`, estimatedTime: '30 hours', resource: 'Portfolio Benchmark Guide', type: 'project', completed: false }
        ]
      },
      {
        stage: 'Advanced',
        badge: 'Senior Craftsman',
        color: 'purple',
        description: `Specialize in high-impact execution, systems design, and advanced certifications.`,
        items: [
          { id: `${cid}-9`, title: `${skills[5] || 'Advanced Systems & Strategy'}`, description: `Architect scalable solutions and evaluate strategic tradeoffs under constraints.`, estimatedTime: '30 hours', resource: 'Advanced Strategic Frameworks', type: 'concept', completed: false },
          { id: `${cid}-10`, title: `${career.certifications?.[0] || 'Professional Industry Certification'} Prep`, description: `Prepare for and achieve recognized industry credentials and certifications.`, estimatedTime: '25 hours', resource: `${career.certifications?.[0] || 'Certification Curriculum'}`, type: 'practice', completed: false },
          { id: `${cid}-11`, title: 'Comprehensive Client / Enterprise Case Study', description: `Build a production-grade portfolio project addressing enterprise requirements.`, estimatedTime: '35 hours', resource: 'Enterprise Project Lab', type: 'project', completed: false }
        ]
      },
      {
        stage: 'Professional',
        badge: 'Executive & Leader',
        color: 'indigo',
        description: `Industry leadership, strategic direction, mentorship, and career placement.`,
        items: [
          { id: `${cid}-12`, title: 'Signature Professional Portfolio & Dossier', description: `Publish a polished digital portfolio showcasing case studies and demonstrated metrics.`, estimatedTime: '35 hours', resource: 'Professional Showcase Blueprint', type: 'project', completed: false },
          { id: `${cid}-13`, title: 'Mentorship, Thought Leadership & Negotiation', description: `Drive industry innovation, mentor junior talent, and master executive negotiation.`, estimatedTime: '25 hours', resource: 'Leadership & Industry Impact Handbook', type: 'book', completed: false }
        ]
      }
    ]
  };
}

export const INITIAL_ROADMAPS = generateCuratedRoadmaps();
