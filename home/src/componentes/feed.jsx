import React, { useState, useRef, useEffect } from 'react';
import Styles from '../css/feed.module.css';
import foto from '../imagem/usuario.png';
import grupo from '../imagem/grupo.png';
//import fotoPerfil from '../imagem/foto_perfil.png';
import like from '../imagem/like.png';
import coment from '../imagem/coment.png';
<<<<<<< HEAD
import perfil from '../imagem/pessoas.png';
=======
import foto1 from '../imagem/foto_conexoes1.png';
import foto2 from '../imagem/foto_conexoes2.png';
import foto3 from '../imagem/foto_conexoes3.png';
import foto4 from '../imagem/foto_conexoes4.png';
import foto5 from '../imagem/foto_conexoes5.png';
import foto6 from '../imagem/foto_conexoes6.png';
import foto7 from '../imagem/foto_conexoes7.png';
>>>>>>> 7438b162e71798a6074757e82b988b66218e3126

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCamera, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function Feed() {
    const [mensagem, setMensagem] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
    const [cameraAtiva, setCameraAtiva] = useState(false);
    const [curtido, setCurtido] = useState(false);
    const [comentado, setComentado] = useState(false);
    const [postagens, setPostagens] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const videoRef = useRef(null);
    const streamRef = useRef(null);

    useEffect(() => {
        setCarregando(true);
        fetch('http://localhost:8080/postagens')
            .then(res => res.json())
            .then(data => {
                setPostagens(data.reverse());
                setCarregando(false);
            })
            .catch(err => {
                console.error('Erro ao buscar postagens:', err);
                setCarregando(false);
            });
    }, []);

    useEffect(() => {
        if (modalAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            setCameraAtiva(false);
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [modalAberto]);

    useEffect(() => {
        if (cameraAtiva && videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Erro ao iniciar vídeo:', error);
                });
            }
        }
    }, [cameraAtiva]);

    const abrirCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            setCameraAtiva(true);
        } catch (err) {
            alert('Erro ao acessar a câmera: ' + err.message);
        }
    };

    const fecharCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        setCameraAtiva(false);
    };

    const tirarFoto = () => {
        if (!videoRef.current) return;
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            if (blob) {
                setArquivoSelecionado(new File([blob], 'foto_tirada.png', { type: 'image/png' }));
                alert('Foto tirada com sucesso!');
                fecharCamera();
            }
        }, 'image/png');
    };

    const handleFotoClick = () => {
        document.getElementById('inputModalFoto').click();
    };

    const handleArquivoChange = (e) => {
        if (e.target.files.length > 0) {
            alert('Arquivo selecionado com sucesso!');
            setArquivoSelecionado(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mensagem.trim()) return;
        if (!arquivoSelecionado || !(arquivoSelecionado instanceof File)) {
            alert('Selecione uma imagem válida!');
            return;
        }

        const formData = new FormData();
        formData.append('contexto', mensagem);
        formData.append('imagem', arquivoSelecionado);

        try {
            const response = await fetch('http://localhost:8080/postagens', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const novaPostagem = await response.json();
                setPostagens([novaPostagem, ...postagens]);
                alert('Post enviado com sucesso!');
                setMensagem('');
                setArquivoSelecionado(null);
                setModalAberto(false);
                fecharCamera();
            } else {
                alert('Erro ao enviar post!');
            }
        } catch (err) {
            alert('Erro ao enviar post: ' + err.message);
        }
    };

    const toggleCurtir = () => setCurtido(prev => !prev);
    const toggleComentar = () => setComentado(prev => !prev);

    function formatarData(dataString) {
        if (!dataString) return '';
        const data = new Date(dataString);
        return data.toLocaleString('pt-BR', { dateStyle: 'medium', timeStyle: 'short' });
    }

<<<<<<< HEAD
=======
    const [indiceAtual, setIndiceAtual] = useState(0);

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

   
>>>>>>> 7438b162e71798a6074757e82b988b66218e3126
    return (
        <section className={Styles.feed}>
            <div className={Styles.quadro1}>
                <div className={Styles.usuario}><img src={foto} alt="foto usuário" /></div>
                <form className={Styles.form} onSubmit={handleSubmit}>
                    <input
                        className={Styles.texto}
                        type="text"
                        placeholder="Compartilhe algo hoje, Maria!"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                    <div className={Styles.botoesLinha}>
                        <button type="button" className={Styles.iconeBotao} onClick={() => document.getElementById('inputFoto').click()}>
                            <FontAwesomeIcon icon={faCamera} /><span>Foto</span>
                        </button>
                        <button type="button" className={Styles.iconeBotao}>
                            <FontAwesomeIcon icon={faSmile} /><span>Sentimento</span>
                        </button>
                        <input className={Styles.botao} type="submit" value="Enviar" disabled={!mensagem.trim() || !arquivoSelecionado} />
                        <input type="file" id="inputFoto" style={{ display: 'none' }} accept="image/*" onChange={handleArquivoChange} />
                    </div>
                </form>
            </div>

            <div className={Styles.quadro2}>
                <button className={Styles.botao2} onClick={() => setModalAberto(true)}>+</button>
                <div className={Styles.texto2}><h2>Criar uma lembrança</h2><p>Compartilhe uma foto ou vídeo</p></div>
            </div>

            {modalAberto && (
                <div className={Styles.modalOverlay}>
                    <div className={Styles.modal}>
                        <button onClick={() => { setModalAberto(false); fecharCamera(); }} className={Styles.modalClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className={Styles.modalHeader}><h2>Fazer uma postagem</h2><div className={Styles.linha}></div></div>
                        <div className={Styles.modalUser}><img src={foto} alt="Usuária" /><div><strong>Maria Antônia</strong></div></div>
                        <textarea 
                            className={Styles.modalTexto} 
                            placeholder="Compartilhe algo hoje, Maria!" 
                            value={mensagem} 
                            onChange={(e) => setMensagem(e.target.value)} 
                        />

                        <div className={Styles.modalUpload2}>
                            <div className={Styles.modalUpload} onClick={handleFotoClick}>
                                <button className={Styles.botao3}><FontAwesomeIcon icon={faPlus} /></button>
                                <p>Clique aqui para adicionar <strong><br />fotos ou vídeos ou</strong></p>
                                <input type="file" id="inputModalFoto" style={{ display: 'none' }} accept="image/*" onChange={handleArquivoChange} />

                                {!cameraAtiva && (
                                    <button 
                                        className={Styles.botao4} 
                                        onClick={(e) => { e.stopPropagation(); abrirCamera(); }}
                                    >
                                        <FontAwesomeIcon icon={faCamera} /> Tire uma foto
                                    </button>
                                )}

                                {arquivoSelecionado && (
                                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                        <h4>Pré-visualização:</h4>
                                        <img
                                            src={URL.createObjectURL(arquivoSelecionado)}
                                            alt="Pré-visualização"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '300px',
                                                objectFit: 'contain',
                                                borderRadius: '10px',
                                                marginTop: '0.5rem'
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <button 
                            className={Styles.modalPostar} 
                            onClick={handleSubmit} 
                            disabled={!mensagem.trim() || !arquivoSelecionado} 
                            style={{ marginTop: '1.5rem' }}
                        >
                            Postar
                        </button>
                    </div>
                </div>
            )}

            {cameraAtiva && (
                <div className={Styles.cameraOverlay}>
                    <video ref={videoRef} className={Styles.cameraVideo} autoPlay muted playsInline />
                    <div className={Styles.cameraButtons}>
                        <button className={Styles.cameraButton} onClick={tirarFoto}>Tirar foto</button>
                        <button className={Styles.cameraButton} onClick={fecharCamera}>Cancelar</button>
                    </div>
                </div>
            )}

            <div className={Styles.quadro3}>
<<<<<<< HEAD
                <div className={Styles.textoInicio}><img src={grupo} alt='comunidade' /><h2>Amigos para conhecer</h2></div>
                <div className={Styles.carrossel}>
                    <div className={Styles.card1}></div>
                    <div className={Styles.card1}></div>
                    <div className={Styles.card1}></div>
                </div>
            </div>

            <div className={Styles.quadro4}>
                {carregando ? (
                    <div className={Styles.carregando}>Carregando postagens...</div>
                ) : postagens.length === 0 ? (
                    <p style={{ textAlign: 'center', margin: '2rem' }}>Nenhuma postagem ainda.</p>
                ) : (
                    postagens.map((post) => (
                        <div key={post.id_postagem} className={Styles.postagem}>
                            <div className={Styles.perfil}>
                                <img src={perfil} alt='foto de perfil' />
                                <div className={Styles.infoUser}>
                                    <h5>{post.usuario ? post.usuario.nome : 'Enlace+'}</h5>
                                    <p>{formatarData(post.data_postagem)}</p>
                                </div>
                            </div>
                            <div className={Styles.descricao}>
                                <h5>{post.contexto}</h5>
                            </div>
                            <div className={Styles.foto}>
                                <img 
                                    src={`http://localhost:8080/imagens/${post.imagem}`} 
                                    alt="post" 
                                />
                            </div>
                            <div className={Styles.reacao}>
                                <div className={`${Styles.like} ${curtido ? Styles.liked : ''}`} onClick={toggleCurtir}>
                                    <img src={like} alt='like' /><p>{curtido ? 'Curtiu' : 'Curtir'}</p>
                                </div>
                                <div className={`${Styles.coment} ${comentado ? Styles.commented : ''}`} onClick={toggleComentar}>
                                    <img src={coment} alt='comentario' /><p>{comentado ? 'Comentou' : 'Comentar'}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
=======
                <div className={Styles.textoInicio}>
                    <img src={grupo} alt='comunidade' />
                    <h2>Amigos para conhecer</h2>
                </div>
                <div className={Styles.carousel}>
                                    <button className={Styles.seta} onClick={prevPedidos} disabled={pedidos.length === 0}>◀</button>
                                    <div className={Styles.carouselContainer}>
                                        {visiveisPedidos.map((pessoa) => (
                                            <div key={pessoa.nome} className={Styles.idoso1}>
                                                <img className={Styles.foto1} src={pessoa.foto} alt={pessoa.nome} />
                                                <h3 className={Styles.nome}>{pessoa.nome}</h3>
                                                <div className={Styles.space}>
                                                    <a className={Styles.nome1} href="#" onClick={(e) => { e.preventDefault(); confirmarPedido(pessoa); }}>Adicionar aos amigos</a>
                                                    
                                                </div>
                                            </div>
                                        ))}
                                        {pedidos.length === 0 && <p>Sem pedidos pendentes</p>}
                                    </div>
                                    <button className={Styles.seta} onClick={nextPedidos} disabled={pedidos.length === 0}>▶</button>
                                </div>
            </div>

            <div className={Styles.quadro4}>
                <div className={Styles.perfil}>
                    <img src={fotoPerfil} alt='foto de perfil' />
                    <div className={Styles.infoUser}>
                        <h5>Elizabete Souza</h5>
                        <p>29 de janeiro, 2025</p>
                    </div>
                </div>
                <div className={Styles.descricao}>
                    <h5>Um dia com os meus netinhos lindos.</h5>
                    <p>#familia #amem #enlacemais</p>
                </div>
                <div className={Styles.foto}>
                    <img src={post} alt="fotinha" />
                </div>
                <div className={Styles.reacao}>
                    <div
                        className={`${Styles.like} ${curtido ? Styles.liked : ''}`}
                        onClick={toggleCurtir}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') toggleCurtir(); }}
                    >
                        <img src={like} alt='like' />
                        <p>{curtido ? 'Curtiu' : 'Curtir'}</p>
                    </div>
                    <div
                        className={`${Styles.coment} ${comentado ? Styles.commented : ''}`}
                        onClick={toggleComentar}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') toggleComentar(); }}
                    >
                        <img src={coment} alt='comentario' />
                        <p>{comentado ? 'Comentou' : 'Comentar'}</p>
                    </div>
                </div>
            </div>
            
>>>>>>> 7438b162e71798a6074757e82b988b66218e3126

            <div className={Styles.quadro5}></div>
            
            <footer className={Styles.rodape}>
                <p>© 2025 Enlace+ - Todos os direitos reservados</p>
                <div className={Styles.links}>
                    <a href="/contato">Contato</a>
                    <a href="/suporte">Suporte</a>
                    <a href="/termos">Termos de uso</a>
                </div>
            </footer>
        </section>
    );
}

export default Feed;