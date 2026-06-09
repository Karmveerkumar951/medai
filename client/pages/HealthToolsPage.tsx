import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function HealthToolsPage() {
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<string | null>(null);

  const [waterWeight, setWaterWeight] = useState("");
  const [waterResult, setWaterResult] = useState<string | null>(null);

  const [calorieActivity, setCalorieActivity] = useState("sedentary");
  const [calorieWeight, setCalorieWeight] = useState("");
  const [calorieHeight, setCalorieHeight] = useState("");
  const [calorieAge, setCalorieAge] = useState("");
  const [calorieGender, setCalorieGender] = useState("male");
  const [calorieResult, setCalorieResult] = useState<string | null>(null);

  const calculateBMI = () => {
    if (bmiHeight && bmiWeight) {
      const heightM = parseFloat(bmiHeight) / 100;
      const bmi = parseFloat(bmiWeight) / (heightM * heightM);
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal weight";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
      setBmiResult(`${bmi.toFixed(1)} - ${category}`);
    }
  };

  const calculateWater = () => {
    if (waterWeight) {
      const liters = (parseFloat(waterWeight) * 0.033).toFixed(1);
      setWaterResult(`${liters} liters per day`);
    }
  };

  const calculateCalories = () => {
    if (calorieWeight && calorieHeight && calorieAge) {
      const w = parseFloat(calorieWeight);
      const h = parseFloat(calorieHeight);
      const a = parseFloat(calorieAge);
      
      let bmr = calorieGender === "male"
        ? 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a)
        : 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);

      const activityMultipliers: Record<string, number> = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9,
      };

      const tdee = Math.round(bmr * (activityMultipliers[calorieActivity] || 1.2));
      setCalorieResult(`${tdee} calories per day`);
    }
  };

  const tools = [
    {
      title: "BMI Calculator",
      icon: "📏",
      description: "Calculate your Body Mass Index",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Water Intake",
      icon: "💧",
      description: "Daily water intake recommendation",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Calorie Calculator",
      icon: "🔥",
      description: "Daily calorie requirements",
      color: "from-orange-500 to-red-500",
    },
  ];

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
            <span className="gradient-text">Health Tools</span>
            <span className="text-foreground"> & Calculators</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate and track your health metrics with our interactive tools
          </p>
        </motion.div>

        {/* Calculator Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* BMI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl border border-cyan-200/50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📏</div>
              <h2 className="text-2xl font-bold">BMI Calculator</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(e.target.value)}
                  placeholder="170"
                  className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(e.target.value)}
                  placeholder="70"
                  className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
              <button
                onClick={calculateBMI}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Calculate
              </button>
              {bmiResult && (
                <div className="mt-4 p-4 bg-blue-50/50 border border-blue-200/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">Your BMI</p>
                  <p className="text-2xl font-bold text-blue-600">{bmiResult}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Water Intake Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl border border-cyan-200/50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">💧</div>
              <h2 className="text-2xl font-bold">Water Intake</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Body Weight (kg)
                </label>
                <input
                  type="number"
                  value={waterWeight}
                  onChange={(e) => setWaterWeight(e.target.value)}
                  placeholder="70"
                  className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Recommended: 30-35 ml per kg of body weight
              </p>
              <button
                onClick={calculateWater}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Calculate
              </button>
              {waterResult && (
                <div className="mt-4 p-4 bg-cyan-50/50 border border-cyan-200/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">Daily Target</p>
                  <p className="text-2xl font-bold text-cyan-600">{waterResult}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Calorie Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl border border-cyan-200/50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🔥</div>
              <h2 className="text-2xl font-bold">Calories</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Gender
                  </label>
                  <select
                    value={calorieGender}
                    onChange={(e) => setCalorieGender(e.target.value)}
                    className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={calorieAge}
                    onChange={(e) => setCalorieAge(e.target.value)}
                    placeholder="30"
                    className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={calorieWeight}
                    onChange={(e) => setCalorieWeight(e.target.value)}
                    placeholder="70"
                    className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={calorieHeight}
                    onChange={(e) => setCalorieHeight(e.target.value)}
                    placeholder="170"
                    className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Activity Level
                </label>
                <select
                  value={calorieActivity}
                  onChange={(e) => setCalorieActivity(e.target.value)}
                  className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                >
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light Activity</option>
                  <option value="moderate">Moderate Activity</option>
                  <option value="active">Active</option>
                  <option value="veryActive">Very Active</option>
                </select>
              </div>
              <button
                onClick={calculateCalories}
                className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Calculate
              </button>
              {calorieResult && (
                <div className="mt-4 p-4 bg-orange-50/50 border border-orange-200/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">Daily Needs</p>
                  <p className="text-2xl font-bold text-orange-600">{calorieResult}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Coming Soon Tools */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Heart Health Risk Checker",
              description: "Assess your cardiovascular health",
              icon: "❤️",
            },
            {
              title: "Diabetes Risk Assessment",
              description: "Check your diabetes risk level",
              icon: "📊",
            },
          ].map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="glass-effect rounded-2xl border border-cyan-200/30 p-8 text-center"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {tool.title}
              </h3>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              <button className="px-6 py-2 border-2 border-teal-700 text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all">
                Coming Soon
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
