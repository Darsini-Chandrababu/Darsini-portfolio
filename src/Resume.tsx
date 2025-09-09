import React from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Target,
  BarChart3,
  PenTool,
  Edit3,
  Rss
} from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 shadow-2xl print:shadow-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Darsini C M</h1>
          <p className="text-xl mb-4">Digital Marketing Specialist | Content Writer | Data Analyst</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>darsinichandrababucm@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8870075612</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Salem, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <span>linkedin.com/in/darsini-chandrababu-666236250</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            High spirited and enthusiastic Digital Marketing professional with expertise in content writing, SEO, 
            analytics, and UI/UX design. Passionate about learning and contributing skills and creativity to uplift 
            organizations through data-driven strategies and compelling content creation. Proven track record in 
            digital marketing campaigns, technical documentation, and leadership roles.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">B.Tech - Computer Science and Business Systems</h3>
                <p className="text-purple-600 font-medium">Knowledge Institute Of Technology</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>2021 – 2025</p>
                <p className="font-semibold">CGPA: 7.92</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4 flex items-center gap-2">
            <Briefcase size={24} />
            Professional Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-300 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Digital Marketing Intern</h3>
                  <p className="text-purple-600 font-medium">VCodez, Chennai</p>
                </div>
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Calendar size={14} />
                  July 2025 - Present
                </span>
              </div>
              <p className="text-gray-700">Currently working on digital marketing strategies and content creation</p>
            </div>

            <div className="border-l-4 border-purple-300 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Digital Marketing Intern</h3>
                  <p className="text-purple-600 font-medium">AIC Raise, Coimbatore</p>
                </div>
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Calendar size={14} />
                  2024
                </span>
              </div>
              <p className="text-gray-700">Created marketing posters, content, videos & organized promotional events</p>
            </div>

            <div className="border-l-4 border-purple-300 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Web Development Intern</h3>
                  <p className="text-purple-600 font-medium">Eduphoenix Solutions</p>
                </div>
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Calendar size={14} />
                  2024
                </span>
              </div>
              <p className="text-gray-700">Built responsive HTML pages & developed portfolio websites</p>
            </div>

            <div className="border-l-4 border-purple-300 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Power BI Intern</h3>
                  <p className="text-purple-600 font-medium">PCI LLP</p>
                </div>
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Calendar size={14} />
                  2024
                </span>
              </div>
              <p className="text-gray-700">Developed interactive dashboards and data visualization solutions</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Core Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-purple-600">Digital Marketing & Content</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <PenTool size={16} className="text-pink-500" />
                    Content Writing
                  </span>
                  <span className="text-sm font-semibold">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Target size={16} className="text-green-500" />
                    SEO
                  </span>
                  <span className="text-sm font-semibold">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <BarChart3 size={16} className="text-blue-500" />
                    Digital Marketing
                  </span>
                  <span className="text-sm font-semibold">90%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-600">Technical Skills</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Code size={16} className="text-orange-500" />
                    HTML & CSS
                  </span>
                  <span className="text-sm font-semibold">80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>UI/UX Design</span>
                  <span className="text-sm font-semibold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Public Speaking</span>
                  <span className="text-sm font-semibold">88%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-purple-600">Digital Marketing Projects</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Edit3 size={14} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span><strong>Governor Monthly Letter</strong> - Rotary Edition 2024-25 content creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target size={14} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>AIC Raise Marketing</strong> - Designed posters, content, and promotional videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <PenTool size={14} className="text-indigo-500 mt-1 flex-shrink-0" />
                  <span><strong>Freelance Content Writing</strong> - Magizham OLC School digital marketing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-600">Technical Projects</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Code size={14} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Agri Machinery Rental</strong> - Java-based rental platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>Pizzeria Website</strong> - Interactive food ordering system</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  <span><strong>Power BI Dashboards</strong> - Interactive data visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4 flex items-center gap-2">
            <Award size={24} />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <BarChart3 className="mx-auto mb-2 text-blue-600" size={24} />
              <h3 className="font-semibold text-sm">Google Data Analytics</h3>
              <p className="text-xs text-gray-600">Google & Coursera</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <BarChart3 className="mx-auto mb-2 text-pink-600" size={24} />
              <h3 className="font-semibold text-sm">Business Analytics</h3>
              <p className="text-xs text-gray-600">Internshala</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <BarChart3 className="mx-auto mb-2 text-green-600" size={24} />
              <h3 className="font-semibold text-sm">Microsoft Power BI</h3>
              <p className="text-xs text-gray-600">PCI LLP, Salem</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Award size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>District Editorial Head – Rotaract Organization RID2982</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Chartered Secretary – Rotaract Club of Salem Metropolis</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>1st Prize – Intra-college Poetry Competition</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Award size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Winner – Intra-college Hackathon (₹10,000 Cash Prize)</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Organizer – National Level Symposium Cohort '24</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>2nd Prize – Marketing Event (Govt. College of Engineering)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Online Presence */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Online Presence
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Edit3 size={16} className="text-purple-500" />
              <span>Medium: @darsinichandrababucm</span>
            </div>
            <div className="flex items-center gap-2">
              <Rss size={16} className="text-cyan-500" />
              <span>Blog: darsiniwrites.blogspot.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} className="text-blue-600" />
              <span>LinkedIn: darsini-chandrababu-666236250</span>
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section>
          <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Professional Development
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700">Cyber Security Workshop</h3>
              <p className="text-sm text-gray-600">Briskinfosec Technology</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700">Conversational Data Analytics</h3>
              <p className="text-sm text-gray-600">LatentView Analytics</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;