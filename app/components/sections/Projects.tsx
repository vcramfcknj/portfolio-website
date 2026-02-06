'use client';

import { SiPhp, SiMysql, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'C.H.E.C.K - Community Health Evaluation Center Kiosk',
      category: 'Capstone Project',
      description: 'Community Health Evaluation Center Kiosk - A comprehensive Human Resources Management System designed to streamline employee management for healthcare facilities. Features role-based access control, real-time analytics, audit logging, and specialized HR workflows for healthcare organizations.',
      features: [
        'Employee Information Management',
        'Role-Based Access Control (Admin, Manager, Employee)',
        'Real-time Dashboard Analytics',
        'Department & Employment Type Tracking',
        'Audit Logs & Activity Monitoring',
        'Performance Review System',
        'Document Management',
        'Automated Reports Generation'
      ],
      tech: [
        { name: 'PHP', icon: SiPhp },
        { name: 'MySQL', icon: SiMysql },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript }
      ],
      image: '/images/projects/check-project.png',
      highlight: true
    },
    {
      title: 'Employee Analytics Dashboard',
      category: 'Seminar Workshop',
      description: 'Interactive dashboard built during a web development seminar, showcasing employee statistics, departmental analytics, and hiring trends. Features dynamic data visualization and real-time metrics for HR decision-making.',
      features: [
        'Employee Statistics Overview',
        'Department Distribution Charts',
        'Hiring Trends Analysis',
        'Probationary Employee Tracking',
        'Recent Activity Feed',
        'Upcoming Regularizations Alerts'
      ],
      tech: [
        { name: 'PHP', icon: SiPhp },
        { name: 'MySQL', icon: SiMysql },
        { name: 'HTML/CSS', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript }
      ],
      image: '/images/projects/dashboard-project.png',
      highlight: false
    },
    {
      title: 'Modern Portfolio Website',
      category: 'Personal Project',
      description: 'A minimalist black and white portfolio website built with modern web technologies. Features smooth animations, responsive design, and optimized performance. Deployed using Git and Vercel for continuous deployment.',
      features: [
        'Responsive Design',
        'Black & White Minimalist Theme',
        'Smooth Animations',
        'SEO Optimized',
        'Fast Page Load',
        'Mobile-First Approach'
      ],
      tech: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: SiReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'TypeScript', icon: SiJavascript }
      ],
      image: '/images/projects/portfolio-project.png',
      highlight: false
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black dark:bg-white text-white dark:text-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-400 dark:text-gray-600 mb-16">A showcase of my recent work and achievements</p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`border-2 border-white dark:border-black p-8 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-500 group hover:scale-105 hover:shadow-2xl ${project.highlight ? 'border-4' : ''}`}>
              {project.highlight && (
                <div className="inline-block bg-white text-black dark:bg-black dark:text-white px-4 py-1 mb-4 text-sm font-bold">
                  CAPSTONE PROJECT
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="relative h-64 md:h-80 border-2 border-white dark:border-black group-hover:border-black dark:group-hover:border-white overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 mb-4">{project.category}</p>
                  <p className="text-lg mb-4 leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-white dark:text-black group-hover:text-black dark:group-hover:text-white mt-1">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white border-2 border-white dark:border-black group-hover:border-black dark:group-hover:border-white px-4 py-2">
                      <IconComponent className="text-xl" />
                      <span className="font-semibold">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}