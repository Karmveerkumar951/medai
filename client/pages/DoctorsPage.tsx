import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, Mail, Award } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  hospital: string;
  education: string[];
  phone: string;
  email?: string;
  availability: string;
  timings: string;
  qualifications?: string;
  registration?: string;
  avatar: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Jai Ranjan Ram",
    specialization: "Psychiatry & Psychology",
    experience: "22+ Years",
    hospital: "Apollo Hospital",
    education: ["MBBS", "MD", "MRCPsych", "CCST"],
    phone: "+91 98312 16340",
    availability: "Monday - Sunday",
    timings: "9:00 AM - 4:00 PM",
    avatar: "👨‍⚕️",
  },
  {
    id: 2,
    name: "Dr. Dipankar Chakraborty",
    specialization: "Consultant Psychiatrist",
    experience: "15+ Years",
    hospital: "Silchar Medical College & Hospital",
    education: ["MBBS", "DPM"],
    phone: "9435170171",
    email: "dipankar.dr@gmail.com",
    availability: "Monday - Friday",
    timings: "10:00 AM - 5:00 PM",
    qualifications: "Senior Resident Doctor at Regional Institute of Mental Health, Tezpur",
    registration: "AMC - 16732",
    avatar: "👨‍⚕️",
  },
];

const teamMembers = [
  {
    name: "Bornini Bhattacharya",
    course: "B.Tech Biotechnology",
    semester: "8th Semester",
    institute: "Techno India University",
    avatar: "👩‍🎓",
  },
  {
    name: "Rupkatha Bhattacharya",
    course: "B.Tech Biotechnology",
    semester: "8th Semester",
    institute: "Techno India University",
    avatar: "👩‍🎓",
  },
  {
    name: "Abhinanda Chatterjee",
    course: "B.Tech Biotechnology",
    semester: "8th Semester",
    institute: "Techno India University",
    avatar: "👨‍🎓",
  },
];

export default function DoctorsPage() {
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
      {/* Doctors Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet Our Healthcare</span>
            <span className="text-foreground"> Professionals</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced doctors and specialists ready to provide you with expert care
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={itemVariants}>
              <div className="glass-effect rounded-2xl border border-cyan-200/50 overflow-hidden hover:border-cyan-400/50 transition-all h-full">
                {/* Doctor Header */}
                <div className="bg-gradient-to-r from-teal-700 to-cyan-500 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-5xl mb-3">{doctor.avatar}</div>
                      <h3 className="text-2xl font-bold">{doctor.name}</h3>
                      <p className="text-cyan-100 font-semibold">
                        {doctor.specialization}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{doctor.experience}</p>
                      <p className="text-xs text-cyan-100">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 space-y-4">
                  {/* Hospital */}
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">
                      Hospital / Institution
                    </p>
                    <p className="font-medium">{doctor.hospital}</p>
                  </div>

                  {/* Education */}
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-2">
                      Education
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.education.map((edu, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                        >
                          {edu}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Availability
                      </p>
                      <p className="font-medium text-sm">{doctor.availability}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Timings
                      </p>
                      <p className="font-medium text-sm">{doctor.timings}</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  {doctor.qualifications && (
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-1">
                        Qualifications
                      </p>
                      <p className="text-sm">{doctor.qualifications}</p>
                    </div>
                  )}

                  {doctor.registration && (
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Registration
                      </p>
                      <p className="font-medium text-sm">{doctor.registration}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-cyan-200/30">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors font-semibold text-sm">
                      <Phone className="w-4 h-4" />
                      <span className="hidden sm:inline">Call</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-600 rounded-lg hover:bg-cyan-100 transition-colors font-semibold text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">Chat</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-700 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-sm">
                      <Calendar className="w-4 h-4" />
                      <span className="hidden sm:inline">Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Research & Development Team */}
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-teal-50/30 to-transparent rounded-3xl p-8 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Research & Development</span>
            <span className="text-foreground"> Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented biotechnology students driving innovation in healthcare
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="glass-effect rounded-2xl border border-cyan-200/50 p-8 text-center hover:border-cyan-400/50 transition-all">
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">
                      {member.course}
                    </span>
                  </p>
                  <p>{member.semester}</p>
                  <p className="font-semibold text-teal-700">{member.institute}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
