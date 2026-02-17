import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sunscreen from './pages/Sunscreen';
import VitaminCSerum from './pages/VitaminCSerum';
import FaceWash from './pages/Cleanser';
import Moisturizer from './pages/Moisturizer';
import Toner from './pages/Toner';
import EyeCream from './pages/EyeCream';
import Exfoliator from './pages/Exfoliator';
import FaceOil from './pages/FaceOil';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-sunscreen-india" element={<Sunscreen />} />
          <Route path="/best-vitamin-c-serum-india" element={<VitaminCSerum />} />
          <Route path="/best-face-cleanser-india" element={<FaceWash />} />
          <Route path="/best-face-moisturizer-india" element={<Moisturizer />} />
          <Route path="/best-face-toner-india" element={<Toner />} />
          <Route path="/best-eye-cream-india" element={<EyeCream />} />
          <Route path="/best-exfoliator-india" element={<Exfoliator />} />
          <Route path="/best-face-oil-india" element={<FaceOil />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
