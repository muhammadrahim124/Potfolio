import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';
import { SiUpwork } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/muhammadrahim124', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-rahim-aa664a252/', label: 'LinkedIn' },
    { icon: SiUpwork, href: 'https://www.upwork.com/freelancers/~01f28c18e1d293d64a', label: 'SiUpwork' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-purple-500/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
          >
            <span className="text-purple-400 font-medium">Back to Top</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce group-hover:animate-pulse"></div>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Muhammad Rahim
            </h3>
            <p className="text-gray-400 text-sm">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Muhammad Rahim. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;