import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Statistics() {
  const [counts, setCounts] = useState({
    patients: 0,
    doctors: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const targets = { patients: 5000, doctors: 100, satisfaction: 98 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        patients: Math.floor(targets.patients * progress),
        doctors: Math.floor(targets.doctors * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: `${counts.patients}+`, label: "Patients Assisted", color: "from-red-500 to-pink-500" },
    { value: `${counts.doctors}+`, label: "Healthcare Professionals", color: "from-blue-500 to-cyan-500" },
    { value: "24/7", label: "AI Support", color: "from-purple-500 to-pink-500" },
    { value: `${counts.satisfaction}%`, label: "Patient Satisfaction", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-cyan-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join our growing community of patients and healthcare professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="glass-effect p-8 rounded-2xl border border-white/30 backdrop-blur-xl">
                <h3 className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
