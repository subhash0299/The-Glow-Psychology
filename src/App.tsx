import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sunscreen from './pages/Sunscreen';
import VitaminCSerum from './pages/VitaminCSerum';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-sunscreen-india" element={<Sunscreen />} />
          <Route path="/best-vitamin-c-serum-india" element={<VitaminCSerum />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
