import { useState, useRef } from "react";
import Styles from '../css/alongamento.module.css';
import intenso from '../imagem/intenso.jpg';
import moderado2 from '../imagem/moderado2.jpg';
import leve from '../imagem/leve.jpg';
import moeda from '../imagem/moeda.png';
import caminhada_leve from '../imagem/caminhada_leve.jpg';
import alongamento_pesinho from '../imagem/alongamento_pesinho.jpg';

function Alongamento() {
  const [etapa, setEtapa] = useState("exercicios");
  const [tipoSelecionado, setTipoSelecionado] = useState(null);
 const [videoFinalizado, setVideoFinalizado] = useState(true); // só para teste
  const [audioTocando, setAudioTocando] = useState(false);
  const [msgAudioFinalizado, setMsgAudioFinalizado] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);


  const opcoesAlongamento = [
    {
      tipo: "leve",
      titulo: "Alongamento Leve 🧘",
      descricao: "Ideal para iniciar o dia com leveza.",
      tempo: "6 minutos",
      beneficio: "Melhora a circulação e reduz tensões.",
      video: "videos/leve.mp4",
      audioDescricao: "audios/leve.mp3"
      
    },
    {
      tipo: "moderado",
      titulo: "Alongamento Moderado 🏃‍♀️",
      descricao: "Ative o corpo sem exageros.",
      tempo: "8 minutos",
      beneficio: "Aumenta a flexibilidade e previne lesões.",
      video: "videos/moderado.mp4",
      audioDescricao: "audios/moderado.mp3"
    },
    {
      tipo: "intenso",
      titulo: "Alongamento Intenso 🔥",
      descricao: "Para quem quer um bom desafio físico.",
      tempo: "10 minutos",
      beneficio: "Desenvolve mobilidade e flexibilidade.",
      video: "videos/intenso.mp4",
      audioDescricao: "audios/intenso.mp3"
    }
  ];
    
  const iniciarAlongamento = (nivel) => {
    const selecao = opcoesAlongamento.find(item => item.tipo === nivel);
    setTipoSelecionado(selecao);
    setEtapa("detalhes");
    setVideoFinalizado(false);
    setAudioTocando(false);
    setMsgAudioFinalizado(false);
  };

  const repetirVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setVideoFinalizado(false);
  };
  

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioTocando) {
      audioRef.current.pause();
      setAudioTocando(false);
      setMsgAudioFinalizado(true);
    } else {
      audioRef.current.play();
      setAudioTocando(true);
      setMsgAudioFinalizado(false);

      audioRef.current.onended = () => {
        setAudioTocando(false);
        setMsgAudioFinalizado(true);
      };
    }
  };

