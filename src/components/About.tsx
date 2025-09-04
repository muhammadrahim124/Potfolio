import React, { useEffect, useRef, useState } from "react";
import { Code2, Palette, Zap, Heart } from "lucide-react";
import Rahim from "../assets/rahim.png";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless interactions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Dedicated to continuous learning and staying current with industry trends.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={Rahim}
                    alt="rahimImage"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="text-2xl font-bold text-center mb-4 text-purple-400">
                  Muhammad Rahim
                </h3>

                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  A passionate frontend developer with 4+ years of experience
                  creating modern, responsive web applications. I specialize in
                  React, JavaScript, and cutting-edge CSS techniques to bring
                  designs to life.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {["React.js", "JavaScript", "TypeScript", "Tailwind", "Bootstrap", "SASS"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group hover:transform hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
