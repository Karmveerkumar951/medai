import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-32">

      {/* Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">
              <Sparkles size={16} />
              AI Powered Healthcare Platform
            </div>

            <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight">
              Healthcare
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                Beyond Boundaries
              </span>
            </h1>

            <p className="text-slate-400 text-xl mt-8 max-w-xl">
              AI symptom analysis, mental wellness support,
              telemedicine consultations and personalized healthcare
              powered by intelligent technology.
            </p>

            <div className="flex gap-4 mt-10">
              <Link
                to="/ai-assistant"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Start Assessment
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/telemedicine"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white"
              >
                Book Doctor
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-14">
              {[
                ["5000+", "Patients"],
                ["100+", "Doctors"],
                ["98%", "Success"],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-5"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item[0]}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[140px] rounded-full" />

            <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10">

              <div className="flex justify-center mb-8">
                <Brain
                  className="text-cyan-400"
                  size={220}
                  strokeWidth={1}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/[0.05] p-5 rounded-3xl">
                  <ShieldCheck className="text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold">
                    Secure Care
                  </h4>
                </div>

                <div className="bg-white/[0.05] p-5 rounded-3xl">
                  <Brain className="text-cyan-400 mb-3" />
                  <h4 className="text-white font-semibold">
                    AI Analysis
                  </h4>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}