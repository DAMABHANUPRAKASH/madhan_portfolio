import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionChatInput from '../SectionChatInput';

interface ProjectsSectionProps {
  onChatSubmit: (message: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onChatSubmit }) => {
  const projects = [
    {
      id: 1,
      title: 'Traffic Insights & Growth',
      description: 'E-Commerce analytics and insights',
      githubUrl: 'https://github.com/Madhan3718/Traffic-Insights-and-Growth-Narrative-for-an-E-Commerce',
      color: 'from-blue-500 to-cyan-500',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Automating Data Science',
      description: 'GenAI workflows automation',
      githubUrl: 'https://github.com/Madhan3718/Automating-Data-science-workflows-using-GenAI',
      color: 'from-purple-500 to-pink-500',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'AI Portfolio',
      description: 'Interactive AI-powered portfolio',
      githubUrl: 'https://github.com/Madhan3718/AI-Portfolio',
      color: 'from-green-500 to-emerald-500',
      icon: '💼'
    },
    {
      id: 4,
      title: 'Helmet Detection',
      description: 'Safety detection system',
      githubUrl: 'https://github.com/Madhan3718/Helmet',
      color: 'from-orange-500 to-red-500',
      icon: '🛡️'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">👨‍💻</div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
      </div>

      {/* Projects Grid - Smaller Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative bg-gradient-to-br ${project.color} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
          >
            <div className="flex flex-col items-center text-center h-full justify-between min-h-[120px]">
              <div className="text-3xl mb-2">{project.icon}</div>
              <div>
                <h3 className="text-sm font-bold mb-1 leading-tight">{project.title}</h3>
                <p className="text-white/80 text-xs">{project.description}</p>
              </div>
            </div>
            
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Github size={14} className="text-white/80" />
            </div>
          </a>
        ))}
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          You can check out all my projects above! Right now, I'm working on some exciting AI solutions and 
          tools that enhance user experience. If you want to know more about a specific project or what I'm 
          currently diving into, just let me know! What kind of projects are you curious about? 😄
        </p>
      </div>
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me about my projects..."
      />
    </div>
  );
};

export default ProjectsSection;