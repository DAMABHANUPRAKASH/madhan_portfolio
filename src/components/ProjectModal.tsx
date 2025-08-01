import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  year: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Summary */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Summary</h3>
            <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Links</h3>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Project Images */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;