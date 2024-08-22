import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, IconButton } from '@mui/material';

const SectionContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#100705',
    backgroundImage: 'url(/imgs/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    textAlign: 'center',
    position: 'relative',
    paddingTop: '50px',
    overflow: 'hidden',
    '@media (min-width: 900px)': {
        flexDirection: 'row',
        padding: '40px 250px',
        minHeight: '100vh',
    },
});

const VerticalTextContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
    position: 'relative',
    '@media (min-width: 900px)': {
        marginRight: '50px',
    },
});

const VerticalText = styled(Typography)({
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: '26px',
    color: '#ffffff',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    '@media (min-width: 900px)': {
        fontSize: '48px',
    },
});

const ContactInfoContainer = styled(Box)({
    flex: '1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const SocialIconsContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    flexWrap: 'wrap',
    '@media (min-width: 800px)': {
        justifyContent: 'center',
    },
});

const CustomIconButton = styled(IconButton)({
    position: 'relative',
    padding: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1',
    transition: 'transform 0.9s ease',
    cursor: 'pointer',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'transparent',
        transform: 'scale(1.3)',
    },
    '& img': {
        width: '50px',
        height: '50px',
    },
    '@media (min-width: 800px)': {
        justifyContent: 'center',
        '& img': {
            width: '75px',
            height: '75px',
        }
    },
});

const SocialText = styled(Typography)({
    color: '#ffffff',
    minWidth: '150px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    marginTop: '10px',
    textAlign: 'center',
    '@media (min-width: 900px)': {
        fontSize: '18px',
    },
});

const VerticalLine = styled(Box)({
    '@media (min-width: 900px)': {
        position: 'absolute',
        top: '50%',
        left: 'calc(50% + 100px)',
        width: '5px',
        height: '200px',
        backgroundColor: '#ffffff',
        transform: 'translateY(-50%)',
        zIndex: '1',
    },
});

function Contact() {
    return (
        <SectionContainer>
            <VerticalTextContainer>
                <VerticalText variant="h2">CONTATO</VerticalText>
                <VerticalLine />
            </VerticalTextContainer>
            <ContactInfoContainer>
                <SocialIconsContainer>
                    <CustomIconButton href="tel:+554991910049" target="_blank" aria-label="Instagram" color="inherit">
                        <img src="imgs/logo-whatsapp.png" alt="Instagram" />
                        <SocialText>WHATSAPP</SocialText>
                        <SocialText>(49) 99191-0049</SocialText>
                    </CustomIconButton>
                    <CustomIconButton href="mailto:luan@palombeat.com" target="_blank" aria-label="Instagram" color="inherit">
                        <img src="imgs/logo-email.png" alt="Instagram" />
                        <SocialText>E-MAIL</SocialText>
                        <SocialText>luan@palombeat-music.com</SocialText>
                    </CustomIconButton>
                    <CustomIconButton href="https://www.instagram.com/palombeat_music" target="_blank" aria-label="Instagram" color="inherit">
                        <img src="imgs/logo-instagram.png" alt="Instagram" />
                        <SocialText>INSTAGRAM</SocialText>
                        <SocialText>@palombeat_music</SocialText>
                    </CustomIconButton>
                </SocialIconsContainer>
            </ContactInfoContainer>
        </SectionContainer>
    );
}

export default Contact;
