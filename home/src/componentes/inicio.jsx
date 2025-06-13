import Styles from '../css/inicio.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import Feed from './feed'
import Chatbot from './Chatbot'

function Inicio() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <Chatbot/>
                <Feed/>
            </section>
        </main>
    </>
  )
}

export default Inicio
