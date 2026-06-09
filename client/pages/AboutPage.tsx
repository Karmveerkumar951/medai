import { motion } from "framer-motion";
import { Heart, Zap, Globe, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centric",
      description: "Putting patient health and satisfaction first in everything we do.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and technology for better healthcare.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality healthcare accessible to communities everywhere.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem for health and wellness.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About HealthCare+</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing healthcare through AI, compassion, and innovation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl border border-cyan-200/50 p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            To empower communities with accessible, affordable, and high-quality healthcare solutions through innovative AI technology and compassionate care.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that everyone deserves access to professional healthcare, whether they're in a bustling city or a remote community. Our platform combines the power of artificial intelligence with the expertise of healthcare professionals to bridge the gap.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-effect rounded-2xl border border-cyan-200/50 p-12 mb-16 bg-gradient-to-br from-teal-50/50 to-cyan-50/30"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A world where healthcare transcends boundaries—where technology and human expertise work together to provide personalized, preventive, and accessible care to every individual, regardless of location or circumstance.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Our Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl border border-cyan-200/50 p-8"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl border border-cyan-200/50 p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our dedicated team includes experienced healthcare professionals, biotechnology experts, and AI engineers working together to transform healthcare delivery.
          </p>
          <a href="/doctors" className="inline-block px-8 py-3 bg-gradient-to-r from-teal-700 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all">
            Meet Our Team
          </a>
        </motion.div>
      </div>
    </div>
  );
}
