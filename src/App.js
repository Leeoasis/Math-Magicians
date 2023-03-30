// App.js
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Routes/Home';
import Quote from './Routes/Quote';
import Header from './components/Header';
import CalRoute from './Routes/CalRoute';
import NotMatch from './Routes/NotMatch';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<CalRoute />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
