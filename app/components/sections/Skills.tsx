'use client';

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiTailwindcss, SiGit, SiVercel } from 'react-icons/si';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal(); 
  const skills = [
    { name: 'HTML5', icon: SiHtml5, level: 'Advanced' },
    { name: 'CSS3', icon: SiCss3, level: 'Advanced' },
    { name: 'JavaScript', icon: SiJavascript, level: 'Intermediate' },
    { name: 'React', icon: SiReact, level: 'Intermediate' },
    { name: 'Next.js', icon: SiNextdotjs, level: 'Intermediate' },
    { name: 'Node.js', icon: SiNodedotjs, level: 'Intermediate' },
    { name: 'MySQL', icon: SiMysql, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
    { name: 'Git', icon: SiGit, level: 'Intermediate' },
    { name: 'Vercel', icon: SiVercel, level: 'Intermediate' },
  ];

  const softSkills = [
    'Adaptability',
    'Time Management',
    'Problem Solving',
    'Team Collaboration',
    'Quick Learning',
    'Attention to Detail',
  ];

  return (
    <section ref={ref} id="skills" className={`min-h-screen flex items-center bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Skills & Expertise</h2>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group">
                  <IconComponent className="text-5xl mb-4 mx-auto" />
                  <h4 className="font-semibold text-center mb-1">{skill.name}</h4>
                  <p className="text-sm text-center text-gray-600 group-hover:text-gray-300">{skill.level}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill) => (
              <div key={skill} className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-all duration-300">
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-2 border-black p-8">
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            <span className="bg-black text-white px-6 py-2 text-lg">English</span>
            <span className="bg-black text-white px-6 py-2 text-lg">Tagalog</span>
            <span className="bg-black text-white px-6 py-2 text-lg">Iloco</span>
          </div>
        </div>
      </div>
    </section>
  );
}