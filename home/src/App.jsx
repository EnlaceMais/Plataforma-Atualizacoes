import './App.css'
import Home from './componentes/Home'
import Loggin from './componentes/Loggin'
import PagPlanos from './componentes/PagPlanos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
   <main>
      <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/planos" element={<PagPlanos/>}/>
        <Route path="/loggin" element={<Loggin/>}/>
      </Routes>

    </Router>
    
    </>
   </main>
  )
}

export default App
