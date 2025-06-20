import Styles from '../css/conexoes.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import ConexoesComponente from './conexoesComponente'
import Chatbot from './Chatbot'

function Conexoes() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <ConexoesComponente/>
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Conexoes
