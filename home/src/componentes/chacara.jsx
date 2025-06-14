import Styles from '../css/chacara.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import ChacaraComponente from './chacaraComponente'
import Chatbot from './Chatbot'

function Chacara() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <ChacaraComponente />
                <Chacara/>
            </section>
        </main>
    </>
  )
}

export default Chacara