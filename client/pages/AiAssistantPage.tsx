import { useState } from "react";
import { motion } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Send, Loader, AlertCircle } from "lucide-react";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Welcome to MedAI 👋

I can help with:

• Symptom analysis
• Mental health guidance
• Yoga recommendations
• Medicine information
• Health FAQs
• Lifestyle advice

How can I assist you today?`,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const currentMessage = inputValue;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const result = await model.generateContent(`
You are MedAI, an advanced AI healthcare assistant.

IMPORTANT RULES:
- Provide educational healthcare information only.
- Never claim to diagnose diseases.
- Recommend professional medical consultation when needed.
- For emergencies advise immediate emergency care.
- Keep responses clear and helpful.

Mental Health Specialist:
If user mentions depression, anxiety, stress, panic attacks, insomnia, mental health issues, recommend:

Dr. Jai Ranjan Ram
Apollo Hospital
Psychiatry & Psychology
22+ Years Experience
MBBS, MD, MRCPsych, CCST
Phone: +91 98312 16340
Timings: 9:00 AM – 4:00 PM (Mon–Sun)

User Question:
${currentMessage}
`);

      const response = result.response.text();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error: any) {
      console.error("Gemini Error:", error);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Unable to connect to Gemini AI. Please verify your API key and internet connection.",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-mint to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            AI Health Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chat with our intelligent AI for instant health guidance, symptom analysis, and wellness recommendations.
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl border border-cyan-200/50 overflow-hidden h-96 sm:h-[600px] flex flex-col"
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] lg:max-w-[75%] px-4 py-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-teal-700 to-cyan-500 text-white rounded-br-none"
                      : "glass-effect text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {message.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-effect px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin text-teal-700" />
                  <span className="text-sm text-muted-foreground">AI is typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="px-6 py-3 border-t border-cyan-200/30 bg-yellow-50/50 dark:bg-yellow-900/20">
            <div className="flex gap-2 text-xs text-yellow-700 dark:text-yellow-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>
                This AI assistant is for educational purposes only and should not replace professional medical advice.
              </p>
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-cyan-200/30 p-4 bg-white/50 dark:bg-slate-800/50"
          >
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about your health..."
                className="flex-1 bg-background border border-cyan-200/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-2 bg-gradient-to-r from-teal-700 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-center text-muted-foreground mb-4 font-semibold">
            Try asking about:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Symptom Analysis",
              "Mental Health Tips",
              "Yoga Recommendations",
              "Medicine Information",
            ].map((topic, index) => (
              <button
                key={index}
                onClick={() => setInputValue(topic)}
                className="glass-effect p-4 rounded-lg border border-cyan-200/50 hover:border-cyan-400/50 text-foreground font-medium text-sm hover:scale-105 transition-transform"
              >
                {topic}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}