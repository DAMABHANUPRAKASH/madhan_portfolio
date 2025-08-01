import React from 'react';
import { 
  Code, 
  Server, 
  Palette, 
  Brain, 
  Users,
  Globe,
  Database,
  Cpu,
  Layers,
  Zap,
  GitBranch,
  Monitor,
  Smartphone,
  Cloud,
  Shield,
  Search,
  MessageSquare,
  Target,
  Lightbulb,
  Heart,
  Eye
} from 'lucide-react';
import SectionChatInput from '../SectionChatInput';

interface SkillsSectionProps {
  onChatSubmit: (message: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onChatSubmit }) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', icon: Globe },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript/TypeScript', icon: Code },
        { name: 'Tailwind CSS', icon: Layers },
        { name: 'Bootstrap', icon: Layers },
        { name: 'Next.js', icon: Zap },
        { name: 'React', icon: Cpu },
        { name: 'Vercel AI SDK', icon: Brain },
        { name: 'Gsap', icon: Zap }
      ]
    },
    {
      title: 'Backend & Systems',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Unix', icon: Monitor },
        { name: 'C', icon: Code },
        { name: 'C++', icon: Code },
        { name: 'Python', icon: Code },
        { name: 'TypeScript', icon: Code },
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: GitBranch },
        { name: 'Docker', icon: Cloud },
        { name: 'GCP', icon: Cloud },
        { name: 'PostgreSQL', icon: Database }
      ]
    },
    {
      title: 'Design & Creative Tools',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', icon: Palette },
        { name: 'DaVinci Code', icon: Eye },
        { name: 'Illustrator', icon: Palette },
        { name: 'Canva', icon: Palette },
        { name: 'Keynote', icon: Monitor }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Communication', icon: MessageSquare },
        { name: 'Problem-Solving', icon: Target },
        { name: 'Adaptability', icon: Zap },
        { name: 'Teamwork', icon: Users },
        { name: 'Creativity', icon: Lightbulb },
        { name: 'Focus', icon: Target }
      ]
    },
    {
      title: 'AI & Fullstack Engineering',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      skills: [
        { name: 'LLM Providers (ChatGPT, Whisper, Groq, Mistral & Claude)', icon: Brain },
        { name: 'AI Agents', icon: Brain },
        { name: 'Prompt engineering', icon: MessageSquare },
        { name: 'Vector databases (Weaviate, Pinecone)', icon: Database },
        { name: 'RAG (Retrieval-Augmented Generation)', icon: Search },
        { name: 'Tool routing & calling', icon: Zap },
        { name: 'Hugging Face Transformers', icon: Brain },
        { name: 'Vercel AI SDK', icon: Brain },
        { name: 'Supabase', icon: Database },
        { name: 'Prisma', icon: Database },
        { name: 'Next.js', icon: Zap }
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">👨‍💻</div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
      </div>

      {/* Skills Categories - Simpler, Thematic */}
      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-4">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${category.color}`}>
                  <CategoryIcon size={18} className="text-white" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors duration-150"
                    >
                      <SkillIcon size={14} className="mr-1 text-blue-500" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Description */}
      <div className="text-center mt-10">
        <p className="text-gray-700 leading-relaxed">
          You can check out all my skills above! I've got a mix of hard and soft skills that help me tackle projects 
          like a champ. If you want to know more about a specific skill or how I use them, just ask! What skills 
          do you think are most important in tech? 🤔
        </p>
      </div>
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me about my skills and expertise..."
      />
    </div>
  );
};

export default SkillsSection;