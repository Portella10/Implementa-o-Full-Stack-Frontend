import React, { useState, useEffect } from 'react';
import { getEvents } from "../services/api";
import { Box, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const EventList = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    getEvents()
      .then((response) => {
        setEventos(response);
      })
      .catch((error) => {
        console.error('Erro ao buscar eventos:', error);
      });
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Lista de Eventos
      </Typography>
      {eventos.length === 0 ? (
        <Typography variant="body1" align="center" color="textSecondary">
          Nenhum evento disponível.
        </Typography>
      ) : (
        <List>
          {eventos.map((evento) => (
            <Paper key={evento.id} sx={{ mb: 2, p: 2 }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="h6">{evento.nome}</Typography>}
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        Data: {new Date(evento.data).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Local: {evento.local}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Descrição: {evento.descricao}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Capacidade: {evento.capacidade}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </Paper>
          ))}
        </List>
      )}
    </Box>
  );
};

export default EventList;
