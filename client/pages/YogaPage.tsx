import { motion } from "framer-motion";
import { Play, Clock, TrendingDown } from "lucide-react";

interface YogaPose {
  id: number;
  name: string;
  category: string;
  benefits: string[];
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  instructions: string[];
}

const yogaPoses: YogaPose[] = [
  {
    id: 1,
    name: "Balasana",
    category: "Stress Relief",
    benefits: ["Calms the mind", "Stretches back", "Reduces stress"],
    duration: "30-60 seconds",
    difficulty: "Beginner",
    instructions: [
      "Kneel on the floor",
      "Sit hips back to heels",
      "Fold forward with arms extended",
      "Breathe deeply",
    ],
  },
  {
    id: 2,
    name: "Sukhasana",
    category: "Stress Relief",
    benefits: ["Calms anxiety", "Opens hips", "Improves posture"],
    duration: "1-5 minutes",
    difficulty: "Beginner",
    instructions: [
      "Sit cross-legged on floor",
      "Keep spine straight",
      "Place hands on knees",
      "Focus on breathing",
    ],
  },
  {
    id: 3,
    name: "Pranayama",
    category: "Stress Relief",
    benefits: ["Controls breathing", "Reduces anxiety", "Increases energy"],
    duration: "5-10 minutes",
    difficulty: "Beginner",
    instructions: [
      "Sit comfortably",
      "Close right nostril",
      "Breathe in from left",
      "Switch sides and repeat",
    ],
  },
  {
    id: 4,
    name: "Bhujangasana",
    category: "Back Pain",
    benefits: ["Strengthens back", "Opens chest", "Improves flexibility"],
    duration: "15-30 seconds",
    difficulty: "Intermediate",
    instructions: [
      "Lie on stomach",
      "Place palms under shoulders",
      "Push chest up",
      "Keep legs on ground",
    ],
  },
  {
    id: 5,
    name: "Cat Cow Pose",
    category: "Back Pain",
    benefits: ["Stretches spine", "Relieves tension", "Improves mobility"],
    duration: "30 seconds per round",
    difficulty: "Beginner",
    instructions: [
      "Start on hands and knees",
      "Arch back (cow pose)",
      "Round spine (cat pose)",
      "Alternate smoothly",
    ],
  },
  {
    id: 6,
    name: "Anulom Vilom",
    category: "Anxiety",
    benefits: ["Calms mind", "Reduces anxiety", "Balances energy"],
    duration: "5-10 minutes",
    difficulty: "Beginner",
    instructions: [
      "Sit comfortably",
      "Alternate nostril breathing",
      "Breathe in one side",
      "Breathe out other side",
    ],
  },
  {
    id: 7,
    name: "Meditation",
    category: "Anxiety",
    benefits: ["Inner peace", "Reduces stress", "Improves focus"],
    duration: "10-30 minutes",
    difficulty: "Beginner",
    instructions: [
      "Sit quietly",
      "Close eyes",
      "Focus on breathing",
      "Let thoughts pass",
    ],
  },
  {
    id: 8,
    name: "Surya Namaskar",
    category: "Depression",
    benefits: ["Boosts mood", "Energizes body", "Improves circulation"],
    duration: "10-15 minutes",
    difficulty: "Intermediate",
    instructions: [
      "Stand with hands in prayer",
      "Flow through 12 poses",
      "Synchronize with breath",
      "Repeat 5-10 rounds",
    ],
  },
];

const categories = ["Stress Relief", "Back Pain", "Anxiety", "Depression"];

export default function YogaPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Yoga Therapy</span>
            <span className="text-foreground"> for Wellness</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guided yoga sessions for stress relief, fitness, and mental wellness
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-4 rounded-lg border border-cyan-200/50 hover:border-cyan-400/50 font-semibold text-teal-700 transition-all"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Yoga Poses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {yogaPoses.map((pose) => (
            <motion.div key={pose.id} variants={itemVariants}>
              <div className="glass-effect rounded-2xl border border-cyan-200/50 overflow-hidden hover:border-cyan-400/50 transition-all h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative bg-gradient-to-br from-purple-400 to-pink-400 h-48 flex items-center justify-center group cursor-pointer overflow-hidden">
                  <div className="text-6xl">🧘</div>
                  <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white fill-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pose.name}
                  </h3>

                  <div className="flex gap-2 mb-4">
                    <span className="text-xs px-3 py-1 bg-teal-50 text-teal-700 rounded-full font-semibold">
                      {pose.category}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      pose.difficulty === "Beginner"
                        ? "bg-green-50 text-green-700"
                        : pose.difficulty === "Intermediate"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-red-50 text-red-700"
                    }`}>
                      {pose.difficulty}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{pose.duration}</span>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4 flex-1">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Benefits:
                    </p>
                    <ul className="text-sm space-y-1">
                      {pose.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <TrendingDown className="w-3 h-3 text-cyan-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-700 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-sm">
                    View Instructions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
