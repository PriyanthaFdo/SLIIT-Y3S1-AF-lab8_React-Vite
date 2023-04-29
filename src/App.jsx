import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Greetings from './components/Greetings';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import CustomButton from './components/CustomButton';
import Banner from './components/Banner';

import Banners from './pages/Banners';
import FirstPage from './pages/FirstPage';
import Cards from './pages/Cards';
import Buttons from './pages/Buttons';

function App() {
  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} exact />

          <Route path="/banner" element={<Banners />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/button" element={<Buttons />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
