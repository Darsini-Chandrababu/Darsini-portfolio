import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  Linkedin, 
  Code, 
  Palette, 
  BarChart3, 
  PenTool, 
  Mic,
  Award,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  Globe,
  Camera,
  Target,
  Zap,
  Star,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Send,
  Shield,
  MessageCircle,
  Sun,
  Moon,
  Search,
  Edit3,
  FileText,
  BookOpen,
  Rss
} from 'lucide-react';
import darsiniPhoto from './darsini.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: 'Content Writing', icon: PenTool, level: 95, color: 'from-pink-400 to-rose-500' },
    { name: 'SEO', icon: Search, level: 92, color: 'from-green-400 to-emerald-500' },
    { name: 'Digital Marketing', icon: BarChart3, level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'UI/UX Design', icon: Palette, level: 85, color: 'from-purple-400 to-indigo-500' },
    { name: 'HTML & CSS', icon: Code, level: 80, color: 'from-orange-400 to-yellow-500' },
    { name: 'Public Speaking', icon: Mic, level: 88, color: 'from-red-400 to-pink-500' }
  ];

  const certifications = [
    {
      title: 'Google Data Analytics',
      provider: 'Google & Coursera',
      icon: BarChart3,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Business Analytics',
      provider: 'Internshala',
      icon: TrendingUp,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Foundation of Microsoft Power BI',
      provider: 'PCI LLP, Salem',
      icon: Globe,
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const digitalMarketingProjects = [
    {
      title: 'Governor Monthly Letter',
      tech: 'Content Writing',
      description: 'Rotary Edition 2024-25 - Official newsletter content creation and editorial management',
      gradient: 'from-emerald-400 to-cyan-500',
      icon: Edit3
    },
    {
      title: 'Technical Documentation & Blog Writing',
      tech: 'Content Strategy',
      description: 'Comprehensive blog writing and technical documentation',
      gradient: 'from-purple-400 to-pink-500',
      icon: FileText,
      link: 'https://darsiniwrites.blogspot.com/'
    },
    {
      title: 'Digital Marketing Content for AIC Raise',
      tech: 'Creative Marketing',
      description: 'Designed posters, content, and videos for marketing campaigns and promotional events',
      gradient: 'from-orange-400 to-red-500',
      icon: Target
    },
    {
      title: 'Freelance Project - Content Writing',
      tech: 'Content Writing',
      description: 'Magizham OLC School - Digital marketing content creation and strategy development',
      gradient: 'from-indigo-400 to-purple-500',
      icon: PenTool
    }
  ];

  const academicProjects = [
    {
      title: 'Rental Website for Agri Machinery',
      tech: 'Java',
      description: 'Developed a comprehensive rental platform for agricultural tools and machinery',
      gradient: 'from-green-400 to-teal-500',
      icon: Code
    },
    {
      title: 'Food Order Website (Pizzeria)',
      tech: 'HTML & CSS',
      description: 'Created an interactive pizza ordering website with modern UI/UX',
      gradient: 'from-blue-400 to-indigo-500',
      icon: Globe
    },
    {
      title: 'Interactive Power BI Dashboards',
      tech: 'Power BI',
      description: 'Built dynamic dashboards for data visualization and business insights',
      gradient: 'from-purple-400 to-blue-500',
      icon: BarChart3
    }
  ];

  const experiences = [
    {
      role: 'Digital Marketing Intern',
      company: 'VCodez, Chennai',
      period: 'July 2025 - Present',
      description: 'Currently working on digital marketing strategies and content creation',
      icon: Target,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      role: 'Digital Marketing Intern',
      company: 'AIC Raise, Coimbatore',
      period: '2024',
      description: 'Created marketing posters, content, videos & organized promotional events',
      icon: Target,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      role: 'Web Development Intern',
      company: 'Eduphoenix Solutions',
      period: '2024',
      description: 'Built responsive HTML pages & developed portfolio websites',
      icon: Code,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      role: 'Power BI Intern',
      company: 'PCI LLP',
      period: '2024',
      description: 'Developed interactive dashboards and data visualization solutions',
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const achievements = [
    'District Editorial Head – Rotaract Organization RID2982',
    'Chartered Secretary – Rotaract Club of Salem Metropolis',
    '1st Prize – Intra-college Poetry Competition',
    'Winner – Intra-college Hackathon (₹10,000 Cash Prize)',
    'Organizer – National Level Symposium Cohort \'24',
    '2nd Prize – Marketing Event (Govt. College of Engineering, Salem)'
  ];

  const workshops = [
    { name: 'Cyber Security', company: 'Briskinfosec Technology', icon: Shield },
    { name: 'Conversational Data Analytics', company: 'LatentView Analytics', icon: MessageCircle }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900'
    }`}>
      {/* Floating Background Icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-20 left-10 animate-bounce ${isDarkMode ? 'text-pink-400/20' : 'text-pink-500/30'}`} style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <BarChart3 size={40} />
        </div>
        <div className={`absolute top-40 right-20 animate-pulse ${isDarkMode ? 'text-blue-400/20' : 'text-blue-500/30'}`} style={{ animationDelay: '1s' }}>
          <Target size={35} />
        </div>
        <div className={`absolute bottom-40 left-20 animate-bounce ${isDarkMode ? 'text-purple-400/20' : 'text-purple-500/30'}`} style={{ animationDelay: '2s', animationDuration: '4s' }}>
          <Users size={45} />
        </div>
        <div className={`absolute top-60 left-1/3 animate-pulse ${isDarkMode ? 'text-green-400/20' : 'text-green-500/30'}`} style={{ animationDelay: '1.5s' }}>
          <Search size={30} />
        </div>
        <div className={`absolute bottom-20 right-10 animate-bounce ${isDarkMode ? 'text-yellow-400/20' : 'text-yellow-500/30'}`} style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
          <Zap size={38} />
        </div>
        <div className={`absolute top-80 right-1/4 animate-pulse ${isDarkMode ? 'text-indigo-400/20' : 'text-indigo-500/30'}`} style={{ animationDelay: '2.5s' }}>
          <PenTool size={32} />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
          : 'bg-white/20 backdrop-blur-lg border-b border-gray-200/20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Darsini C M
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-pink-400 transition-colors duration-300 ${
                      activeSection === section ? 'text-pink-400' : isDarkMode ? 'text-white/80' : 'text-gray-700/80'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
                    : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-700'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-12 z-10 px-6 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Profile Photo */}
          <div className="relative group">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 p-1">
              <img 
                src={darsiniPhoto} 
                alt="Darsini C M Profile Photo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
          
          {/* Name and Description */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse leading-tight">
              Darsini C M
            </h1>
            <p className={`text-xl lg:text-2xl mb-8 leading-relaxed ${
              isDarkMode ? 'text-white/90' : 'text-gray-700/90'
            }`}>
              High spirited and enthusiastic person seeking to contribute my skills and creativity, passionate to learn and
uplift the organization that I work with the knowledge and wisdom gained.

            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 text-white"
            >
              Explore My Work
              <ChevronDown className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-pink-400/30 to-purple-500/30' 
            : 'bg-gradient-to-r from-pink-300/40 to-purple-400/40'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl animate-bounce ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-400/20 to-cyan-500/20' 
            : 'bg-gradient-to-r from-blue-300/30 to-cyan-400/30'
        }`} style={{ animationDuration: '6s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white/90' : 'text-gray-700'}`}>
                I'm a passionate Digital Marketing Intern with expertise in content writing, SEO, analytics, and UI/UX design. 
                My mission is to blend creativity with data-driven strategies to help brands grow and engage their audience.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
                With experience in content creation, digital marketing campaigns, and data analytics, I bring a unique 
                perspective that combines strategic thinking with creative storytelling to drive meaningful results.
              </p>
            </div>
            <div className="space-y-4">
              <div className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-white/10' 
                  : 'bg-gradient-to-r from-purple-100/80 to-pink-100/80 border-purple-200/30'
              }`}>
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-purple-400 mr-3" size={24} />
                  <span className="font-semibold text-purple-300">Education</span>
                </div>
                <div className={`space-y-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  <p className="font-semibold">B.Tech - Computer Science and Business Systems</p>
                  <p>Knowledge Institute Of Technology</p>
                  <p className="text-sm">2021 – 2025 | CGPA: 7.92 (*upto VII Sem)</p>
                </div>
              </div>
              <div className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-white/10' 
                  : 'bg-gradient-to-r from-blue-100/80 to-cyan-100/80 border-blue-200/30'
              }`}>
                <div className="flex items-center mb-3">
                  <MapPin className="text-blue-400 mr-3" size={24} />
                  <span className="font-semibold text-blue-300">Location</span>
                </div>
                <p className={isDarkMode ? 'text-white/80' : 'text-gray-700'}>Salem, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30' 
          : 'bg-gradient-to-r from-purple-50/50 to-pink-50/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-black/40 backdrop-blur-lg border-white/10 hover:border-white/20' 
                    : 'bg-white/60 backdrop-blur-lg border-gray-200/20 hover:border-gray-300/40'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className={`w-full rounded-full h-3 overflow-hidden ${
                  isDarkMode ? 'bg-white/10' : 'bg-gray-200/50'
                }`}>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className={`text-right mt-2 font-semibold ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`group rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-lg border-white/10 hover:border-white/20' 
                    : 'bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border-gray-200/20 hover:border-gray-300/40'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                  <cert.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{cert.title}</h3>
                <p className={`text-center ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{cert.provider}</p>
                <div className="mt-4 flex justify-center">
                  <Award className="text-yellow-400" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' 
          : 'bg-gradient-to-r from-blue-50/50 to-purple-50/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          
          {/* Digital Marketing Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Digital Marketing Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalMarketingProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 overflow-hidden relative ${
                    isDarkMode 
                      ? 'bg-black/40 backdrop-blur-lg border-white/10 hover:border-white/20' 
                      : 'bg-white/60 backdrop-blur-lg border-gray-200/20 hover:border-gray-300/40'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.tech}
                      </span>
                      <div className="flex items-center gap-2">
                        <project.icon size={20} className={isDarkMode ? 'text-white/60' : 'text-gray-600'} />
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`transition-colors duration-300 ${
                              isDarkMode ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-700'
                            }`}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Academic Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 overflow-hidden relative ${
                    isDarkMode 
                      ? 'bg-black/40 backdrop-blur-lg border-white/10 hover:border-white/20' 
                      : 'bg-white/60 backdrop-blur-lg border-gray-200/20 hover:border-gray-300/40'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.tech}
                      </span>
                      <project.icon size={20} className={isDarkMode ? 'text-white/60' : 'text-gray-600'} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`group rounded-2xl p-8 border transition-all duration-500 transform hover:scale-102 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-lg border-white/10 hover:border-white/20' 
                    : 'bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-lg border-gray-200/20 hover:border-gray-300/40'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <exp.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <span className={`flex items-center ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-semibold mb-3 flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </p>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{exp.description}</p>
                  </div>
                  <ChevronRight className={`transition-colors duration-300 group-hover:translate-x-2 ${
                    isDarkMode ? 'text-white/40 group-hover:text-pink-400' : 'text-gray-400 group-hover:text-pink-500'
                  }`} size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-green-900/30 to-teal-900/30' 
          : 'bg-gradient-to-r from-green-50/50 to-teal-50/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-black/40 backdrop-blur-lg border-white/10 hover:border-yellow-400/30' 
                    : 'bg-white/60 backdrop-blur-lg border-gray-200/20 hover:border-yellow-400/40'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Star size={16} className="text-white" />
                  </div>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-white/90 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Workshops
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.name}
                className={`group rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 text-center ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg border-white/10 hover:border-white/20' 
                    : 'bg-gradient-to-br from-indigo-100/80 to-purple-100/80 backdrop-blur-lg border-indigo-200/30 hover:border-indigo-300/50'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <workshop.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{workshop.name}</h3>
                <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>{workshop.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-pink-900/30 to-purple-900/30' 
          : 'bg-gradient-to-r from-pink-50/50 to-purple-50/50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:darsinichandrababucm@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 hover:border-pink-400/50' 
                      : 'bg-white/50 border-gray-200/20 hover:border-pink-400/60'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>darsinichandrababucm@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+918870075612"
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 hover:border-green-400/50' 
                      : 'bg-white/50 border-gray-200/20 hover:border-green-400/60'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>+91 8870075612</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/darsini-chandrababu-666236250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 hover:border-blue-400/50' 
                      : 'bg-white/50 border-gray-200/20 hover:border-blue-400/60'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>Connect with me</p>
                  </div>
                </a>

                <a 
                  href="https://medium.com/@darsinichandrababucm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 hover:border-purple-400/50' 
                      : 'bg-white/50 border-gray-200/20 hover:border-purple-400/60'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Edit3 size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Medium</p>
                    <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>Read my articles</p>
                  </div>
                </a>

                <a 
                  href="https://darsiniwrites.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 hover:border-cyan-400/50' 
                      : 'bg-white/50 border-gray-200/20 hover:border-cyan-400/60'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rss size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Blog</p>
                    <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>Darsini Writes</p>
                  </div>
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full p-4 rounded-xl backdrop-blur-lg border focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 focus:border-pink-400/50 text-white placeholder-white/50' 
                      : 'bg-white/50 border-gray-200/20 focus:border-pink-400/60 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full p-4 rounded-xl backdrop-blur-lg border focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 focus:border-pink-400/50 text-white placeholder-white/50' 
                      : 'bg-white/50 border-gray-200/20 focus:border-pink-400/60 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full p-4 rounded-xl backdrop-blur-lg border focus:outline-none transition-all duration-300 resize-none ${
                    isDarkMode 
                      ? 'bg-black/30 border-white/10 focus:border-pink-400/50 text-white placeholder-white/50' 
                      : 'bg-white/50 border-gray-200/20 focus:border-pink-400/60 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center gap-2 text-white"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 backdrop-blur-lg border-t ${
        isDarkMode 
          ? 'bg-black/50 border-white/10' 
          : 'bg-white/50 border-gray-200/20'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`mb-4 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
            © 2024 Darsini C M. Crafted with passion and creativity.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:darsinichandrababucm@gmail.com" className={`transition-colors duration-300 ${
              isDarkMode ? 'text-white/60 hover:text-pink-400' : 'text-gray-500 hover:text-pink-500'
            }`}>
              <Mail size={20} />
            </a>
            <a href="tel:+918870075612" className={`transition-colors duration-300 ${
              isDarkMode ? 'text-white/60 hover:text-green-400' : 'text-gray-500 hover:text-green-500'
            }`}>
              <Phone size={20} />
            </a>
            <a href="https://linkedin.com/in/darsini-chandrababu-666236250" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${
              isDarkMode ? 'text-white/60 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'
            }`}>
              <Linkedin size={20} />
            </a>
            <a href="https://medium.com/@darsinichandrababucm" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${
              isDarkMode ? 'text-white/60 hover:text-purple-400' : 'text-gray-500 hover:text-purple-500'
            }`}>
              <Edit3 size={20} />
            </a>
            <a href="https://darsiniwrites.blogspot.com/" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${
              isDarkMode ? 'text-white/60 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-500'
            }`}>
              <Rss size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;