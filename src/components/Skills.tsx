import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Database, Zap, Globe, Smartphone } from "lucide-react";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{
    [key: string]: number;
  }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 92, color: "from-blue-600 to-blue-400" },
        { name: "TypeScript", level: 90, color: "from-cyan-500 to-blue-500" },
        {
          name: "Tailwind CSS",
          level: 85,
          color: "from-green-500 to-emerald-500",
        },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        {
          name: "UI/UX Design",
          level: 88,
          color: "from-purple-500 to-pink-500",
        },
        { name: "Figma", level: 85, color: "from-purple-600 to-purple-400" },
        { name: "Animation", level: 80, color: "from-pink-500 to-rose-500" },
        { name: "Prototyping", level: 82, color: "from-rose-500 to-pink-500" },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 60, color: "from-green-600 to-green-400" },
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-500 to-orange-500",
        },
        { name: "Cloudinary", level: 80, color: "from-blue-700 to-blue-500" },
        { name: "MongoDB", level: 52, color: "from-green-700 to-green-500" },
      ],
    },
    {
      title: "Tools",
      icon: Zap,
      skills: [
        { name: "Git/GitHub", level: 90, color: "from-gray-600 to-gray-400" },
        { name: "Docker", level: 70, color: "from-blue-600 to-cyan-600" },
        { name: "AWS", level: 65, color: "from-orange-500 to-yellow-500" },
        {
          name: "Vite/Webpack",
          level: 88,
          color: "from-purple-600 to-blue-600",
        },
      ],
    },
  ];

  const coreCompetencies = [
    { name: "Frontend", value: 95, icon: Globe },
    { name: "Mobile", value: 50, icon: Smartphone },
    { name: "Backend", value: 55, icon: Database },
    { name: "DevOps", value: 70, icon: Zap },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate skill bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              animateCounter(skill.name, skill.level);
            });
          });

          // Animate core competencies
          coreCompetencies.forEach((item) => {
            animateCounter(item.name, item.value);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (key: string, target: number) => {
    let current = 0;
    const increment = target / 50; // speed
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedValues((prev) => ({ ...prev, [key]: current }));
    }, 20);
  };
  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            Skills & Expertise
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 group hover:transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${400 + categoryIndex * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <category.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 text-xs font-bold">
                        {Math.round(animatedValues[skill.name] || 0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${animatedValues[skill.name] || 0}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Circular Skills Indicators */}
        <div className="mt-16">
          <h3
            className={`text-2xl font-bold text-center mb-8 text-gray-200 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            Core Competencies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreCompetencies.map((item, index) => (
              <div
                key={item.name}
                className="text-center group transition-all duration-1000"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg
                    className="w-24 h-24 transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${
                        2 *
                        Math.PI *
                        40 *
                        (1 - (animatedValues[item.name] || 0) / 100)
                      }`}
                      className="transition-all duration-300 ease-out"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                  {item.name}
                </h4>
                <p className="text-purple-400 font-bold">
                  {Math.round(animatedValues[item.name] || 0)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
