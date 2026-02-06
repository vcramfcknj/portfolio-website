'use client';
import ContactForm from './ContactForm';
import Image from 'next/image';
import { SiPhp, SiMysql, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function ResumeMain() {
  return (
    <main className="flex-1 p-4 md:p-8 space-y-8 md:space-y-12">
      
      {/* Professional Summary */}
      <section>
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-black pb-2">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Passionate Full-Stack Developer specializing in modern web applications with expertise in React, Next.js, PHP, and MySQL. 
          Experienced in building production-ready applications including AI-powered solutions, document management systems, and 
          interactive web tools. Currently pursuing BS Information Technology with a strong foundation in both frontend and backend 
          development. Committed to creating user-centric solutions that solve real-world problems through clean code and innovative technology.
        </p>
      </section>

      {/* Professional Experience / Projects */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 border-b-2 md:border-b-4 border-black pb-2">
          PROFESSIONAL EXPERIENCE
        </h2>
        
        <div className="space-y-8">
          
          {/* Project 1 - C.H.E.C.K */}
          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative h-48 border-2 border-black overflow-hidden">
                  <Image
                    src="/images/projects/check-project.png"
                    alt="C.H.E.C.K System"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">C.H.E.C.K - Community Health Evaluation Center Kiosk</h3>
                    <p className="text-sm text-gray-600 font-semibold">CAPSTONE PROJECT | 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Comprehensive Human Resources Management System designed for healthcare facilities. Led development of 
                  enterprise-level HR solution with role-based access control, real-time analytics, and audit logging.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Key Responsibilities & Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Designed and implemented employee management system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Developed role-based access control (Admin, Manager, Employee)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Built real-time dashboard with analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Implemented audit logging and activity monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Created document management and performance review systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Integrated automated report generation features</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon={SiPhp} name="PHP" />
                  <TechBadge icon={SiMysql} name="MySQL" />
                  <TechBadge icon={SiHtml5} name="HTML5" />
                  <TechBadge icon={SiCss3} name="CSS3" />
                  <TechBadge icon={SiJavascript} name="JavaScript" />
                </div>
              </div>
            </div>
          </article>

          {/* Project 2 - Dashboard */}
          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative h-48 border-2 border-black overflow-hidden">
                  <Image
                    src="/images/projects/dashboard-project.png"
                    alt="Employee Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">Employee Analytics Dashboard</h3>
                    <p className="text-sm text-gray-600 font-semibold">SEMINAR WORKSHOP PROJECT | 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Interactive dashboard built during web development seminar, showcasing employee statistics, 
                  departmental analytics, and hiring trends with real-time metrics for HR decision-making.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Key Features Developed:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Employee statistics overview with trend analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Department distribution charts and visualizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Hiring trends and probationary tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Recent activity feed and regularization alerts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon={SiPhp} name="PHP" />
                  <TechBadge icon={SiMysql} name="MySQL" />
                  <TechBadge icon={SiHtml5} name="HTML/CSS" />
                  <TechBadge icon={SiJavascript} name="JavaScript" />
                </div>
              </div>
            </div>
          </article>

          {/* Project 3 - Portfolio */}
          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative h-48 border-2 border-black overflow-hidden bg-gray-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">VMJR</span>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">Professional Portfolio Website</h3>
                    <p className="text-sm text-gray-600 font-semibold">PERSONAL PROJECT | 2026</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Modern, minimalist portfolio website built with Next.js featuring resume-style layout, 
                  smooth animations, and optimized performance. Deployed using Git and Vercel.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Technical Implementations:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Responsive design with mobile-first approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>SEO optimization and performance tuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Smooth animations and interactive UI elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Integrated contact form with Web3Forms API</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon={SiNextdotjs} name="Next.js" />
                  <TechBadge icon={SiReact} name="React" />
                  <TechBadge icon={SiTailwindcss} name="Tailwind" />
                  <TechBadge icon={SiJavascript} name="TypeScript" />
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

    {/* Contact Form */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-black pb-2">
          GET IN TOUCH
        </h2>
        
        <div className="border-4 border-black p-8">
          <p className="text-lg text-gray-700 mb-6">
            Interested in working together? Have a project in mind? Feel free to reach out using the form below, 
            and I'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
  
}


function TechBadge({ icon: Icon, name }: { icon: any; name: string }) {
  return (
    <span className="flex items-center gap-2 bg-black text-white px-3 py-1 text-sm font-semibold">
      <Icon />
      {name}
    </span>
  );
}