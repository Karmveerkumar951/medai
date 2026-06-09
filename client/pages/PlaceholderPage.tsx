import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        <div className="glass-effect p-12 rounded-2xl border border-cyan-200/30">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This page is being built to perfection. Continue prompting us to customize and fill in this section with the exact features and content you need.
            </p>
            <div className="flex items-center justify-center gap-2 text-teal-700 font-semibold">
              <span>Ready to build this page?</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        </div>
      </motion.div>
    </div>
  );
}
