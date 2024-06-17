// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Root = styled('div')({
  flexGrow: 1,
});

const StyledAppBar = styled(AppBar)({
  background: 'rgba(0, 0, 0, 0.8)',
  boxShadow: 'none',
  backdropFilter: 'blur(1px)', 
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
});

const Title = styled(Typography)({
  flexGrow: 1,
  color: '#ffffff',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  letterSpacing: '0.3rem',
  '@media (min-width: 600px)': {
    fontSize: '24px',
  },
  '@media (max-width: 600px)': {
    textAlign: 'center',
  },
});

const StyledButton = styled(Button)({
  color: '#ffffff',
  fontFamily: 'Montserrat, sans-serif',
  marginLeft: '15px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '@media (max-width: 600px)': {
    marginLeft: '2px',
    padding: '0',
    fontSize: '11px'
  },
});

function Header({scrollToHome, scrollToBio, scrollToContact }) {
  return (
    <Root>
      <StyledAppBar>
        <Toolbar>
          <Title onClick={scrollToHome}>
            DI DOMENICO
          </Title>
          <StyledButton onClick={scrollToContact}>Contato</StyledButton>
          <StyledButton onClick={scrollToBio}>Sobre</StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Root>
  );
}


export default Header;
