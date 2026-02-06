export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VMJR</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
            <p className="text-gray-400">Ilocos Sur, Philippines</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>vincerubang28@gmail.com</p>
              <p>09603468348</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Vince Marc Justine O. Rubang. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Built with Next.js, React, TypeScript & Tailwind CSS | Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}