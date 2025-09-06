import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with React, Redux, and Stripe integration. Features real-time inventory, advanced filtering, and responsive design.',
      image: 'https://www.blaze.tv/themes/custom/blaze/images/fast/deal-masters-poster.jpg',
      technologies: ['React', 'Redux', 'TypeScript', 'Tailwind CSS' ],
      liveUrl: 'https://product-updated.netlify.app/',
      githubUrl: 'https://github.com/muhammadrahim124',
      featured: true,
    },
    {
      title: 'Charlie the Steak Game',
      description: 'Charlie the Steak is a hilarious and entertaining mobile game where players take control of a lively steak character in fun, quirky adventures.',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co8kt0.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://charlie-the-steak.netlify.app/',
      githubUrl: 'https://github.com/muhammadrahim124',
      featured: false,
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with beautiful visualizations, location-based forecasts, and responsive charts using Chart.js.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'OpenWeather API', 'Sass'],
      liveUrl: 'https://weather-application0.netlify.app/',
      githubUrl: 'https://github.com/muhammadrahim124',
      featured: false,
    },
    {
      title: 'AI-powered website',
      description: 'Built with modern web technologies, it combines intelligent assistance with productivity tools in one platform.',
      image: 'https://assets.sonary.com/wp-content/uploads/2023/12/05151618/AI-powered-websites-1.jpg',
      technologies: ['React.js', 'JavaScript', 'Bootstrap' ],
      liveUrl: 'https://mighty-octo.netlify.app',
      githubUrl: 'https://github.com/muhammadrahim124',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio website showcasing creative design and smooth interactions. Built with ReactJS',
      image: 'https://content.uideck.com/wp-content/uploads/2023/12/Personal-Website-Templates-15-1024x576.jpg',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://muhammadrahim.netlify.app',
      githubUrl: 'https://github.com/muhammadrahim124',
      featured: false,
    },
    {
      title: 'Leading Digital Assets Accounting Solutions',
      description: 'Enable financial workflows such as reconciliation, balance calculation, audit and reporting for Web3 assets from on-ramp to off-ramp',
      image: 'https://i.ytimg.com/vi/zBIazeBqCDM/sddefault.jpg',
      technologies: ['React', 'Web Audio API', 'Express.js', 'Socket.io'],
      liveUrl: 'https://www.cryptacount.com/',
      githubUrl: 'https://github.com/muhammadrahim124',
      featured: true,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <p className={`text-gray-400 text-lg mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 ${
                project.featured ? 'lg:col-span-2' : ''
              } ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;