import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';

const BackgroundContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(imgs/wppInicial.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
});

const Text = styled('div')({
  position: 'relative',
  zIndex: 2,
  color: '#FFFFFF',
  fontSize: '2.5rem',
  fontFamily: 'Archivo Black, sans-serif',
  textAlign: 'center',
  '@media (min-width: 600px)': {
    fontSize: '4rem',
  },
  '@media (min-width: 960px)': {
    fontSize: '7rem',
  },
});

function FullScreenBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textAnimation = useSpring({
    transform: scrollY < 350 ? `translateY(${scrollY}px)` :
                scrollY < 400 ? `translateY(${300 - scrollY}px)` :
                'translateY(0px)',
    config: { tension: 300, friction: 40  },
  });

  return (
    <BackgroundContainer>
      <animated.div style={textAnimation}>
        <Text>PALOMBEAT</Text>
      </animated.div>
    </BackgroundContainer>
  );
}

export default FullScreenBackground;
