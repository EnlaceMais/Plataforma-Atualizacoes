import Styles from '../css/jogos.module.css'
import memoria from '../imagem/image87.png'
import cartas from '../imagem/cartas.png'
import palavras from '../imagem/Palavras-1.png'
import desenhar from '../imagem/colorir.png'
import perguntas from '../imagem/Quiz.png'
import peca from '../imagem/domino.png'
import dama from '../imagem/dama.png'
import xadrez from '../imagem/xadrez.png'
import cabeca from '../imagem/quebra_cabeca.png'
import tico from '../imagem/ticode_oculos.png'

function jogosComponente() {

  return (
    <section className={Styles.jogos}>
      <div className={Styles.quadro1}>
        <h1 className={Styles.texto}>Escolha um jogo</h1>
        <img src={tico} alt='tico' />
      </div>
      <div className={Styles.quadro2}>
        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}>
            <img src={peca} alt="foto do dominó" /></div>
          <h5 className={Styles.jogo}>Dominó</h5>
        </a>

        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}>
            <img src={cabeca} alt="foto do dominó" /></div>
          <h5 className={Styles.jogo}>Quebra-cabeça</h5>
        </a>

        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}>
            <img src={dama} alt="foto do dominó" /></div>
          <h5 className={Styles.jogo}>Dama</h5>
        </a>

        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}>
            <img src={xadrez} alt="foto do dominó" /></div>
          <h5 className={Styles.jogo}>Xadrez</h5>
        </a>

      </div>
      <div className={Styles.linha}></div>

      <div className={Styles.quadro3}>
        <a href="#" className={Styles.jogo2}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={memoria} alt="foto da memória" /></div>
          <a href="#" className={Styles.info}>
            <h1 className={Styles.nome_jogo} href="#">Jogo da memória</h1>
            <h5 className={Styles.descricao}>Encontre os pares das figuras</h5></a>
        </a>
        <a href='#' className={Styles.jogo2}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={cartas} alt="foto do jogo das cartas" /></div>
          <a href="#" className={Styles.info}>
            <a className={Styles.nome_jogo} href="#">Jogo de cartas</a>
            <h5 className={Styles.descricao}>Jogue suas cartas</h5></a>
        </a>
      </div>

      <div className={Styles.quadro4}>
        <a href='#' className={Styles.jogo2}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={perguntas} alt="foto de Quiz perguntas" /></div>
          <a href="#" className={Styles.info}>
            <a className={Styles.nome_jogo} href="#">Quiz nostalgia</a>
            <h5 className={Styles.descricao}> Teste sua memória nostálgica</h5></a>
        </a>

        <a href='#' className={Styles.jogo2}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={palavras} alt="foto da palavras cruzadas" /></div>
          <a href="#" className={Styles.info}>
            <a className={Styles.nome_jogo} href="#">Palavras cruzadas</a>
            <h5 className={Styles.descricao}>Mostre sua mente afiada</h5></a>
        </a>

      </div>

      <div className={Styles.quadro5}>
        <a href='#' className={Styles.jogo2}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={desenhar} alt="foto da palavras cruzadas" /></div>
          <a href="#" className={Styles.info}>
            <a className={Styles.nome_jogo} href="#">Jogo de colorir</a>
            <h5 className={Styles.descricao}>Solte a criatividade nas cores</h5></a>
        </a>

        <div className={Styles.jogo3}>

        </div>

      </div>

      <footer className={Styles.rodape}>
        <p>© 2025 Enlace+ - Todos os direitos reservados</p>
        <div className={Styles.links}>
          <a href='#'>Termo de uso</a>
          <a href='#'>Privacidade</a>
          <a href='#'>Ajuda</a>
        </div>
      </footer>
    </section>
  )
}

export default jogosComponente