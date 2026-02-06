export default function ResumeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-black py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">VINCE MARC JUSTINE O. RUBANG</p>
            <p className="text-sm text-gray-400">Full-Stack Developer | Web Development</p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} All Rights Reserved
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with Next.js, React & Tailwind CSS
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">Currently Available</p>
            <p className="text-xs text-gray-500 mt-1">Open to new opportunities</p>
          </div>
        </div>
      </div>
    </footer>
  );
}