import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Singh",
      role: "Patient",
      content: "The AI symptom checker helped me understand my health condition better. The telemedicine feature is so convenient!",
      avatar: "🧑‍⚕️",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Regular User",
      content: "Excellent platform with responsive doctors. The yoga section has really helped my stress management.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Neha Sharma",
      role: "Patient",
      content: "The medicine information database is comprehensive. I trust this platform for health guidance.",
      avatar: "👩‍⚕️",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Regular User",
      content: "24/7 AI support is amazing! Quick responses and accurate information every time.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      role: "Patient",
      content: "Best healthcare platform I've used. The mental health resources are especially helpful.",
      avatar: "👩‍⚕️",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Regular User",
      content: "The booking system is seamless and the doctors are highly professional.",
      avatar: "👨‍⚕️",
      rating: 5,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/30 to-transparent relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Patient Stories</span>
            <span className="text-foreground"> & Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied patients and healthcare professionals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full border border-cyan-200/30 hover:border-cyan-400/50 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-lg font-medium mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
