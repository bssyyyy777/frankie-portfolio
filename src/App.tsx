import React, { useState, useEffect } from 'react';
import { PageId, Language, VideoProject, FilmProject } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './pages/HomePage';
import { VideoContentPage } from './pages/VideoContentPage';
import { FilmNarrativePage } from './pages/FilmNarrativePage';
import { StoryboardPage } from './pages/StoryboardPage';
import { StrategyCommPage } from './pages/StrategyCommPage';
import { AboutContactPage } from './pages/AboutContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('zh');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [videoModalProject, setVideoModalProject] = useState<VideoProject | FilmProject | null>(null);
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string; subtitle?: string } | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync hash routing on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'video-content', 'film-narrative', 'storyboard', 'strategy-communication', 'about-contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (imageUrl: string, title: string, subtitle?: string) => {
    setLightboxData({ url: imageUrl, title, subtitle });
  };

  return (
    <div className="min-h-screen bg-[#15130e] text-[#e8e2d8] flex flex-col font-body">
      {/* Docked Left Sidebar for Desktop & Drawer for Mobile */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area Offset by Sidebar (pl-0 lg:pl-72) */}
      <div className="flex-1 flex flex-col lg:pl-72 w-full min-h-screen">
        {/* Top Header */}
        <Header
          currentPage={currentPage}
          lang={lang}
          onToggleLang={(newLang) => setLang(newLang)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateHome={() => handleNavigate('home')}
        />

        {/* Page Content Viewport */}
        <main className="flex-1 w-full pt-16">
          {currentPage === 'home' && (
            <HomePage
              lang={lang}
              onNavigate={handleNavigate}
              onSelectVideo={(video) => setVideoModalProject(video)}
              onSelectFilm={(film) => setVideoModalProject(film)}
              onOpenLightbox={handleOpenLightbox}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          )}

          {currentPage === 'video-content' && (
            <VideoContentPage
              lang={lang}
              onSelectVideo={(video) => setVideoModalProject(video)}
            />
          )}

          {currentPage === 'film-narrative' && (
            <FilmNarrativePage
              lang={lang}
              onSelectFilm={(film) => setVideoModalProject(film)}
              onOpenLightbox={handleOpenLightbox}
            />
          )}

          {currentPage === 'storyboard' && (
            <StoryboardPage
              lang={lang}
              onOpenLightbox={handleOpenLightbox}
            />
          )}

          {currentPage === 'strategy-communication' && (
            <StrategyCommPage
              lang={lang}
              onOpenLightbox={handleOpenLightbox}
            />
          )}

          {currentPage === 'about-contact' && (
            <AboutContactPage
              lang={lang}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Global Interactive Modals */}
      {/* 1. Filmic Video Player Modal */}
      <VideoPlayerModal
        isOpen={!!videoModalProject}
        project={videoModalProject}
        onClose={() => setVideoModalProject(null)}
        lang={lang}
      />

      {/* 2. Panoramic Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!lightboxData}
        imageUrl={lightboxData?.url || ''}
        title={lightboxData?.title || ''}
        subtitle={lightboxData?.subtitle}
        onClose={() => setLightboxData(null)}
        lang={lang}
      />

      {/* 3. Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
