import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greetings from './components/Greetings';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Banners from './pages/Banners';
import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route index element={<Greetings />} />

            <Route path="banner" element={<Banners />} />
            <Route path="card" element={<Cards />} />
            <Route path="button" element={<Buttons />} />
            <Route path="testimonial" element={<Testimonials />} />
          </Route>
        </Routes>
        <Footer />
        <br />
      </BrowserRouter>
    </>
  )
}

export default App
