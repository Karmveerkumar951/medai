import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-700 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                ❤️
              </div>
              <span className="text-lg font-bold">HealthCare+</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities with AI-driven healthcare solutions for a healthier future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-cyan-400 transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/yoga" className="hover:text-cyan-400 transition-colors">
                  Yoga Program
                </Link>
              </li>
              <li>
                <Link to="/medicines" className="hover:text-cyan-400 transition-colors">
                  Medicine Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/telemedicine" className="hover:text-cyan-400 transition-colors">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="hover:text-cyan-400 transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Emergency: +91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>support@healthcare.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
          <p>&copy; 2024 HealthCare+. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-700 dark:text-yellow-400 text-xs">
          <p className="font-semibold mb-2">Medical Disclaimer:</p>
          <p>This AI assistant is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment.</p>
        </div>
      </div>
    </footer>
  );
}
