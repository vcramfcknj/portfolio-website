import ResumeHeader from './components/ResumeHeader';
import ResumeSidebar from './components/ResumeSidebar';
import ResumeMain from './components/ResumeMain';
import ResumeFooter from './components/ResumeFooter';
import ScrollProgress from './components/ScrollProgress';
import Loading from './components/Loading';
import Spotlight from './components/Spotlight';

export default function Home() {
  return (
    <>
      <Loading />
      <ScrollProgress />
      <Spotlight />
      
      {/* Desktop/Tablet View */}
      <div className="min-h-screen resume-background py-0 md:py-8 px-0 md:px-4">
        <div className="max-w-[1200px] mx-auto bg-white md:shadow-2xl md:border-4 border-black">
          <ResumeHeader />
          
          {/* Desktop: Sidebar + Main | Mobile: Stack */}
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:w-80 border-r-2 border-black">
              <ResumeSidebar />
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <ResumeMain />
            </div>
          </div>
          
          {/* Mobile Sidebar - Shown on mobile only */}
          <div className="lg:hidden border-t-2 border-black">
            <ResumeSidebar />
          </div>
          
          <ResumeFooter />
        </div>
      </div>
    </>
  );
}