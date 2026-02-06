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
      
      <div className="min-h-screen resume-background py-8 px-4">
        <div className="max-w-[1200px] mx-auto bg-white shadow-2xl border-4 border-black">
          <ResumeHeader />
          
          <div className="flex">
            <div className="w-80 hidden lg:block border-r-2 border-black">
              <ResumeSidebar />
            </div>
            
            <div className="flex-1">
              <ResumeMain />
            </div>
          </div>
          
          <div className="lg:hidden border-t-2 border-black">
            <ResumeSidebar />
          </div>
          
          <ResumeFooter />
        </div>
      </div>
    </>
  );
}