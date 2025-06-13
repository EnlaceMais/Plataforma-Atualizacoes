import Styles from '../css/recompensas.module.css'
import Feed from './recompensasComponetes'
import Navbar from './navbar'
import Menu from './menulateral'
import Chatbot from './Chatbot'

function Recompensas() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
              <Menu/>
                <Feed/>
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Recompensas
