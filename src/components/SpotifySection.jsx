import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh', 
  background: 'url("imgs/wppSpotify.jpg") center/cover no-repeat', 
  transition: 'background-color 0.5s ease', 
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
});

const LinkContainer = styled('a')(({ isIntersecting }) => ({
  position: 'absolute',
  top: '50%', 
  left: '50%',
  transform: isIntersecting ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%)', 
  cursor: 'pointer',
  transition: 'transform 0.9s ease', 
}));

const Image = styled('img')({
  width: '200px', 
  height: 'auto',
});

function SpotifySection() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <LinkContainer href="https://open.spotify.com/user/12161372092?si=v5VyS3ArTASaskGxGibkAA" target="_blank" isIntersecting={isIntersecting}>
        <Image src="imgs/logo-spotify.png" alt="Spotify" />
      </LinkContainer>
    </Container>
  );
}

export default SpotifySection;
