'use client';

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiTailwindcss, SiGit, SiPhp } from 'react-icons/si';

export default function ResumeSidebar() {
  const technicalSkills = [
    { name: 'HTML5', icon: SiHtml5, level: 'Advanced' },
    { name: 'CSS3', icon: SiCss3, level: 'Advanced' },
    { name: 'JavaScript', icon: SiJavascript, level: 'Intermediate' },
    { name: 'React', icon: SiReact, level: 'Intermediate' },
    { name: 'Next.js', icon: SiNextdotjs, level: 'Intermediate' },
    { name: 'PHP', icon: SiPhp, level: 'Intermediate' },
    { name: 'MySQL', icon: SiMysql, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
    { name: 'Git', icon: SiGit, level: 'Intermediate' },
  ];

  const softSkills = [
    'Adaptability',
    'Time Management',
    'Problem Solving',
    'Team Collaboration',
    'Quick Learning',
    'Attention to Detail',
  ];

  const languages = ['English', 'Tagalog', 'Iloco'];

  return (
    <aside className="bg-gray-50 p-8">
      <div className="space-y-8">
        
        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-3">
            {technicalSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="flex items-center gap-3">
                  <IconComponent className="text-2xl shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm">{skill.name}</span>
                      <span className="text-xs text-gray-600">{skill.level}</span>
                    </div>
                    <div className="h-1 bg-gray-300">
                      <div 
                        className="h-full bg-black transition-all duration-500"
                        style={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            SOFT SKILLS
          </h2>
          <ul className="space-y-2">
            {softSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-black">▸</span>
                <span className="text-sm font-medium">{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            LANGUAGES
          </h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang} className="bg-black text-white px-3 py-1 text-sm font-semibold">
                {lang}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            EDUCATION
          </h2>
          <div>
            <h3 className="font-bold">BS Information Technology</h3>
            <p className="text-sm text-gray-600">Ilocos Sur Polytechnic State College</p>
            <p className="text-sm text-gray-600">2022 - Present</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            CERTIFICATIONS
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">iSite National Conference</span>
              <p className="text-gray-600">Innovate 360 (2024)</p>
            </li>
            <li>
              <span className="font-semibold">Cyber Security</span>
              <p className="text-gray-600">Ethical Hacking (2024)</p>
            </li>
          </ul>
        </section>

      </div>
    </aside>
  );
}