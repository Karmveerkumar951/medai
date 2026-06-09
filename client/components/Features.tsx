import {
  Brain,
  Stethoscope,
  Heart,
  Pill,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  return (
    <section className="bg-[#050816] py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Healthcare Services
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            A unified ecosystem for modern healthcare.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Large Feature */}
          <div className="lg:col-span-2 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-xl rounded-[40px] p-10">

            <Brain
              className="text-cyan-400 mb-8"
              size={60}
            />

            <h3 className="text-white text-3xl font-bold mb-4">
              AI Symptom Intelligence
            </h3>

            <p className="text-slate-400 text-lg mb-8">
              Describe symptoms and receive intelligent,
              AI-powered healthcare insights instantly.
            </p>

            <button className="text-cyan-400 flex items-center gap-2">
              Explore
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Telemedicine */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
            <Stethoscope className="text-teal-400 mb-6" size={40} />
            <h3 className="text-white text-xl font-semibold mb-3">
              Telemedicine
            </h3>
            <p className="text-slate-400">
              Video consultations with specialists.
            </p>
          </div>

          {/* Mental Health */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
            <Heart className="text-pink-400 mb-6" size={40} />
            <h3 className="text-white text-xl font-semibold mb-3">
              Mental Wellness
            </h3>
            <p className="text-slate-400">
              Personalized emotional support.
            </p>
          </div>

          {/* Medicines */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
            <Pill className="text-orange-400 mb-6" size={40} />
            <h3 className="text-white text-xl font-semibold mb-3">
              Medicine Guide
            </h3>
            <p className="text-slate-400">
              Drug information and interactions.
            </p>
          </div>

          {/* Appointments */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
            <Calendar className="text-purple-400 mb-6" size={40} />
            <h3 className="text-white text-xl font-semibold mb-3">
              Smart Booking
            </h3>
            <p className="text-slate-400">
              Schedule appointments instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}