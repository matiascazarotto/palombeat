import React from 'react';
import { styled } from '@mui/system';

const BiographyContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  '@media (min-width: 1100px)': {
    flexDirection: 'row',
  },
});

const ImageContainer = styled('div')({
  flex: '0 0 auto',
  marginBottom: '-7px',
  '@media (min-width: 800px)': {
    marginRight: '50px',
  },
  position: 'relative',
});

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  border: 'none',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  marginBottom: '0',
  '@media (min-width: 800px)': {
    width: '600px',
  },
});

const TextContainer = styled('div')({
  flex: '1',
});

const Title = styled('h2')({
  fontFamily: 'Archivo Black, sans-serif',
  fontSize: '36px',
  color: '#FFFFFF',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  position: 'relative',
  padding: '10px 20px',
  margin: '-40px 0 0 0',
  transition: 'transform 0.9s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'scale(1.1)',
  },
  '@media (min-width: 1100px)': {
    fontSize: '90px',
    top: '70px',
    left: '88%',
    position: 'absolute',
    margin: '0',
  },
});

const Paragraph = styled('p')({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#ffffff',
  padding: '5px 20px',
  '@media (min-width: 900px)': {
    fontSize: '18px',
  },
});

const ParagraphText =
  `Nascido em 1999 e criado em Rodeio-Bonito, RS, Eduardo Di Domenico descobriu sua paixão pela música eletrônica em 2019. No ano seguinte, ele realizou seu primeiro curso de mixagem com Marcos Deon, aprofundando-se no gênero e desenvolvendo sua própria identidade sonora, caracterizada por uma bassline intensa e ritmada que abrange diversas vertentes do House, com destaque para Tech House e House.
Com cinco anos de experiência como DJ e inúmeras apresentações, Di Domenico adquiriu uma apurada percepção de pista, permitindo-lhe navegar suavemente entre diferentes estilos de House, proporcionando uma experiência única e sets exclusivos.
Em 2024, mais conectado e maduro profissionalmente, Eduardo lançou a Freaknc, sua label underground, dando mais um passo em busca de novos desafios na sua carreira.`


function Biography() {
  return (
    <BiographyContainer>
      <ImageContainer>
        <Image src="imgs/pics/bio.jpg" alt="Artist" />
        <Title>BIOGRAFIA</Title>
      </ImageContainer>
      <TextContainer>
        <Paragraph>
          {ParagraphText}
        </Paragraph>
      </TextContainer>
    </BiographyContainer>
  );
}

export default Biography;
