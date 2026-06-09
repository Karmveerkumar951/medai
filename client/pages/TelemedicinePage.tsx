import { motion } from "framer-motion";
import { Video, Clock, Zap, FileText, History, Lock } from "lucide-react";

export default function TelemedicinePage() {
  const features = [
    {
      icon: Video,
      title: "Online Consultations",
      description: "Face-to-face video consultations with qualified doctors from home",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Appointment Scheduling",
      description: "Easy booking with flexible time slots and instant confirmations",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive prescriptions directly on your device, sent to pharmacies",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: History,
      title: "Consultation History",
      description: "Keep track of all your medical consultations and health records",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Get quick responses from healthcare professionals 24/7",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "End-to-end encrypted consultations protecting your privacy",
      color: "from-red-500 to-pink-500",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Book Appointment",
      description: "Choose a doctor and select your preferred time slot",
    },
    {
      number: "2",
      title: "Complete Checkout",
      description: "Provide your health details and complete the payment",
    },
    {
      number: "3",
      title: "Join Video Call",
      description: "Click the link at the scheduled time to join the consultation",
    },
    {
      number: "4",
      title: "Get Prescription",
      description: "Receive digital prescription and health advice instantly",
    },
  ];

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
            <span className="gradient-text">Telemedicine Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with licensed doctors online for professional medical consultations from anywhere
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="glass-effect rounded-2xl border border-cyan-200/50 p-8 hover:border-cyan-400/50 transition-all h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">How It Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-effect rounded-2xl border border-cyan-200/50 p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-700 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-2xl text-teal-700">
                      →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl border border-cyan-200/50 p-12 text-center bg-gradient-to-br from-teal-700/10 to-cyan-500/10"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Consult a Doctor?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with experienced healthcare professionals in minutes. Your health is our priority.
          </p>
          <motion.a
            href="/doctors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-teal-700 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl transition-all text-lg"
          >
            Browse Doctors
          </motion.a>
        </motion.div>

        {/* Insurance & Safety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Licensed Doctors",
              description: "All our healthcare professionals are verified and licensed",
            },
            {
              title: "Data Privacy",
              description: "Your medical records are encrypted and comply with regulations",
            },
            {
              title: "Easy Refunds",
              description: "100% refund guarantee if you're not satisfied",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-effect rounded-xl border border-cyan-200/30 p-6"
            >
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
