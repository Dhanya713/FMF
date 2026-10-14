import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { INITIAL_CAREERS, INITIAL_INTERESTS, INITIAL_QUESTIONS, INITIAL_ROADMAPS } from '../data/seedData.js';
import { User, Career, Question, Interest, Roadmap, AssessmentResult } from '../models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');
const STORE_FILE = path.join(DATA_DIR, 'store.json');

const MOTIVATIONAL_QUOTES = [
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars.", author: "Harriet Tubman" }
];

class Store {
  constructor() {
    this.users = [];
    this.careers = [...INITIAL_CAREERS];
    this.interests = [...INITIAL_INTERESTS];
    this.questions = [...INITIAL_QUESTIONS];
    this.roadmaps = { ...INITIAL_ROADMAPS };
    this.quotes = MOTIVATIONAL_QUOTES;
    this.isMongoConnected = false;
    this.init();
  }

  async setMongoConnected(connected) {
    this.isMongoConnected = connected;
    if (connected) {
      console.log('📦 [Store] Initializing MongoDB database synchronization & collections...');
      await this.syncWithMongo();
    }
  }

  async syncWithMongo() {
    try {
      // 1. Seed or sync Careers
      const careerCount = await Career.countDocuments();
      if (careerCount < INITIAL_CAREERS.length) {
        console.log(`🌱 [Seed] Populating MongoDB with ${INITIAL_CAREERS.length} diverse career pathways...`);
        await Career.deleteMany({});
        await Career.insertMany(INITIAL_CAREERS);
      }
      const dbCareers = await Career.find({});
      if (dbCareers.length > 0) {
        this.careers = dbCareers.map(c => c.toObject());
      }

      // 2. Seed or sync Interests
      const interestCount = await Interest.countDocuments();
      if (interestCount < INITIAL_INTERESTS.length) {
        console.log(`🌱 [Seed] Populating MongoDB with ${INITIAL_INTERESTS.length} interest areas...`);
        await Interest.deleteMany({});
        await Interest.insertMany(INITIAL_INTERESTS);
      }
      const dbInterests = await Interest.find({});
      if (dbInterests.length > 0) {
        this.interests = dbInterests.map(i => i.toObject());
      }

      // 3. Seed or sync Questions
      const questionCount = await Question.countDocuments();
      if (questionCount !== INITIAL_QUESTIONS.length) {
        console.log(`🌱 [Seed] Populating MongoDB with ${INITIAL_QUESTIONS.length} diagnostic assessment questions...`);
        await Question.deleteMany({});
        await Question.insertMany(INITIAL_QUESTIONS);
      }
      this.questions = INITIAL_QUESTIONS;

      // 4. Seed or sync Roadmaps
      const roadmapCount = await Roadmap.countDocuments();
      const initialRoadmapCount = Object.keys(INITIAL_ROADMAPS).length;
      if (roadmapCount < initialRoadmapCount) {
        console.log(`🌱 [Seed] Populating MongoDB with 4-tier roadmaps for all careers...`);
        await Roadmap.deleteMany({});
        const roadmapDocs = Object.values(INITIAL_ROADMAPS);
        await Roadmap.insertMany(roadmapDocs);
      }

      // 5. Ensure demo user in MongoDB
      let demoUser = await User.findOne({ email: 'demo@findmyflow.com' });
      if (!demoUser) {
        const salt = bcrypt.genSaltSync(10);
        const demoHash = bcrypt.hashSync('password123', salt);
        await User.create({
          id: 'demo-user-1',
          name: 'Alex Rivera',
          email: 'demo@findmyflow.com',
          passwordHash: demoHash,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          bio: 'Passionate student exploring software architecture, performing arts, and digital creative design.',
          education: 'Undergraduate Computer Science & Creative Arts Studies',
          interests: ['performing_arts', 'visual_design', 'coding_tech'],
          assessmentCompleted: true,
          topCareerId: 'singer_vocalist',
          activeCareerId: 'singer_vocalist',
          isVerified: true,
          completedRoadmapItems: {
            singer_vocalist: ['singer_vocalist-1', 'singer_vocalist-2', 'singer_vocalist-3'],
            software_engineer: ['software_engineer-1', 'software_engineer-2']
          },
          recommendations: [
            {
              careerId: 'singer_vocalist',
              suitability: 96,
              whyItMatches: 'Your vocal musical intuition, emotional expression, and passion for performing center you for vocal artistry.'
            },
            {
              careerId: 'software_engineer',
              suitability: 93,
              whyItMatches: 'Your affinity for problem solving, structural logic, and building functional applications aligns directly with software engineering.'
            },
            {
              careerId: 'ui_ux_designer',
              suitability: 91,
              whyItMatches: 'Your aesthetic eye, focus on user delight, and visual communication skills make product design a seamless fit.'
            },
            {
              careerId: 'music_producer',
              suitability: 89,
              whyItMatches: 'Your sonic intuition, harmonic awareness, and digital audio engineering interest score strongly.'
            },
            {
              careerId: 'actor_performer',
              suitability: 86,
              whyItMatches: 'Your emotional empathy, narrative imagination, and stage presence make dramatic acting an exceptional fit.'
            }
          ]
        });
      } else {
        if (!demoUser.isVerified) {
          demoUser.isVerified = true;
          await demoUser.save();
        }
      }

      console.log('✅ [Store] MongoDB synchronized successfully with FindMyFlow data models.');
    } catch (err) {
      console.warn('⚠️ [Store] Error syncing with MongoDB, maintaining in-memory store:', err.message);
    }
  }

