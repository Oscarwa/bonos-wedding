import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FirebaseAppProvider } from 'reactfire';

import Splash from './components/Splash/Splash';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Story from './components/Story/Story';
import ComingSoon from './components/ComingSoon/ComingSoon';
import GiftRegistry from './components/GiftRegistry/GiftRegistry';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import AboutUs from './components/AboutUs/AboutUs';
import Location from './components/Wedding/Location';
import Accomodation from './components/Wedding/Accomodation';

// Import the functions you need from the SDKs you need
import { firebaseConfig } from './services/firebase';

const App: FC = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <ToastContainer />
          <Navigation />
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/story" element={<Story />} />
              <Route path="/location" element={<Location />} />
              <Route path="/accomodation" element={<Accomodation />} />
              <Route path="/gift-registry" element={<GiftRegistry />} />
              <Route path="/location" element={<ComingSoon />} />
              <Route path="/rsvp" element={<ComingSoon />} />
            </Routes>
          <Footer />
          <MusicPlayer />
        </FirebaseAppProvider>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
