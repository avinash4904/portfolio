import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Menu, X, MapPin, Phone, Award, BookOpen } from 'lucide-react';
import myImage from "./assets/Holi.jpeg"
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3}
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

 const skills = [
  { name: 'React.js', level: 95, from: 'from-blue-500', to: 'to-cyan-400' },
  { name: 'JavaScript', level: 90, from: 'from-yellow-500', to: 'to-orange-400' },
  { name: 'Node.js/Express.js', level: 88, from: 'from-green-500', to: 'to-emerald-400' },
  { name: 'Python', level: 85, from: 'from-purple-500', to: 'to-pink-400' },
  { name: 'C++', level: 80, from: 'from-red-500', to: 'to-pink-400' },
  { name: 'MongoDB', level: 85, from: 'from-green-600', to: 'to-green-400' },
  { name: 'MySQL', level: 82, from: 'from-blue-600', to: 'to-blue-400' },
  { name: 'AWS/Cloud', level: 75, from: 'from-orange-500', to: 'to-yellow-400' }
];


  const projects = [
    {
      title: 'RideEase – Smart Ride-Hailing App',
      description: 'Full-stack ride-hailing application with React.js frontend and Node.js backend. Features Google Maps integration, real-time tracking, and dynamic fare estimation.',
      tech: ['React.js', 'Node.js', 'Google Maps API', 'Real-time Tracking'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400',
      date: 'March 2025',
      features: ['Route optimization', 'Driver authentication', 'Payment management', 'Real-time tracking'],
      link: 'https://rideease25.netlify.app/',
      link2: 'https://github.com/AshutoshMadhesiya/RideEase'
    },
    {
      title: 'Nestora – Airbnb-Lite Platform',
      description: 'Full-stack accommodation platform inspired by Airbnb with React.js frontend and Node.js/Express backend. Includes secure authentication and interactive maps.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
      date: 'February 2025',
      features: ['User authentication', 'RESTful APIs', 'Google Maps integration', 'Responsive design'],
        link: 'https://rideease25.netlify.app/',
      link2: 'https://github.com/avinash4904/nestora'
    
      
    },
    {
      title: 'Autonomous Vehicle Control System',
      description: 'Arduino-based control system for self-driving car prototype with mechanical actuation and virtual delay implementation for smooth operation.',
      tech: ['Arduino', 'C++', 'Motor Drivers', 'Sensor Integration', 'Embedded Systems'],
      image: 'https://static.toiimg.com/thumb/msid-95870900,imgsize-1577577,width-400,height-225,resizemode-72/95870900.jpg',
      date: 'September 2024',
      features: ['Non-blocking control', 'Real-time operation', 'Mechanical integration', 'System efficiency']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-1.5xl text-green font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <i>Hii...</i>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-white hover:scale-105'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
              <img
                src={myImage}
                alt="My Logo"
                className="w-full h-full object-cover rounded-full bg-slate-900"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Avinash Gupta
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            B.Tech. Mechanical Engineering Student & Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            MNNIT Allahabad • Crafting innovative web solutions with React, Node.js, and modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={18} />
              <span>Prayagraj, UP</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone size={18} />
              <span>+91-7905336348</span>
            </div>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text ">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Engineering Student & Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate B.Tech. Mechanical Engineering student at MNNIT Allahabad with a strong
                inclination towards software development. My journey combines the analytical thinking of
                engineering with the creativity of modern web development.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in full-stack development using React.js and Node.js, with experience in
                building scalable web applications, autonomous vehicle control systems, and solving
                complex algorithmic problems. I'm also an active member of the Robotics Club and
                Self-Driving Car Team.
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1710</div>
                  <div className="text-sm text-gray-400">LeetCode Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1700+</div>
                  <div className="text-sm text-gray-400">Chess Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">586</div>
                  <div className="text-sm text-gray-400">Best Global Rank</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Code className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-white font-semibold">Full Stack Development</div>
                      <div className="text-gray-400 text-sm">React.js, Node.js, MongoDB</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Palette className="text-purple-400" size={24} />
                    <div>
                      <div className="text-white font-semibold">Problem Solving</div>
                      <div className="text-gray-400 text-sm">Competitive Programming</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="text-yellow-400" size={24} />
                    <div>
                      <div className="text-white font-semibold">Robotics & AI</div>
                      <div className="text-gray-400 text-sm">Autonomous Vehicle Control</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text ">
            Education
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <BookOpen className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">B.Tech. Mechanical Engineering</h3>

                  </div>
                  <p className="text-gray-300 mb-1">Motilal Nehru National Institute of Technology, Allahabad</p>

                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <BookOpen className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">Class 12th</h3>
                    <span className="text-cyan-400 font-semibold">Percentage: 90.8% (CBSE)</span>
                  </div>
                  <p className="text-gray-300 mb-1">Central Hindu Boys School</p>
                  <p className="text-gray-400 text-sm">2021</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <BookOpen className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">Class 10th</h3>
                    <span className="text-cyan-400 font-semibold">Percentage: 96% (CBSE)</span>
                  </div>
                  <p className="text-gray-300 mb-1">St. Joseph's School</p>
                  <p className="text-gray-400 text-sm">2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text ">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.from} ${skill.to} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>


          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Cloud & DevOps</h3>
              <div className="text-gray-300 space-y-2">
                <div>AWS, Firebase</div>
                <div>Docker, Git/GitHub</div>
                <div>GitHub Actions</div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 text-center">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Tools</h3>
              <div className="text-gray-300 space-y-2">
                <div>VS Code</div>
                <div>Postman</div>
                <div>Arduino IDE</div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 text-center">
              <h3 className="text-lg font-semibold text-green-400 mb-4">Soft Skills</h3>
              <div className="text-gray-300 space-y-2">
                <div>Problem-Solving</div>
                <div>Team Collaboration</div>
                <div>Code Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text ">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <span className="text-cyan-400 text-sm font-semibold">{project.date}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                        <Github size={16} />
                        <a
                          href={project.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:underline"
                        >
                          View Code
                        </a>

                      </button>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <ExternalLink size={16} />
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:underline"
                        >
                          Watch it.
                        </a>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text ">
            Let's Connect
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to collaborate on exciting projects or discuss opportunities?
              I'm always open to connecting with fellow developers, innovators, and tech enthusiasts!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Achievements</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <Award className="text-yellow-400" size={20} />
                    <span className="text-gray-300">LeetCode best Global Rank 586</span>
                  </div>
                  <a
                    href="https://leetcode.com/u/avinash0824/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-green-300 transition"
                  >
                    <Code className="text-green-400" size={22} />
                    <span className="text-gray-300 ">Top 13% LeetCoder (1710 rating)</span>
                  </a>

                  <div className="flex items-center space-x-3">
                    <Zap className="text-purple-400" size={20} />
                    <span className="text-gray-300">Chess Rating 1700+</span>
                  </div>
                  <a
                    href="https://docs.google.com/document/d/1DtQAQrDl-bjDf1Mu_34E0jmQEdQHOWo6iXqOOF1qsy8/edit?tab=t.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-green-300 transition"
                  >
                    <Code className="text-green-400" size={20} />
                    <span className="text-gray-300 ">Presented Spider Bot in Robo Expo (2Feb 2024)</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <Award className="text-purple-400" size={30} />
                    <span className="text-gray-300">Awarded for Innovative Writing at DST Inspire Science Camp (Dec2019-Jan20)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Activities</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Robotics Club Member</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Self-Driving Car Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Chess & Football Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:022avinashgupta@gmail.com"
                className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>022avinashgupta@gmail.com</span>
              </a>

              <a
                href="tel:+917905336348"
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                <span>+91-7905336348</span>
              </a>

              <div className="flex space-x-6">
                <a
                  href="https://github.com/avinash4904"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/avinash-gupta-1b2b90257"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>Also available at: avinash.20226040@mnnit.ac.in</p>
              <p>Roll No.: 20226040 • MNNIT Allahabad, Prayagraj</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Avinash Gupta. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;