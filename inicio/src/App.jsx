import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio'
import Jogos from './componentes/jogos'
import Recompensas from './componentes/recompensas'
import Parceiros from './componentes/parceiros'
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        
        <Route path="/" element={<Inicio/>}/>
        <Route path="/jogos" element={<Jogos/>}/>
        <Route path="/parceiros" element={<Parceiros/>}/>
        <Route path="/recompensas" element={<Recompensas/>}/>
      </Routes>

    </Router>
    
    </>
  )
}

export default App
