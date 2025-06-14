import Styles from '../css/bras.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import BrasComponente from './brasComponente'
import Chatbot from './Chatbot'

function Bras() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <BrasComponente />
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Bras