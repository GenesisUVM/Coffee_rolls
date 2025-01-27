import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./paginas/LandingPage";
import Promociones from "./paginas/Promociones";
import Reseñas from "./paginas/Reseñas";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/promociones' element={<Promociones />} />
      <Route path='/reseñas' element={<Reseñas />} />
      </Routes> 
    </BrowserRouter> 
  );
}

export default App;
