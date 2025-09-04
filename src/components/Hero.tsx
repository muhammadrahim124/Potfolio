import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin , Download } from 'lucide-react';
import { SiUpwork } from "react-icons/si";
import RahimCV from '../assets/RahimCV.pdf';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Muhammad Rahim
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-4 h-12 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
              {displayedText}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            Passionate about clean code, beautiful interfaces, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
              <span>View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
            
            <a
  href={RahimCV}
  download="Rahim-CV.pdf"
  className="group px-8 py-4 border-2 border-purple-500/30 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 hover:bg-purple-500/10 flex items-center space-x-2"
>
  <Download className="w-4 h-4" />
  <span>Download CV</span>
</a>

          </div>

          <div className="flex items-center justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/muhammadrahim124', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-rahim-aa664a252/', label: 'LinkedIn' },
              { icon: SiUpwork , href: 'https://www.upwork.com/freelancers/~01f28c18e1d293d64a', label: 'SiUpwork' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-100 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;