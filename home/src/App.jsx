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


function App() {
 
  return (
   <main>
      <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/planos" element={<PagPlanos/>}/>
        <Route path="/loggin" element={<Loggin/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/jogos" element={<Jogos/>}/>
        <Route path="/parceiros" element={<Parceiros/>}/>
        <Route path="/recompensas" element={<Recompensas/>}/>
      </Routes>

    </Router>
    
    </>
   </main>
  )
}

export default App
