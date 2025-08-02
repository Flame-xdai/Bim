import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Layout/Header';
import { BottomNav } from './components/Layout/BottomNav';
import { HeroBanner } from './components/HeroBanner';
import { FeaturedSection } from './components/FeaturedSection';
import { NewArrivals } from './components/NewArrivals';
import { CODNotice } from './components/CODNotice';
import { Footer } from './components/Footer';
import { mockJerseys } from './data/mockData';

function AppContent() {
  const { dispatch } = useApp();

  useEffect(() => {
    // Initialize with mock data
    dispatch({ type: 'SET_JERSEYS', payload: mockJerseys });
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroBanner />
        <FeaturedSection />
        <CODNotice />
        <NewArrivals />
      </main>
      <Footer />
      <BottomNav />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;