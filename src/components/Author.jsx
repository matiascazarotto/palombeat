import React from 'react';
import { styled } from '@mui/system';

const AuthorContainer = styled('div')({
  display: 'flex',
  background: 'linear-gradient(to left, #AAAAAA 50%, transparent 30%)',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  '@media (min-width: 1100px)': {
    flexDirection: 'row',
  },
});

const TextContainer = styled('div')({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 1100px)': {
    alignItems: 'center',
    marginRight: '50px',
  },
});

const Title = styled('h2')({
  fontFamily: 'Archivo Black, sans-serif',
  color: '#DDDDDD',
  fontSize: '22px',
  textAlign: 'center',
  margin: '20px 20px',
  padding: '10px',
  '@media (min-width: 900px)': {
    fontSize: '40px',
    margin: '0',
  },
});

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  transition: 'transform 0.9s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'scale(1.2)',
},
  '@media (min-width: 800px)': {
    width: '600px',
  },
});

function Author() {
  return (
    <AuthorContainer>
      <TextContainer>
        <Title>EDUARDO DI DOMENICO</Title>
      </TextContainer>
      <a href="https://drive.google.com/drive/folders/1yqfh-VXSpC8PRxMyx1haMgC7RB7akOSr" target="_blank" rel="noopener noreferrer">
        <Image src="imgs/pics/bio1.png" alt="Di Domenico" />
      </a> 
    </AuthorContainer>
  );
}

export default Author;
