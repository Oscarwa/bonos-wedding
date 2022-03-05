import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Splash from './components/Splash/Splash';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Story from './components/Story/Story';
import ComingSoon from './components/ComingSoon/ComingSoon';
import GiftRegistry from './components/GiftRegistry/GiftRegistry';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import AboutUs from './components/AboutUs/AboutUs';
import Location from './components/Wedding/Location';

const App: FC = () => {

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/story" element={<Story />} />
            <Route path="/location" element={<Location />} />
            <Route path="/accomodation" element={<ComingSoon />} />
            <Route path="/gift-registry" element={<GiftRegistry />} />
            <Route path="/location" element={<ComingSoon />} />
            <Route path="/rsvp" element={<ComingSoon />} />
          </Routes>
        </Container>
        <Footer />
        <MusicPlayer />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