return (
  <div className={Styles.container}>
    {etapa === "exercicios" && (
      <div className={Styles.cards_exercicio}>
        <div className={Styles.card_base_exercicio} onClick={() => iniciarAlongamento("leve")}>
          <div>
            <img src={leve} alt="Alongamento leve" className={Styles.imagem_leve} />
          </div>
          <div className={Styles.conteudo_exercicio}>
            <div className={Styles.card_texto_exercicio}>
              <h2 className={Styles.titulo_exercicio}>Alongamento Leve </h2>
              <p className={Styles.descricao_exercicio}>Ideal para iniciar o dia com leveza.</p>
            </div>
            {/* Você pode tirar esse botão se quiser, já que o clique está no card */}
            <button className={Styles.iniciar_exercicio}>Iniciar</button>
          </div>
        </div>

        <div className={Styles.card_base_exercicio} onClick={() => iniciarAlongamento("moderado")}>
          <div className={Styles.imagem_espaco_exercicio}>
            <img src={moderado2} alt="Alongamento moderado" className={Styles.imagem_moderado} />
          </div>
          <div className={Styles.conteudo_exercicio}>
            <div className={Styles.card_texto_exercicio}>
              <h2 className={Styles.titulo_exercicio}>Alongamento Moderado</h2>
              <p className={Styles.descricao_exercicio}>Ative o corpo sem exageros.</p>
            </div>
            <button className={Styles.iniciar_exercicio}>Iniciar</button>
          </div>
        </div>

        <div className={Styles.card_base_exercicio} onClick={() => iniciarAlongamento("intenso")}>
          <div className={Styles.imagem_espaco_exercicio}>
            <img src={intenso} alt="Alongamento intenso" className={Styles.imagem_intenso} />
          </div>
          <div className={Styles.conteudo_exercicio}>
            <div className={Styles.card_texto_exercicio}>
              <h2 className={Styles.titulo_exercicio}>Alongamento Intenso </h2>
              <p className={Styles.descricao_exercicio}>Para quem quer um bom desafio físico.</p>
            </div>
            <button className={Styles.iniciar_exercicio}>Iniciar</button>
          </div>
        </div>

        <div className={Styles.card_base_exercicio}>
  <div>
    <img src={caminhada_leve} alt="Caminhada leve" className={Styles.imagem_caminhada} />
  </div>
  <div className={Styles.conteudo_exercicio}>
    <div className={Styles.card_texto_exercicio}>
      <h2 className={Styles.titulo_exercicio}> Caminhada Leve</h2>
      <p className={Styles.descricao_exercicio}> Movimente-se no seu ritmo.
         Bem-estar e leveza em cada passo.</p>
    </div>
    <button className={Styles.iniciar_exercicio}>Iniciar</button>
  </div>
</div>
<div className={Styles.card_base_exercicio}>
  <div>
    <img src={alongamento_pesinho} alt="Alongamento pesinho" className={Styles.imagem_pesinho} />
  </div>
  <div className={Styles.conteudo_exercicio}>
    <div className={Styles.card_texto_exercicio}>
      <h2 className={Styles.titulo_exercicio}>Alongamento com Pesinhos</h2>
      <p className={Styles.descricao_exercicio}>Fortalece o corpo enquanto alonga. Uma dose de energia e mobilidade.</p>
    </div>
    <button className={Styles.iniciar_exercicio}>Iniciar</button>
  </div>
</div>
</div>
    )}
{etapa === "exercicios" && (
  <div className={Styles.resultados_container}>
      <h2 className={Styles.resultados_titulo}>Meus resultados ✨</h2>
      <p className={Styles.resultados_mensagem}>
        Você está indo muito bem, Maria Antônia!<br />
        Que tal manter o ritmo hoje?
      </p>
      <p className={Styles.resultados_tempo}>Total da semana: 25 minutos de atividades</p>

      <div className={Styles.progresso_barras}>
        <div className={Styles.barra + ' ' + Styles.ativa}></div>
        <div className={Styles.barra + ' ' + Styles.ativa}></div>
        <div className={Styles.barra + ' ' + Styles.ativa}></div>
        <div className={Styles.barra}></div>
        <div className={Styles.barra}></div>
      </div>

      <div className={Styles.recompensa_card}>
        <img className={Styles.moeda_icone} src={moeda} alt="Moeda" />
        <p className={Styles.recompensa_texto}>
          Complete <strong>3 aulas consecutivas</strong>, esta semana e ganhe uma <strong>ticoeda virtual!</strong>
        </p>
      </div>
    </div>
    )}
      

     {etapa === "detalhes" && tipoSelecionado && (
      <div className={Styles.detalhes}>
        <h2 className={Styles.titulo_exercicio}>{tipoSelecionado.titulo}</h2>

        <div className={Styles.card_audio_explicacao}>
          <p>🎧 Ouça a explicação sobre os benefícios deste alongamento.</p>
          <button
            onClick={toggleAudio}
            className={Styles.botao_ouvir_audio}
            aria-label="Ouvir explicação em áudio"
          >
            {audioTocando ? "⏸ Parar explicação" : "▶ Ouvir explicação"}
          </button>
        </div>

        {msgAudioFinalizado && (
          <>
            <div className={Styles.mensagem_audio_finalizado}>
              Pronto! Agora veja o vídeo do alongamento abaixo.
            </div>

            <div className={Styles.video_area}>
              <video
                ref={videoRef}
                controls
                className={Styles.video_player}
                onEnded={() => setVideoFinalizado(true)}
                style={{ width: "100%", borderRadius: "12px" }}
              >
                <source src={tipoSelecionado.video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </>
        )}

        {videoFinalizado && (
          <div className={Styles.card_motivacional}>
            <h3>🎉 Parabéns por completar o alongamento!</h3>
            <p>Continue assim, seu corpo agradece!</p>
            <div className={Styles.botoes_finais}>
              <button onClick={repetirVideo} className={Styles.botao_secundario}>
                Fazer de novo
              </button>
            </div>
          </div>
        )}

        <div className={Styles.card_info_detalhes}>
          <div className={Styles.info_card}>
            <h4 className={Styles.subtitulo}>⏱ Tempo</h4>
            <p>{tipoSelecionado.tempo}</p>
          </div>
          <div className={Styles.info_card}>
            <h4 className={Styles.subtitulo}>🎯 Para que serve</h4>
            <p>{tipoSelecionado.beneficio}</p>
          </div>
          <div className={Styles.area_botao_voltar}>
            <button onClick={() => setEtapa("exercicios")} className={Styles.botao_voltar}>
              Voltar
            </button>
          </div>
        </div>

        <audio ref={audioRef} src={tipoSelecionado.audioDescricao} />
      </div>
    )}
  </div>
);
}

export default Alongamento;