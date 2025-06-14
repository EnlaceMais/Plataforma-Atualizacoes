import Styles from '../css/polo.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import PoloComponente from './poloComponete'
import Chatbot from './Chatbot'

function Polo() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <PoloComponente />
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Polo