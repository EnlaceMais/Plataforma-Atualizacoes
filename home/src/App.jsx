<<<<<<< HEAD
import './App.css';
import Home from './componentes/Home';
import Loggin from './componentes/Loggin';
import PagPlanos from './componentes/PagPlanos';
import Inicio from './componentes/inicio'
import Jogos from './componentes/jogos';
import Parceiros from './componentes/parceiros';
import Recompensas from './componentes/recompensas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import './App.css'
import Home from './componentes/Home'
import Loggin from './componentes/Loggin'
import PagPlanos from './componentes/PagPlanos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 88214d85b6c6b5192ba9d0935592fc78a27bab97


function App() {
 
  return (
   <main>
      <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/planos" element={<PagPlanos/>}/>
        <Route path="/loggin" element={<Loggin/>}/>
<<<<<<< HEAD
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/jogos" element={<Jogos/>}/>
        <Route path="/parceiros" element={<Parceiros/>}/>
        <Route path="/recompensas" element={<Recompensas/>}/>
=======
>>>>>>> 88214d85b6c6b5192ba9d0935592fc78a27bab97
      </Routes>

    </Router>
    
    </>
   </main>
  )
}

export default App
