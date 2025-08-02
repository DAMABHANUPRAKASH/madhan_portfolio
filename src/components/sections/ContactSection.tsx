import React from 'react';
import { Mail, ExternalLink, Linkedin, Github, Target, Briefcase } from 'lucide-react';
import SectionChatInput from '../SectionChatInput';

interface ContactSectionProps {
  onChatSubmit: (message: string) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onChatSubmit }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">📞</div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
      </div>

      {/* Main Contact Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="text-2xl">👨‍💻</div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800">Madankumar Budidapalli</h3>
            <p className="text-gray-600">Data Application Engineer</p>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Available</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a
            href="mailto:madhankumarreddy3718@gmail.com"
            className="flex items-center space-x-3 bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-colors duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Mail size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-sm text-gray-600">madhankumarreddy3718@gmail.com</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/madankumarb37/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-colors duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Linkedin size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">LinkedIn</p>
              <p className="text-sm text-gray-600">madankumarb37</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500" />
          </a>

          <a
            href="https://github.com/Madhan3718"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors duration-200 group"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Github size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">GitHub</p>
              <p className="text-sm text-gray-600">Madhan3718</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-800" />
          </a>
        </div>

        {/* What I Bring */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-orange-600 mb-3">
            <Briefcase size={18} />
            <span className="font-semibold text-lg">What I Bring</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Real-world data engineering experience with expertise in AI/ML, data analytics, and automation. 
            I specialize in building data pipelines, creating insightful dashboards, and developing AI-powered 
            solutions that solve real business problems.
          </p>
        </div>

        {/* Goal */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-purple-600 mb-3">
            <Target size={18} />
            <span className="font-semibold text-lg">Goal</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Looking to join innovative teams working on data-driven solutions and AI applications. 
            I'm passionate about turning complex data into actionable insights and building tools 
            that make a real impact. Ready to contribute and grow! 🚀
          </p>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center">
        <p className="text-gray-700 leading-relaxed">
          You can reach me through the contact info above! Feel free to hit me up anytime, I'm always happy to chat! 😉 What's on your mind?
        </p>
      </div>
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me about opportunities or just say hi..."
      />
    </div>
  );
};

export default ContactSection;