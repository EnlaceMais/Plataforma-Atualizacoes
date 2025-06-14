import { useState, useEffect } from "react";
import Styles from '../css/semanaComponente.module.css';
import voltar from '../imagem/voltar.png';
import foto3 from '../imagem/semana.webp';
import foto4 from '../imagem/semana2.webp';
import foto5 from '../imagem/semana3.webp';
import local from '../imagem/localizacao.png';
import agenda from '../imagem/agenda.png';
import pessoas from '../imagem/pessoas.png';
import Modal from './modal-semana';
import { Link } from 'react-router-dom';

function SemanaComponente() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [indiceAtual, setIndiceAtual] = useState(0);

    const imagens = [foto3, foto4, foto5];

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((prev) => (prev + 1) % imagens.length);
        }, 5000);

        return () => clearInterval(intervalo);
    }, [imagens.length]);

    return (
        <section className={Styles.semana}>
            <div className={Styles.quadro}>
                <h5 className={Styles.info3}>
                    <a className={Styles.info5} href="#">
                        <img className={Styles.evento} src={voltar} alt="Voltar" />
                    </a>
                    <Link to="/eventos" className={Styles.info4}>Voltar para a página anterior</Link>
                </h5>
            </div>

            <section className={Styles.semana1}>
                <h2 className={Styles.titulo}>Semana do Idoso no Parque da Água Branca</h2>

                {/* Carrossel simples */}
                <div className={Styles.carrosselContainer}>
                    <img
                        className={Styles.quadro1}
                        src={imagens[indiceAtual]}
                        alt={`Imagem ${indiceAtual + 1}`}
                    />
                    <div className={Styles.indicadores}>
                        {imagens.map((_, i) => (
                            <span
                                key={i}
                                className={`${Styles.bolinha} ${i === indiceAtual ? Styles.ativa : ""}`}
                            />
                        ))}
                    </div>
                </div>

                <div className={Styles.info6}>
                    <img className={Styles.info9} src={local} alt="Localização" />
                    <h3 className={Styles.textinho}>
                        Local: Av. Francisco Matarazzo, 455 – Água Branca
                    </h3>
                </div>

                <div className={Styles.info7}>
                    <img className={Styles.info9} src={agenda} alt="Agenda" />
                    <h3 className={Styles.textinho}>Data: 1º de outubro de 2025 - Das 9h às 16h</h3>
                </div>

                <div className={Styles.info8}>
                    <img className={Styles.info9} src={pessoas} alt="Pessoas confirmadas" />
                    <h3 className={Styles.textinho}>32 pessoas confirmaram presença</h3>
                </div>

                <h3 className={Styles.descricao}>
                    Evento em comemoração ao Dia Internacional do Idoso, com missa ecumênica, palestras,
                    oficinas de arte, serviços de saúde, orientações jurídicas, teatro, atividades físicas,
                    apresentações artísticas e práticas corporais.
                </h3>

                <button className={Styles.b1} onClick={() => setMostrarModal(true)}>
                    Confirmar Presença
                </button>

                {mostrarModal && (
                    <Modal aoFechar={() => setMostrarModal(false)} />)}
            </section>

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

export default SemanaComponente;
