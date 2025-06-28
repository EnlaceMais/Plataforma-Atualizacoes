import Styles from '../css/inicio.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import Jogos from './jogos'

function Inicio() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <Jogos/>
            </section>
        </main>
    </>
  )
}

export default Inicio
