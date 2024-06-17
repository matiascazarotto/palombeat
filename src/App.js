import React, { useRef } from 'react';
import Header from './components/Header';
import FullScreenBackground from './components/FullScreenBackground';
import Biography from './components/Biography';
import SoundCloudSection from './components/SoundCloudSection';
import GlobalStyles from './styles/globalStyles';
import Contact from './components/Contact';
import SpotifySection from './components/SpotifySection';
import FreakncSection from './components/FreakncSection';
import Author from './components/Author';


function App() {
  const bioRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToBio = () => {
    bioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const BioScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Biography />
      </div>
    );
  });

  const ContactScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Contact />
      </div>
    );
  });


  const FullScreenBackgroundScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <FullScreenBackground />
      </div>
    );
  });

  
  return (
    <>
      <GlobalStyles />
      <Header scrollToBio={scrollToBio} scrollToHome={scrollToHome} scrollToContact={scrollToContact}/>
      <FullScreenBackgroundScroll ref={homeRef} /> 
      <BioScroll ref={bioRef}/>
      <FreakncSection />
      <SoundCloudSection />
      <SpotifySection /> 
      <ContactScroll ref={contactRef} />
      <Author />
    </>
  );
}

export default App;