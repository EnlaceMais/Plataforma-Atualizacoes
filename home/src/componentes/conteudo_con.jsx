import Styles from '../css/conteudo_con.module_con.css'
import Menu from './menulateral_con.jsx'


function Conteudo_con(){

    return(
       <section className={Styles.conteudo}>
         <Menu/>
       </section>
    )
}

export default Conteudo_con