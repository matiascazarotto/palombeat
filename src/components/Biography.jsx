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
  `Luan Palombit é o nome por trás do projeto Palombeat. Natural de Hernandaias - Paraguay, hoje morando em Frederico westphalen RS, teve seu primeiro contato com a música eletrônica há mais 8 anos e desde então é um frequentador ativo das festas do gênero e um ouvinte assíduo do Progressive e Organic House. 

  Após 4 anos no meio da cena foi que Palombeat resolveu entrar de cabeça e decidiu ser DJ, fazendo seu primeiro curso de mixagem com Alex Dittrich, um dos grandes nomes da cena brasileira. 
  
  Por já ter uma vasta experiência na música eletrônica underground, Luan conseguiu absorver rapidamente algumas técnicas que um bom Dj precisar ter. Palombeat já se mostrou capaz de construir sets finíssimos e bem elaborados, além de ter um feeling de pista apurado fazendo com que seu publico fique aprisionado do inicio ao fim em seus sets. 
  
  Levando essas circunstâncias em consideração, não demorou muito para que Luan recebesse convites para diversas festas no sul do país,    
  
  Com seu belo crescimento na cena Undergroud, Luan  já desfruta de duas residências, uma na Lake Club TOP 39 Club House Mag e outra na Conect Sunset.
  `


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
