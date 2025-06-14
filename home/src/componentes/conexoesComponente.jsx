import { useState } from 'react';
import Styles from '../css/conexoesComponente.module.css';
import Vector from '../imagem/Vector.png';
import Vector2 from '../imagem/vector2.png';
import foto1 from '../imagem/foto_conexoes1.png';
import foto2 from '../imagem/foto_conexoes2.png';
import foto3 from '../imagem/foto_conexoes3.png';
import foto4 from '../imagem/foto_conexoes4.png';
import foto5 from '../imagem/foto_conexoes5.png';
import foto6 from '../imagem/foto_conexoes6.png';
import foto7 from '../imagem/foto_conexoes7.png';
import chat from '../imagem/chat.png';
import calendario from '../imagem/calendario.png';

function ConexoesComponente() {
    const [pedidos, setPedidos] = useState([
        { nome: 'Otávio Costa', foto: foto1 },
        { nome: 'Maria José', foto: foto2 },
        { nome: 'Robson Alves', foto: foto3 },
        { nome: 'Tereza Silva', foto: foto4 }
    ]);

    const [amigos, setAmigos] = useState([
        { nome: 'José Lima', foto: foto5 },
        { nome: 'Jair Barros', foto: foto6 },
        { nome: 'Nilda Santos', foto: foto7 },
    ]);

    const itemsPorTela = 3;

    const [indexPedidos, setIndexPedidos] = useState(0);
    const [indexAmigos, setIndexAmigos] = useState(0);

    const totalPedidos = pedidos.length;
    const totalAmigos = amigos.length;

    const nextPedidos = () => setIndexPedidos((indexPedidos + 1) % totalPedidos);
    const prevPedidos = () => setIndexPedidos((indexPedidos - 1 + totalPedidos) % totalPedidos);

    const nextAmigos = () => setIndexAmigos((indexAmigos + 1) % totalAmigos);
    const prevAmigos = () => setIndexAmigos((indexAmigos - 1 + totalAmigos) % totalAmigos);

    const visiveisPedidos = [];
    for (let i = 0; i < Math.min(itemsPorTela, totalPedidos); i++) {
        visiveisPedidos.push(pedidos[(indexPedidos + i) % totalPedidos]);
    }

    const visiveisAmigos = [];
    for (let i = 0; i < Math.min(itemsPorTela, totalAmigos); i++) {
        visiveisAmigos.push(amigos[(indexAmigos + i) % totalAmigos]);
    }

    const excluirPedido = (nome) => {
        const novosPedidos = pedidos.filter(p => p.nome !== nome);
        setPedidos(novosPedidos);
        if (indexPedidos >= novosPedidos.length && novosPedidos.length > 0) {
            setIndexPedidos(0);
        }
    };

    const confirmarPedido = (pessoa) => {
        setAmigos([...amigos, pessoa]);
        excluirPedido(pessoa.nome);
    };

    const desconectarAmigo = (nome) => {
        const novosAmigos = amigos.filter(a => a.nome !== nome);
        setAmigos(novosAmigos);
        if (indexAmigos >= novosAmigos.length && novosAmigos.length > 0) {
            setIndexAmigos(0);
        }
    };

    return (
        <section className={Styles.conexoes}>
            <div className={Styles.quadro1}>
                <div className={Styles.quadrinho1}>
                    <img className={Styles.vector} src={Vector} />
                    <h1 className={Styles.pedidos}>Pedidos de amizade</h1>
                </div>

                <div className={Styles.carousel}>
                    <button className={Styles.seta} onClick={prevPedidos} disabled={pedidos.length === 0}>◀</button>
                    <div className={Styles.carouselContainer}>
                        {visiveisPedidos.map((pessoa) => (
                            <div key={pessoa.nome} className={Styles.idoso1}>
                                <img className={Styles.foto1} src={pessoa.foto} alt={pessoa.nome} />
                                <h3 className={Styles.nome}>{pessoa.nome}</h3>
                                <div className={Styles.space}>
                                    <a className={Styles.nome1} href="#" onClick={(e) => { e.preventDefault(); confirmarPedido(pessoa); }}>Confirmar</a>
                                    <a className={Styles.nome2} href="#" onClick={(e) => { e.preventDefault(); excluirPedido(pessoa.nome); }}>Excluir</a>
                                </div>
                            </div>
                        ))}
                        {pedidos.length === 0 && <p>Sem pedidos pendentes</p>}
                    </div>
                    <button className={Styles.seta} onClick={nextPedidos} disabled={pedidos.length === 0}>▶</button>
                </div>
            </div>

            <div className={Styles.quadro2}>
                <div className={Styles.quadrinho2}>
                    <img className={Styles.vector} src={Vector2} />
                    <h1 className={Styles.pedidos}>Todos os seus amigos</h1>
                </div>

                <div className={Styles.carousel2}>
                    <button className={Styles.seta} onClick={prevAmigos} disabled={amigos.length === 0}>◀</button>
                    <div className={Styles.carouselContainer}>
                        {visiveisAmigos.map((amigo) => (
                            <div key={amigo.nome} className={Styles.idoso2}>
                                <img className={Styles.foto1} src={amigo.foto} alt={amigo.nome} />
                                <h3 className={Styles.nome}>{amigo.nome}</h3>
                                <div className={Styles.space2}>
                                    <div style={{ display: 'flex', justifyContent: 'left', gap: '22px', marginBottom: '20px', marginLeft: '-50px' }}>
                                        <a href='#'><img className={Styles.chat} src={chat} alt="Chat" /></a>
                                        <a href='#'><img className={Styles.calen} src={calendario} alt="Calendário" /></a>
                                    </div>
                                    <a className={Styles.nome3} href="#" onClick={(e) => { e.preventDefault(); desconectarAmigo(amigo.nome); }}>Desconectar</a>
                                </div>
                            </div>
                        ))}
                        {amigos.length === 0 && <p>Sem amigos no momento</p>}
                    </div>
                    <button className={Styles.seta} onClick={nextAmigos} disabled={amigos.length === 0}>▶</button>
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
    );
}

export default ConexoesComponente;
