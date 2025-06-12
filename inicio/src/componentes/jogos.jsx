import Styles from '../css/inicio.module.css'
import JogosComponete from './jogosComponente'
import Menu from './menulateral'
import Navbar from './navbar'

function Jogos() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
              <Menu/>
                <JogosComponete/>
            </section>
        </main>
    </>
  )
}

export default Jogos
