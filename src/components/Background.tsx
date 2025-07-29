import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-6000"></div>
        
        {/* Cursor-following light effect */}
        <div 
          className="absolute w-96 h-96 pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(236, 72, 153, 0.08) 50%, 
              transparent 70%)`
          }}
        />
        
        {/* Additional cursor effects */}
        <div 
          className="absolute w-64 h-64 pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            background: `radial-gradient(circle, 
              rgba(34, 197, 94, 0.1) 0%, 
              rgba(251, 191, 36, 0.08) 40%, 
              transparent 70%)`
          }}
        />
        
        {/* Sparkle effect */}
        <div 
          className="absolute w-32 h-32 pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 30%, 
              transparent 60%)`
          }}
        />
      </div>
    </div>
  );
};

export default Background;