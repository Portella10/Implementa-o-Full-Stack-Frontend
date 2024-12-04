import React, { useState } from 'react';
import { createEvent } from "../services/api";
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const EventForm = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      nome,
      data,
      local,
      descricao,
      capacidade,
    };

    createEvent(eventData)
      .then((response) => {
        setMessage('Evento criado com sucesso!');
        setNome('');
        setData('');
        setLocal('');
        setDescricao('');
        setCapacidade('');
      })
      .catch((error) => {
        setMessage('Erro ao criar evento.');
        console.error('Erro ao criar evento:', error);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Criar Evento
      </Typography>
      {message && <Alert severity={message.includes('sucesso') ? 'success' : 'error'}>{message}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          fullWidth
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Data"
          type="date"
          fullWidth
          required
          value={data}
          onChange={(e) => setData(e.target.value)}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Local"
          fullWidth
          required
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Descrição"
          multiline
          rows={3}
          fullWidth
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Capacidade"
          type="number"
          fullWidth
          required
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Criar Evento
        </Button>
      </form>
    </Box>
  );
};

export default EventForm;
