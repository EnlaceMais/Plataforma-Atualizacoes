import { useState } from 'react';
import Styles from '../css/jogos.module.css';
import memoria from '../imagem/image87.png';
import cartas from '../imagem/cartas.png';
import palavras from '../imagem/Palavras-1.png';
import desenhar from '../imagem/colorir.png';
import peca from '../imagem/domino.png';
import dama from '../imagem/dama.png';
import xadrez from '../imagem/xadrez.png';
import cabeca from '../imagem/quebra_cabeca.png';
import tico from '../imagem/ticode_oculos.png';
import Memoria from './memoriag';
import Paciencia from './paciencia';
import Crosswords from './crosswords';

function Jogos() {
  const [mostrarMemoria, setMostrarMemoria] = useState(false);
  const [mostrarPaciencia, setMostrarPaciencia] = useState(false);
  const [mostrarCrosswords, setMostrarCrosswords] = useState(false);
  const [mostrarColorir, setMostrarColorir] = useState(false);

  return (
    <section className={Styles.jogos}>
      <div className={Styles.quadro1}>
        <h1 className={Styles.texto}>Escolha um jogo</h1>
        <img src={tico} alt='tico'/>
      </div>

      <div className={Styles.quadro2}>
        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}><img src={peca} alt="foto do dominó" /></div>
          <h5 className={Styles.jogo}>Dominó</h5>
        </a>
        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}><img src={cabeca} alt="foto do quebra-cabeça" /></div>
          <h5 className={Styles.jogo}>Quebra-cabeça</h5>
        </a>
        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}><img src={dama} alt="foto da dama" /></div>
          <h5 className={Styles.jogo}>Dama</h5>
        </a>
        <a href="#" className={Styles.domino}>
          <div className={Styles.imagem}><img src={xadrez} alt="foto do xadrez" /></div>
          <h5 className={Styles.jogo}>Xadrez</h5>
        </a>
      </div>

      <div className={Styles.linha}></div>

      <div className={Styles.quadro3}>
        <div className={Styles.jogo2} onClick={() => setMostrarMemoria(true)} style={{ cursor: 'pointer' }}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={memoria} alt="foto da memória" />
          </div>
          <div className={Styles.info}>
            <h1 className={Styles.nome_jogo}>Jogo da memória</h1>
            <h5 className={Styles.descricao}>Encontre os pares das figuras</h5>
          </div>
        </div>

        <div className={Styles.jogo2} onClick={() => setMostrarPaciencia(true)} style={{ cursor: 'pointer' }}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={cartas} alt="foto do jogo das cartas" />
          </div>
          <div className={Styles.info}>
            <h1 className={Styles.nome_jogo}>Jogo de cartas</h1>
            <h5 className={Styles.descricao}>Jogue suas cartas</h5>
          </div>
        </div>
      </div>

      <div className={Styles.quadro4}>
        <div className={Styles.jogo2} onClick={() => setMostrarCrosswords(true)} style={{ cursor: 'pointer' }}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={palavras} alt="foto das palavras cruzadas" />
          </div>
          <div className={Styles.info}>
            <h1 className={Styles.nome_jogo}>Palavras cruzadas</h1>
            <h5 className={Styles.descricao}>Mostre sua mente afiada</h5>
          </div>
        </div>

        <div className={Styles.jogo2} onClick={() => setMostrarColorir(true)} style={{ cursor: 'pointer' }}>
          <div className={Styles.imagem2}>
            <img className={Styles.fundo_jogos} src={desenhar} alt="foto para colorir" />
          </div>
          <div className={Styles.info}>
            <h1 className={Styles.nome_jogo}>Jogo de colorir</h1>
            <h5 className={Styles.descricao}>Solte a criatividade nas cores</h5>
          </div>
        </div>
      </div>

      {/* Modal do Jogo da Memória */}
      {mostrarMemoria && (
        <div className={Styles.modalOverlay}>
          <div className={Styles.modalContent}>
            <button className={Styles.fechar} onClick={() => setMostrarMemoria(false)}>
              ✖
            </button>
            <Memoria onClose={() => setMostrarMemoria(false)} />
          </div>
        </div>
      )}

      {/* Modal do Jogo de Paciência (Cartas) */}
      {mostrarPaciencia && (
        <div className={Styles.modalOverlay}>
          <div className={Styles.modalContent}>
            <button className={Styles.fechar} onClick={() => setMostrarPaciencia(false)}>
              ✖
            </button>
            <Paciencia onClose={() => setMostrarPaciencia(false)} />
          </div>
        </div>
      )}

      {/* Modal do Jogo de Palavras Cruzadas */}
      {mostrarCrosswords && (
        <div className={Styles.modalOverlay}>
          <div className={Styles.modalContent}>
            <button className={Styles.fechar} onClick={() => setMostrarCrosswords(false)}>
              ✖
            </button>
            <Crosswords onClose={() => setMostrarCrosswords(false)} />
          </div>
        </div>
      )}

      {/* Modal do Jogo de Colorir */}
      {mostrarColorir && (
        <div className={Styles.modalOverlay}>
          <div className={Styles.modalContent}>
            <button className={Styles.fechar} onClick={() => setMostrarColorir(false)}>
              ✖
            </button>
            <iframe 
              src="https://gamesnacks.com/games/colorpixel" 
              width="100%" 
              height="100%"
              style={{ border: 'none', minHeight: '80vh' }}
              title="Jogo de Colorir"
              allowFullScreen
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Jogos;