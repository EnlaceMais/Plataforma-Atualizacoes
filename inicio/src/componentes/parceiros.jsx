import Styles from '../css/parceiro.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import ParceirosComponentes from './parceirosComponetes'

function Parceiros() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <ParceirosComponentes/>
            </section>
        </main>
    </>
  )
}

export default Parceiros
