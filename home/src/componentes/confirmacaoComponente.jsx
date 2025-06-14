import { useState } from "react";
import Styles from '../css/confirmacaoComponente.module.css';
import voltar from '../imagem/voltar.png';
import Modal from './modalConfirmacao';
import imagem7 from '../imagem/semana.webp';
import imagem8 from '../imagem/forum.jpg';
import imagem9 from '../imagem/polo.jpg';
import imagem10 from '../imagem/benemerito.png';
import imagem11 from '../imagem/chacara.webp';
import local from '../imagem/localizacao.png';
import agenda from '../imagem/agenda.png';
import SeuTico from '../imagem/SeuTico.png'
import { Link } from 'react-router-dom';

function ConfirmacaoComponente() {
  const eventosOriginais = [
    {
      id: 1,
      titulo: " Semana do Idoso no Parque da Água Branca",
      local: " Av. Francisco Matarazzo, 455 – Água Branca",
      data: " 1º de outubro de 2025 - Das 9h às 16h",
      imagem: imagem7,
    },
    {
      id: 2,
      titulo: " 7º Fórum São Paulo da Longevidade",
      local: " Rua José Bernardo Pinto, 333 – Vila Guilherme",
      data: " 27 a 29 de outubro de 2025",
      imagem: imagem8,
    },
    {
      id: 3,
      titulo: " Polo Cultural da Terceira Idade",
      local: " Rua Teixeira Mendes, 262 – Cambuci",
      data: " Atividades contínuas ao longo do ano",
      imagem: imagem9,
    },
    {
      id: 4,
      titulo: " Atividades no Parque Benemérito José Brás",
      local: " Rua Piratininga, 365 – Brás",
      data: " Atividades contínuas ao longo do ano",
      imagem: imagem10,
    },
    {
      id: 5,
      titulo: " Atividades no Parque Chácara das Flores",
      local: " Estrada Dom João Neri, 3551 – Jardim Nazaré",
      data: " Atividades contínuas ao longo do ano",
      imagem: imagem11,
    },
  ];

  const [eventosVisiveis, setEventosVisiveis] = useState(eventosOriginais);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  const abrirModal = (id) => {
    setEventoSelecionado(id);
    setMostrarModal(true);
  };

  const confirmarCancelamento = () => {
    setEventosVisiveis((prev) => prev.filter(evento => evento.id !== eventoSelecionado));
    setMostrarModal(false);
  };

  return (
    <section className={Styles.semana}>
      <div className={Styles.quadro5}>
        <div className={Styles.informacoes}>
          <h1 className={Styles.info12}>Olá, Maria Antônia!</h1>
          <h3 className={Styles.info13}>Esses são todos os seus<br></br> eventos confirmados</h3>
        </div>
        <img src={SeuTico} alt="seu tico"/>
      </div>

      <div className={Styles.quadro}>
        <h5 className={Styles.info3}>
          <a className={Styles.info5} href="#"><img className={Styles.evento} src={voltar} alt="" /></a>
          <Link to="/eventos" className={Styles.info4}>Voltar para a página anterior</Link>
        </h5>
      </div>

      {eventosVisiveis.map((evento) => (
        <section key={evento.id} className={Styles.semana1}>
          <img className={Styles.foto5} src={evento.imagem} alt={evento.titulo} />

          <div className={Styles.informacao}>
            <h4 className={Styles.info15}>{evento.titulo}</h4>
            <h2 className={Styles.info16}>
              <img className={Styles.foto6} src={local} alt="Localização" /> {evento.local}
            </h2>
            <h2 className={Styles.info17}>
              <img className={Styles.foto7} src={agenda} alt="Agenda" /> {evento.data}
            </h2>
            <button className={Styles.b1} onClick={() => abrirModal(evento.id)}>
              Cancelar<span className={Styles.icone}>✖</span>
            </button>
          </div>


        </section>
      ))}

      {mostrarModal && (
        <Modal
          aoFechar={() => setMostrarModal(false)} // <-- ESSENCIAL!
          onConfirm={confirmarCancelamento}
        />
      )}
      <footer className={Styles.rodape}>
        <p>© 2025 Enlace+ - Todos os direitos reservados</p>
        <div className={Styles.links}>
          <a href='#'>Termo de uso</a>
          <a href='#'>Privacidade</a>
          <a href='#'>Ajuda</a>
        </div>
      </footer>
    </section>
  );
}

export default ConfirmacaoComponente;
