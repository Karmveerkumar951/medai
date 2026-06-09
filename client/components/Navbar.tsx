import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Doctors", href: "/doctors" },
    { label: "AI Assistant", href: "/ai-assistant" },
    { label: "Yoga", href: "/yoga" },
    { label: "Medicines", href: "/medicines" },
    { label: "Telemedicine", href: "/telemedicine" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-cyan-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-700 to-cyan-500 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
              ❤️
            </div>
            <span className="hidden sm:block text-lg font-bold gradient-text">
              HealthCare+
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-teal-700 transition-colors hover:bg-teal-50/50 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/ai-assistant"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-700 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Chat with AI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-teal-50/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-teal-700" />
            ) : (
              <Menu className="w-6 h-6 text-teal-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyan-200/30 bg-white/50 dark:bg-slate-900/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:text-teal-700 hover:bg-teal-50/50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/ai-assistant"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full mt-4 px-4 py-2 bg-gradient-to-r from-teal-700 to-cyan-500 text-white font-medium rounded-lg text-center hover:shadow-lg transition-all"
              >
                Chat with AI
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
