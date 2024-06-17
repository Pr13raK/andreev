import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color="inherit" component={RouterLink} to="/" style={{ textTransform: 'none', fontSize: '1.25rem' }}>
            Помощник студента
          </Button>
          <div>
            <Button color="inherit" component={RouterLink} to="/">Дорожная карта</Button>
            <Button color="inherit">Контакты</Button>
            <Button color="inherit">Чат</Button>
            <Button color="inherit">Профиль</Button>
            <Button color="inherit" component={RouterLink} to="/register">Вход</Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
