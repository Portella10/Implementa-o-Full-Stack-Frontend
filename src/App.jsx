import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
  return (
    <div>
      <h1>Gerenciador de Eventos</h1>
      <EventForm />
      <EventList />
    </div>
  );
}

export default App;
