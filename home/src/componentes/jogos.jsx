import Styles from '../css/inicio.module.css'
import JogosComponete from './jogosComponente'
import Menu from './menulateral'
import Navbar from './navbar'
import Chatbot from './Chatbot'

function Jogos() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
              <Menu/>
                <JogosComponete/>
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Jogos
