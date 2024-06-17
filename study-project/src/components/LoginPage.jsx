import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    group: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    if (location.pathname === '/register') {
      setIsRegistering(true);
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering ? 'http://localhost:3000/api/auth/register' : 'http://localhost:3000/api/auth/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {isRegistering ? 'Регистрация' : 'Вход'}
        </Typography>
        {isRegistering ? (
          <>
            <TextField label="Фамилия" name="lastName" variant="outlined" margin="normal" fullWidth value={formData.lastName} onChange={handleChange} />
            <TextField label="Имя" name="firstName" variant="outlined" margin="normal" fullWidth value={formData.firstName} onChange={handleChange} />
            <TextField label="Отчество" name="middleName" variant="outlined" margin="normal" fullWidth value={formData.middleName} onChange={handleChange} />
            <TextField
              label="Дата рождения"
              name="birthDate"
              type="date"
              variant="outlined"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.birthDate}
              onChange={handleChange}
            />
            <TextField label="Группа" name="group" variant="outlined" margin="normal" fullWidth value={formData.group} onChange={handleChange} />
            <TextField label="Эл. почта" name="email" variant="outlined" margin="normal" fullWidth value={formData.email} onChange={handleChange} />
            <TextField label="Пароль" name="password" type="password" variant="outlined" margin="normal" fullWidth value={formData.password} onChange={handleChange} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Зарегистрироваться
            </Button>
            <Button onClick={handleToggleRegister} variant="text" color="primary" fullWidth sx={{ mt: 2 }}>
              Уже есть аккаунт? Войти
            </Button>
          </>
        ) : (
          <>
            <TextField label="Эл. почта" name="email" variant="outlined" margin="normal" fullWidth value={formData.email} onChange={handleChange} />
            <TextField label="Пароль" name="password" type="password" variant="outlined" margin="normal" fullWidth value={formData.password} onChange={handleChange} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Войти
            </Button>
            <Button onClick={handleToggleRegister} variant="text" color="primary" fullWidth sx={{ mt: 2 }}>
              Регистрация
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
