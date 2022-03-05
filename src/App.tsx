import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import Accomodation from './components/Wedding/Accomodation';
import { ToastContainer } from 'react-toastify';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu9xFyRzxr59aphC2L3uSA_8JlHKWq9rg",
  authDomain: "bonos-wedding.firebaseapp.com",
  databaseURL: "https://bonos-wedding-default-rtdb.firebaseio.com",
  projectId: "bonos-wedding",
  storageBucket: "bonos-wedding.appspot.com",
  messagingSenderId: "237634432961",
  appId: "1:237634432961:web:6855630c0b456614c7c940",
  measurementId: "G-NMLDJ1CP43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App: FC = () => {
  logEvent(analytics, 'page_view');
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navigation />
        <Container>
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
        </Container>
        <Footer />
        <MusicPlayer />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
