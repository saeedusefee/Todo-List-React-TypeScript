import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './@todolist/components/AppLayout';
import { TodoContextProvider } from './@todolist/components/contetxProvider/TodoContextProvider';
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
