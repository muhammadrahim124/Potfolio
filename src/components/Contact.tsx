import React, { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        'service_0381u8h',   // 🔹 replace with your EmailJS service ID
        'template_6pbk9me',  // 🔹 replace with your EmailJS template ID
        formRef.current,
        'KGccu_hRq32s4eJji'    // 🔹 replace with your EmailJS public key
      );

      alert('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Zephyr Leap Office Near Nadir Chowk, Gilgit Pakistan',
      description: 'Available for remote work worldwide',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'sayanhunxai124@gmail.com',
      description: 'Response within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 (555) 629171',
      description: 'Available Mon-Fri, 9AM-9PM PST',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 relative bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Let's Work Together
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <p className={`text-gray-400 text-lg mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'
          }`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
  <div className="group relative">
    <input
      type="text"
      name="userName"
      id="userName"
      required
      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 peer"
      placeholder="Your Name"
    />
    <label
      htmlFor="userName"
      className="absolute left-4 -top-6 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-400"
    >
      Your Name
    </label>
  </div>

  <div className="group relative">
    <input
      type="email"
      name="userEmail"
      id="userEmail"
      required
      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 peer"
      placeholder="Your Email"
    />
    <label
      htmlFor="userEmail"
      className="absolute left-4 -top-6 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-400"
    >
      Your Email
    </label>
  </div>
</div>

<div className="group relative">
  <input
    type="text"
    name="userSubject"
    id="userSubject"
    required
    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 peer"
    placeholder="Subject"
  />
  <label
    htmlFor="userSubject"
    className="absolute left-4 -top-6 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-400"
  >
    Subject
  </label>
</div>

<div className="group relative">
  <textarea
    name="userMessage"
    id="userMessage"
    rows={6}
    required
    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 peer resize-none"
    placeholder="Your Message"
  />
  <label
    htmlFor="userMessage"
    className="absolute left-4 -top-6 text-sm text-purple-400 font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-400"
  >
    Your Message
  </label>
</div>


              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className={`w-4 h-4 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">Get In Touch</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're looking for a dedicated developer or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group hover:transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <info.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-200 mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-purple-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
