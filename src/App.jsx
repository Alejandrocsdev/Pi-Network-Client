// CSS
import './assets/css/global.css';
// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Custom Functions
import usePiBrowser from './hooks/usePiBrowser';
// Public Pages
import Home from './pages/Home';

function App() {
  const { MODE } = import.meta.env;
  window.Pi.init({ version: '2.0', sandbox: MODE === 'development' });
  usePiBrowser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
