import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './@rechat/components/AppLayout';
import { TodoContextProvider } from './@rechat/components/contetxProvider/TodoContextProvider';
import Pages from './pages';

function App() {
  return (
    <TodoContextProvider>
      <AppLayout>
        <Router>
          <Pages />
        </Router>
      </AppLayout>
    </TodoContextProvider>
  );
}

export default App;
