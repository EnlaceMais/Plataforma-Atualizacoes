import Styles from '../css/semana.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import SemanaComponente from './semanaComponente'
import Chatbot from './Chatbot'

function Semana() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <SemanaComponente />
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Semana