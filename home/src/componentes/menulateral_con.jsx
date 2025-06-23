import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from '../css/menulateral_con.module.css';
import voltar from '../imagem/voltar.png';
import usuario from '../imagem/proa.webp';
import usuarioco from '../imagem/usuario_co.png';
import usuarioas from '../imagem/usuario_as.png';
import usuariofj from '../imagem/usuario_fj.png';
import usuarioms from '../imagem/usuario_ms.png';
import { Link } from 'react-router-dom';

function Menu() {
    const [activeChat, setActiveChat] = useState(null);
    const location = useLocation();
    const isChatRoute = location.pathname.startsWith('/conversa_fs/');

    if (window.innerWidth <= 768 && isChatRoute) {
        return null;
    }

    const contatos = [
        { id: 1, nome: "Evento Proa!", mensagem: "Finalmente o dia tão aguardado chegou", data: "04 de Julho", imagem: usuario },
        { id: 2, nome: "Catarina Oliveira", mensagem: "Olá, como você está?", data: "28 de Abril", imagem: usuarioco },
        { id: 3, nome: "Anselmo da Silva", mensagem: "Gostaria de te ver mais vezes!", data: "26 de Abril", imagem: usuarioas },
        { id: 4, nome: "Francisco José", mensagem: "Está afim de jogar?", data: "15 de Abril", imagem: usuariofj },
        { id: 5, nome: "Marcia Santos", mensagem: "Que foto linda amiga!", data: "03 de Abril", imagem: usuarioms },
    ];

    return (
        <main className={Styles.menu}>
            <div className={Styles.volt1}>
                <a className={Styles.volt2} href="#"><button className={Styles.volt3}><img className={Styles.voltar} src={voltar} alt="voltar" />Voltar</button></a>
            </div>
            <h2 className={Styles.nominho}>Bate-papos</h2>
            <div className={Styles.linha}></div>

            <section className={Styles.centro}>
                {contatos.map((contato) => {
                    const isProa = contato.id === 1;

                    // Se for Proa, usa Link para navegar
                    if (isProa) {
                        return (
                            <Link
                                to={`conversa_fs/${contato.id}`}
                                key={contato.id}
                                className={Styles.caix1}
                                onClick={(e) => {
                                    if (contato.id === 1) {
                                        if (activeChat === 1) {
                                            e.preventDefault(); // Impede navegação
                                            window.location.reload(); // Recarrega a página
                                        } else {
                                            setActiveChat(1); // Marca como ativo
                                        }
                                    }
                                }}
                            >
                                <div className={`${Styles.con1} ${activeChat === contato.id ? Styles.active : ''}`}>
                                    <img className={Styles.f1} src={contato.imagem} alt={contato.nome} />
                                    <div className={Styles.desc1}>
                                        <h3 className={Styles.letri1}>{contato.nome}</h3>
                                        <p className={Styles.letri2}>{contato.mensagem}</p>
                                        <p className={Styles.letri2}>{contato.data}</p>
                                    </div>
                                </div>
                            </Link>

                        );
                    }

                    // Para os outros contatos, renderiza só um div, sem Link, e sem onClick (clicar não navega)
                    return (
                        <div
                            key={contato.id}
                            className={Styles.caix1}
                            style={{ cursor: 'default', opacity: 0.6 }} // opcional, deixa mais "desabilitado"
                        >
                            <div className={Styles.con1}>
                                <img className={Styles.f1} src={contato.imagem} alt={contato.nome} />
                                <div className={Styles.desc1}>
                                    <h3 className={Styles.letri1}>{contato.nome}</h3>
                                    <p className={Styles.letri2}>{contato.mensagem}</p>
                                    <p className={Styles.letri2}>{contato.data}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default Menu;
