import Styles from '../css/conteudo.module.css'
import Menu from './menulateral'


function Conteudo(){

    return(
       <section className={Styles.conteudo}>
         <Menu/>
       </section>
    )
}

export default Conteudo