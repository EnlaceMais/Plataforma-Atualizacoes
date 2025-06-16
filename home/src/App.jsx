import './App.css';
import Home from './componentes/Home';
import Loggin from './componentes/Loggin';
import PagPlanos from './componentes/PagPlanos';
import Inicio from './componentes/inicio'
import Jogos from './componentes/jogos';
import Parceiros from './componentes/parceiros';
import Recompensas from './componentes/recompensas';
import Evento from './componentes/evento';
import Confirmacao from './componentes/confirmacao';
import Semana from './componentes/semana';
import Forum from './componentes/forum';
import Polo from './componentes/polo';
import Bras from './componentes/bras';
import Chacara from './componentes/chacara';
import Perfil from './componentes/perfil';
import Conexoes from './componentes/conexoes';
import Conversa from './componentes/inicio_con';
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
        <Route path="/conexoes" element={<Conexoes/>}/>
        <Route path="/jogos" element={<Jogos/>}/>
        <Route path="/eventos" element={<Evento/>}/>
        <Route path="/confirmacao" element={<Confirmacao/>}/>
        <Route path="/semana" element={<Semana/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/polo" element={<Polo/>}/>
        <Route path="/bras" element={<Bras/>}/>
        <Route path="/chacara" element={<Chacara/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/parceiros" element={<Parceiros/>}/>
        <Route path="/recompensas" element={<Recompensas/>}/>
        <Route path="/conversa/*" element={<Conversa />} />
      </Routes>

    </Router>
    
    </>
   </main>
  )
}

export default App
