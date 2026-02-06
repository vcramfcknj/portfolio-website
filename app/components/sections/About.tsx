'use client';

import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="about" className={`min-h-screen flex items-center bg-black text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Who I Am</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              I am a passionate Full-Stack Developer from the Philippines with a strong foundation in modern web technologies. Currently pursuing my Bachelor of Science in Information Technology at Ilocos Sur Polytechnic State College.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              My journey in tech has been driven by curiosity and a commitment to continuous learning. I specialize in building innovative web applications that combine functionality with exceptional user experience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-white pl-4">
                <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                <p className="text-gray-300">Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-300">Creating robust server-side applications and APIs with Node.js and database management with MySQL.</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <h4 className="text-xl font-semibold mb-2">AI Integration</h4>
                <p className="text-gray-300">Implementing AI-powered features and solutions to enhance application capabilities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">24</p>
            <p className="text-gray-400">Years Old</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">10+</p>
            <p className="text-gray-400">Projects Built</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">3+</p>
            <p className="text-gray-400">Tech Stacks</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">2024</p>
            <p className="text-gray-400">Started Journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}