  init() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (fs.existsSync(STORE_FILE)) {
        const fileData = fs.readFileSync(STORE_FILE, 'utf-8');
        const parsed = JSON.parse(fileData);
        if (parsed.users && Array.isArray(parsed.users)) {
          this.users = parsed.users;
        }
      }

      // Ensure demo user exists locally
      if (!this.users.some(u => u.email === 'demo@findmyflow.com')) {
        const salt = bcrypt.genSaltSync(10);
        const demoHash = bcrypt.hashSync('password123', salt);
        this.users.push({
          id: 'demo-user-1',
          name: 'Alex Rivera',
          email: 'demo@findmyflow.com',
          passwordHash: demoHash,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          bio: 'Passionate student exploring software architecture, performing arts, and digital creative design.',
          education: 'Undergraduate Computer Science & Creative Arts Studies',
          interests: ['performing_arts', 'visual_design', 'coding_tech'],
          assessmentCompleted: true,
          topCareerId: 'singer_vocalist',
          activeCareerId: 'singer_vocalist',
          isVerified: true,
          completedRoadmapItems: {
            singer_vocalist: ['singer_vocalist-1', 'singer_vocalist-2', 'singer_vocalist-3'],
            software_engineer: ['software_engineer-1', 'software_engineer-2']
          },
          recommendations: [
            {
              careerId: 'singer_vocalist',
              suitability: 96,
              whyItMatches: 'Your vocal musical intuition, emotional expression, and passion for performing center you for vocal artistry.'
            },
            {
              careerId: 'software_engineer',
              suitability: 93,
              whyItMatches: 'Your affinity for problem solving, structural logic, and building functional applications aligns directly with software engineering.'
            },
            {
              careerId: 'ui_ux_designer',
              suitability: 91,
              whyItMatches: 'Your aesthetic eye, focus on user delight, and visual communication skills make product design a seamless fit.'
            },
            {
              careerId: 'music_producer',
              suitability: 89,
              whyItMatches: 'Your sonic intuition, harmonic awareness, and digital audio engineering interest score strongly.'
            },
            {
              careerId: 'actor_performer',
              suitability: 86,
              whyItMatches: 'Your emotional empathy, narrative imagination, and stage presence make dramatic acting an exceptional fit.'
            }
          ],
          createdAt: new Date().toISOString()
        });
        this.save();
      }
    } catch (e) {
      console.error('Error initializing store:', e);
    }
  }

  save() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(STORE_FILE, JSON.stringify({ users: this.users }, null, 2), 'utf-8');
    } catch (e) {
      console.error('Error saving store to disk:', e);
    }
  }

  async findUserByEmail(email) {
    if (!email) return null;
    if (this.isMongoConnected && mongoose.connection.readyState === 1) {
      const u = await User.findOne({ email: email.toLowerCase() });
      if (u) {
        const userObj = u.toObject();
        userObj.completedRoadmapItems = u.completedRoadmapItems ? Object.fromEntries(u.completedRoadmapItems) : {};
        return userObj;
      }
      return null;
    }
    return this.users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  }

  async findUserById(id) {
    if (!id) return null;
    if (this.isMongoConnected && mongoose.connection.readyState === 1) {
      const u = await User.findOne({ id });
      if (u) {
        const userObj = u.toObject();
        userObj.completedRoadmapItems = u.completedRoadmapItems ? Object.fromEntries(u.completedRoadmapItems) : {};
        return userObj;
      }
      return null;
    }
    return this.users.find(u => u.id === id) || null;
  }

  async findUserByVerificationToken(token) {
    if (!token) return null;
    if (this.isMongoConnected && mongoose.connection.readyState === 1) {
      const u = await User.findOne({ verificationToken: token });
      if (u) {
        const userObj = u.toObject();
        userObj.completedRoadmapItems = u.completedRoadmapItems ? Object.fromEntries(u.completedRoadmapItems) : {};
        return userObj;
      }
      return null;
    }
    return this.users.find(u => u.verificationToken === token) || null;
  }

  async verifyUserEmail(token) {
    const user = await this.findUserByVerificationToken(token);
    if (!user) {
      return { success: false, error: 'Invalid or expired verification link.' };
    }
    if (user.verificationTokenExpires && new Date(user.verificationTokenExpires) < new Date()) {
      return { success: false, error: 'Verification link has expired. Please request a new verification link.' };
    }

    const updated = await this.updateUser(user.id, {
      isVerified: true,
      verificationToken: null,
      verificationTokenExpires: null
    });
    return { success: true, user: updated };
  }

  async createUser({ name, email, passwordHash, isVerified = false, verificationToken = null, verificationTokenExpires = null }) {
    const newUser = {
      id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name,
      email: email.toLowerCase(),
      passwordHash,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`,
      bio: '',
      education: 'Student',
      interests: [],
      assessmentCompleted: false,
      topCareerId: null,
      activeCareerId: null,
      isVerified,
      verificationToken,
      verificationTokenExpires,
      completedRoadmapItems: {},
      savedCareers: [],
      recommendations: [],
      createdAt: new Date().toISOString()
    };

    if (this.isMongoConnected && mongoose.connection.readyState === 1) {
      const created = await User.create(newUser);
      const userObj = created.toObject();
      userObj.completedRoadmapItems = created.completedRoadmapItems ? Object.fromEntries(created.completedRoadmapItems) : {};
      
      // Keep local in-memory mirror synced
      this.users.push(newUser);
      this.save();
      return userObj;
    }

    this.users.push(newUser);
    this.save();
    return newUser;
  }

  async updateUser(id, updates) {
    let localUser = this.users.find(u => u.id === id);
    if (localUser) {
      Object.assign(localUser, updates);
      this.save();
    }

    if (this.isMongoConnected && mongoose.connection.readyState === 1) {
      const updated = await User.findOneAndUpdate({ id }, { $set: updates }, { new: true });
      if (updated) {
        const obj = updated.toObject();
        obj.completedRoadmapItems = updated.completedRoadmapItems ? Object.fromEntries(updated.completedRoadmapItems) : {};
        return obj;
      }
      return null;
    }

    return localUser;
  }

  getCareers() {
    return this.careers;
  }

  getCareerById(id) {
    return this.careers.find(c => c.id === id);
  }

  getInterests() {
    return this.interests;
  }

  getQuestions() {
    return this.questions;
  }

  getRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  getRoadmapByCareer(careerId, userCompletedIds = []) {
    let template = this.roadmaps[careerId];
    if (!template) {
      const career = this.getCareerById(careerId);
      if (career) {
        template = INITIAL_ROADMAPS[careerId] || null;
      }
    }
    if (!template) return null;

    let totalItems = 0;
    let completedItems = 0;

    const stages = template.stages.map(st => {
      const items = st.items.map(it => {
        totalItems++;
        const isCompleted = Array.isArray(userCompletedIds) && userCompletedIds.includes(it.id);
        if (isCompleted) completedItems++;
        return {
          ...it,
          completed: isCompleted
        };
      });

      const stageCompleted = items.filter(i => i.completed).length;
      const stageProgress = items.length > 0 ? Math.round((stageCompleted / items.length) * 100) : 0;

      return {
        ...st,
        items,
        stageProgress,
        completedCount: stageCompleted,
        totalCount: items.length
      };
    });

    const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    return {
      careerId,
      stages,
      progressPercentage,
      completedItems,
      totalItems
    };
  }

  async toggleRoadmapItem(userId, careerId, itemId, completed) {
    const user = await this.findUserById(userId);
    if (!user) throw new Error('User not found');

    if (!user.completedRoadmapItems) {
      user.completedRoadmapItems = {};
    }
    if (!user.completedRoadmapItems[careerId]) {
      user.completedRoadmapItems[careerId] = [];
    }

    const currentList = Array.isArray(user.completedRoadmapItems[careerId]) ? [...user.completedRoadmapItems[careerId]] : [];
    const exists = currentList.includes(itemId);

    if (completed && !exists) {
      currentList.push(itemId);
    } else if (!completed && exists) {
      const idx = currentList.indexOf(itemId);
      if (idx > -1) currentList.splice(idx, 1);
    }

    user.completedRoadmapItems[careerId] = currentList;

    if (!user.activeCareerId) {
      user.activeCareerId = careerId;
    }

    await this.updateUser(userId, {
      completedRoadmapItems: user.completedRoadmapItems,
      activeCareerId: user.activeCareerId
    });

    return this.getRoadmapByCareer(careerId, user.completedRoadmapItems[careerId]);
  }

  // DYNAMIC WEIGHTED SCORING RECOMMENDATION ENGINE
  calculateRecommendations(answers = [], userInterests = []) {
    // Initialize scores for all available careers in the system
    const careerScores = {};
    for (const c of this.careers) {
      careerScores[c.id] = 0;
    }

    // Dimension counters to explain why a recommendation matches
    const dimensionMatches = {
      creative: 0,
      technical: 0,
      performing: 0,
      helping: 0,
      business: 0,
      science: 0,
      practical: 0,
      legal: 0
    };

    // 1. Process diagnostic answers
    for (const ans of answers) {
      const q = this.questions.find(item => item.id === ans.questionId);
      const optIdx = ans.selectedOptionIndex !== undefined ? ans.selectedOptionIndex : ans.optionIndex;
      if (q && q.options && q.options[optIdx]) {
        const opt = q.options[optIdx];
        let weights = {};
        if (opt.weights) {
          if (opt.weights instanceof Map) {
            weights = Object.fromEntries(opt.weights);
          } else if (typeof opt.weights.toObject === 'function') {
            weights = opt.weights.toObject({ flattenMaps: true });
          } else if (typeof opt.weights.toJSON === 'function') {
            weights = opt.weights.toJSON();
          } else if (typeof opt.weights.forEach === 'function') {
            opt.weights.forEach((val, key) => { weights[key] = val; });
          } else if (typeof opt.weights === 'object') {
            weights = opt.weights;
          }
        }

        for (const [careerId, weight] of Object.entries(weights)) {
          if (careerScores[careerId] !== undefined) {
            careerScores[careerId] += Number(weight);
          }
        }
      }
    }

    // 2. Multi-Vector Interest Boosts
    const interestBoosts = {
      performing_arts: {
        singer_vocalist: 35,
        dancer_choreographer: 35,
        actor_performer: 32,
        music_producer: 28,
        entertainment_media_host: 25,
        model_fashion: 20,
        film_director_producer: 22
      },
      visual_design: {
        ui_ux_designer: 35,
        graphic_designer: 35,
        animator: 32,
        interior_designer: 30,
        fashion_designer: 28,
        video_editor: 28,
        photographer: 25
      },
      coding_tech: {
        software_engineer: 35,
        ai_ml_engineer: 35,
        cybersecurity_analyst: 32,
        product_manager: 15
      },
      business_strategy: {
        entrepreneur: 35,
        marketing_specialist: 32,
        financial_analyst: 32,
        business_manager: 30,
        product_manager: 28,
        hr_specialist: 20
      },
      healthcare_wellness: {
        doctor: 35,
        nurse: 35,
        physiotherapist: 32,
        nutritionist: 32,
        medical_researcher: 25
      },
      science_research: {
        research_scientist: 35,
        biotechnologist: 35,
        medical_researcher: 32,
        environmental_scientist: 30
      },
      law_public_service: {
        lawyer: 38,
        civil_services: 35,
        policy_analyst: 35,
        social_worker: 25
      },
      education_people: {
        teacher: 35,
        psychologist: 35,
        counselor: 35,
        social_worker: 30,
        career_counselor: 35
      },
      culinary_hospitality: {
        chef: 40,
        event_manager: 25,
        travel_curator: 20,
        nutritionist: 18
      },
      sports_fitness: {
        fitness_trainer: 38,
        sports_professional: 38,
        physiotherapist: 28,
        dancer_choreographer: 18
      },
      media_storytelling: {
        content_creator: 35,
        entertainment_media_host: 35,
        writer: 35,
        video_editor: 30,
        film_director_producer: 30,
        marketing_specialist: 20
      },
      travel_exploration: {
        travel_curator: 40,
        event_manager: 20,
        photographer: 20,
        environmental_scientist: 18,
        chef: 15
      }
    };

    for (const interest of userInterests) {
      const boosts = interestBoosts[interest];
      if (boosts) {
        for (const [cid, val] of Object.entries(boosts)) {
          if (careerScores[cid] !== undefined) {
            careerScores[cid] += val;
          }
        }
      }
    }

    // 3. Normalization into human-readable 65% - 98% suitability scores
    const scoreValues = Object.values(careerScores);
    const maxScore = Math.max(...scoreValues, 1);
    const minScore = Math.min(...scoreValues, 0);
    const spread = maxScore - minScore || 1;

    // 4. Construct enriched recommendations
    const results = Object.keys(careerScores).map(careerId => {
      const career = this.getCareerById(careerId);
      const rawScore = careerScores[careerId];

      // Dynamic calculation curve: smooth sigmoid-like distribution
      const normalizedRatio = (rawScore - minScore) / spread;
      const suitability = Math.min(98, Math.max(68, Math.round(68 + normalizedRatio * 29)));

      // Generate explainability rationale
      let whyItMatches = career?.whyItMatches;
      if (!whyItMatches || whyItMatches.length < 10) {
        whyItMatches = `High multi-vector alignment with your problem-solving style, core interests, and cognitive inclinations.`;
      }

      return {
        careerId,
        career,
        suitability,
        rawScore,
        whyItMatches
      };
    });

    // Sort descending by suitability score
    results.sort((a, b) => b.suitability - a.suitability);
    return results;
  }
}

export const store = new Store();
