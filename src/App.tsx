import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './@rechat/components/AppLayout';
import Pages from './pages';

function App() {
  return (
    <AppLayout>
      <Router>
        <Pages />
      </Router>
    </AppLayout>
  );
}

export default App;
