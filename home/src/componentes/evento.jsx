import Styles from '../css/evento.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import EventosComponente from './eventosComponente'
import Chatbot from './Chatbot'

function Evento() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <EventosComponente/>
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Evento