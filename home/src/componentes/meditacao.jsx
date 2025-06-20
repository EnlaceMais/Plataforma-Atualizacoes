 import { useState } from "react";
import Styles from '../css/meditacao.module.css';
import gratidao from '../imagem/gratidao.jpeg';
import musical from '../imagem/musical.jpg';
import movimento from '../imagem/movimento.jpg';
import { useRef } from "react";
import sugestao1 from '../imagem/sugestao1.jpg';
import sugestao from '../imagem/sugestao.jpg';
import sugestao3 from '../imagem/sugestao3.jpg';
import sugestao4 from '../imagem/sugestao4.jpeg';
import sugestao5 from '../imagem/sugestao5.jpg';
import sugestao6 from '../imagem/sugestao6.jpg';
import sugestao7 from '../imagem/sugestao7.png';
import sugestao9 from '../imagem/sugestao9.jpg';
import sugestao10 from '../imagem/sugestao10.jpg';
import sugestao11 from '../imagem/sugestao11.jpg';
import sugestao12 from '../imagem/sugestao12.jpg';
import sugestao13 from '../imagem/sugestao13.jpg';
import meditacao_ativa from '../imagem/meditacao_ativa.jpg';
import meditacao_noturno from '../imagem/meditacao_noturno.jpg';



export default function Meditacao() {
 const [etapa, setEtapa] = useState("exercicios");// inicio, gratidaoSugestoes, ouvir, sentimento
  const [tipo, setTipo] = useState("");
  const [sentimento, setSentimento] = useState("");
  const [mensagemGratidao, setMensagemGratidao] = useState("");
  const [textoGratidao, setTextoGratidao] = useState("");
  const [meditacaoSelecionada, setMeditacaoSelecionada] = useState(null);
  const mensagemRef = useRef(null);
  const carrosselRef = useRef(null);



  const opcoesSentimento = [
    { emoji: "😌", label: "Tranquilo(a)"},
    { emoji: "😊", label: "Feliz"},
    { emoji: "💪", label: "Motivado(a)"},
    { emoji: "😢", label: "Aliviado(a)"},
    { emoji: "🌟", label: "Renovado(a)"},
  ];


  const meditacoesGratidao = [
    {
      nome: "Gratidão pela Vida",
      descricao: "Meditação para cultivar gratidão pelo presente.",
      duracao: "10:30 minutos",
      sugestoes: ["Gratidão pelo hoje", "Gratidão pelas pessoas", "Gratidão pelas conquistas"],
      audio: "/audio/gratidao_pela_vida.mp3"
    },
   {
      nome: "Afirmações para Autoestima",
      descricao: "Meditação guiada com afirmações para fortalecer sua autoestima e autoconfiança.",
       duracao: "7:09 minutos",
     sugestoes : ["Eu sou suficiente", "Confiança em mim", "Me amo como sou"],
      audio: "/audio/meditacao_autoestima.mp3",
    },
  ];
  const meditacoesMusical = [
  {
nome: "Espaço Pacífico",
descricao: "Música espiritual com flauta para relaxar, elevar a vibração e criar um ambiente de paz interior.",
duracao: "5:35 minutos",
sugestoes: ["Som da flauta", "Paz interior", "Elevação espiritual"],
    audio: "/audio/meditacao_sons.mp3",
  },
  {
   nome: "Calmante e Relaxante",
   descricao: "Meditação calmante com sons suaves para relaxar o corpo e aquietar a mente.",
   duracao: "14:36 minutos",
    sugestoes: ["Tranquilidade profunda", "Relaxamento total", "Serenidade interior"],
     audio: "/audio/meditacao_relaxante.mp3",
  },
];

const meditacoesMovimento = [
  {
nome: "Pausa de 5 Minutos",
descricao: "Uma meditação rápida para acalmar a mente e recentrar as emoções.",
duracao: "5:10 minutos",
sugestoes: ["Respire fundo", "Silencie por dentro", "Retome o equilíbrio"],
    audio: "/audio/meditacao_rapida.mp3",
  },
   {
    nome: "Calma Interior",
   descricao: "Meditação guiada para aliviar a ansiedade e trazer presença ao agora.",
     duracao: "11:30 minutos",
    sugestoes: ["Respiração consciente", "Pensamentos leves", "Aceitar o momento"],
    audio: "/audio/meditacao_ansiedade.mp3",
  },
];

  // Quando clica em "Gratidão" na tela inicial
  const iniciarGratidao = () => {
    setTipo("Gratidão");
    setEtapa("gratidaoSugestoes");
  };

  // Quando escolhe uma meditação Gratidão para ouvir
  const ouvirMeditacao = (med) => {
    setMeditacaoSelecionada(med);
    setEtapa("ouvir");
  };

  // Quando clica em "Musical" ou "Em Movimento" na tela inicial
const iniciarMeditacao = (tipoEscolhido) => {
  setTipo(tipoEscolhido);
  if (tipoEscolhido === "Musical") {
    setEtapa("musicalSugestoes");
  } else if (tipoEscolhido === "Em Movimento") {
    setEtapa("movimentoSugestoes");
  }
};

  return (
<div className={Styles.container}>
    {etapa === "exercicios" && (
        <div className={Styles.cards_meditacao}>
     <div className={Styles.card_base} onClick={iniciarGratidao}>
      <div>
    <img src={gratidao} alt="imagem de uma mulher agradecendo" className={Styles.imagem_gratidao} />
  </div>
    <div className={Styles.conteudo}>
    <div className={Styles.card_texto}>
      <h2 className={Styles.titulo_medita}>Meditação da Gratidão</h2>
      <p className={Styles.texto1}> Acalmar a mente e lembrar com carinho do que realmente importa.
       </p>
    </div>
    <button className={Styles.iniciar}>Iniciar</button> </div>
  </div>

  <div className={Styles.card_base} onClick={() => iniciarMeditacao("Musical")}>
         <div>
    {/* Aqui você pode colocar uma imagem depois */}
    <img src= {musical }alt="meditação" className={Styles.imagem_musical} />
  </div>
       <div className={Styles.conteudo}>
    <div className={Styles.card_texto}>
      <h2 className={Styles.titulo_medita}> Meditação Musical </h2>
      <p className={Styles.texto1}> Acalmar a mente por meio de músicas e sons relaxantes.</p>
    </div>
    <button className={Styles.iniciar}>Iniciar</button> </div>
      </div>

  <div className={Styles.card_base} onClick={() => iniciarMeditacao("Em Movimento")}>
       <div>
    <img src={movimento} alt="meditação" className={Styles.imagem_movimento} />
     </div>
       <div className={Styles.conteudo}>
    <div className={Styles.card_texto}>
      <h2 className={Styles.titulo_medita}> Meditação Guiada</h2>
      <p className={Styles.texto1}> Com voz e respiração, reconecte-se com sua essência.</p>
    </div>
    <button className={Styles.iniciar}>Iniciar</button> </div>
  </div>

<div className={Styles.card_base}>
  <div>
    <img src={meditacao_ativa} alt="Meditação futura" className={Styles.imagem_movimento} />
  </div>
  <div className={Styles.conteudo}>
    <div className={Styles.card_texto}>
      <h2 className={Styles.titulo_medita}>Meditação Ativa</h2>
      <p className={Styles.texto1}> Movimente-se com atenção plena para aliviar tensões e renovar sua energia. </p>
      
    </div>
      <button className={Styles.iniciar}>Iniciar</button>
  </div>
</div>
<div className={Styles.card_base}>
  <div>
    <img src={meditacao_noturno} alt="Meditação futura" className={Styles.imagem_movimento} />
  </div>
  <div className={Styles.conteudo}>
    <div className={Styles.card_texto}>
      <h2 className={Styles.titulo_medita}>Meditação Noturna</h2>
     <p className={Styles.texto1}> Prepare-se para uma noite serena e renovadora, com relaxamento guiado.
    </p>
    </div>
    <button className={Styles.iniciar}>Iniciar</button>
  </div>
</div>



 <div className={Styles.sugestoesContainer}>
  <div>
  <h3 className={Styles.subtitulo_sugestao}>SUGESTÕES PARA VOCÊ</h3>
</div>
  {/* <button className={Styles.setaEsquerda} onClick={scrollEsquerda}>←</button> */}

  <div className={Styles.carrossel} ref={carrosselRef}>
    {[
      { titulo: "Manhã Tranquila", texto: "Comece o dia com leveza e intenção.", img: sugestao },
      { titulo: "Noite de Paz", texto: "Relaxe antes de dormir.", img: sugestao3 },
            { titulo: "Gratidão", texto: "Aprecie as pequenas coisas.", img: sugestao5 },
            { titulo: "Respiração Consciente", texto: "Foque na respiração para acalmar corpo e mente.", img: sugestao1 },
            { titulo: "Amor", texto: "Conecte-se com o amor que você tem em sua vida.", img: sugestao4 },
   {titulo: "Renovação", texto: "Deixe que a energia da natureza leve o que não te serve mais.", img: sugestao6 },
{ titulo: "Florescer", texto: "Mesmo em águas turvas, é possível crescer com leveza.", img: sugestao7 },
{ titulo: "Infinito", texto: "Sob o céu estrelado, lembre-se do quanto você faz parte de algo maior.", img: sugestao9 },
{ titulo: "Calma", texto: "Deixe que as ondas levem embora o que pesa e tragam o que faz bem.", img: sugestao10 },
{ titulo: "Conexão", texto: "Entre árvores e silêncio, a alma encontra seu equilíbrio.", img: sugestao11 },
   { titulo: "Essência", texto: "Como a luz que dança no ar, sua energia também pode encantar o mundo.", img: sugestao12 },
   { titulo: "Companhia", texto: "O tempo só fortalece os laços que vêm do coração.", img: sugestao13 }

    ].map((card, i) => (
      <div key={i} className={Styles.miniCard}>
        <img className={Styles.imagemMiniCard} src={card.img} alt={card.titulo} />
        <h4>{card.titulo}</h4>
        <p className={Styles.card_texto}> {card.texto}</p>
            <button className={Styles.botaoOuvir}>Ouvir agora</button>
      </div>
    ))}
  </div>

  {/* <button className={Styles.setaDireita} onClick={scrollDireita}>→</button> */}
</div>


  {/* Comentários de Usuários */}
<div className={Styles.comentarios}>
  <h3 className={Styles.subtitulo_comentario}>Como as pessoas se sentiram:</h3>
  <div className={Styles.listaComentarios}>
    <div className={Styles.comentario}>
      <p className={Styles.texto_comentario}>“Me senti muito mais leve depois da prática. Gratidão!”</p>
      <span>– Ana, 42</span>
    </div>
    <div className={Styles.comentario}>
      <p  className={Styles.texto_comentario} >“Consegui dormir melhor. Já virou rotina!”</p>
      <span>– Marcos, 35</span>
    </div>
    <div className={Styles.comentario}>
      <p  className={Styles.texto_comentario}>“É incrível como uma pausa de 10 minutos muda o meu dia.”</p>
      <span>– Juliana, 29</span>
    </div>
  </div>
</div>


      </div>
      )} 


   {etapa === "gratidaoSugestoes" && (
  <div className={Styles.escolhas}>
  {meditacoesGratidao.map((med, i) => (
  <div className={Styles.teste} key={i}>
    <h2 className={Styles.nome}>{med.nome}</h2>
    <p className={Styles.info}><b>Descrição:</b> {med.descricao}</p>
    <p className={Styles.info}><b>Duração:</b> {med.duracao}</p>
    <p className={Styles.info}><b>Sugestões:</b></p>
    <ul className={Styles.lista}>
      {med.sugestoes.map((sug, index) => (
        <li key={index}>{sug}</li>
      ))}
    </ul>
    <div className={Styles.ouvir_container}>
      <button className={Styles.ouvir} onClick={() => ouvirMeditacao(med)}> Ouvir agora</button>
    </div>
  </div>
))}
    <button className={Styles.voltar} onClick={() => setEtapa("exercicios")}>Voltar</button>
  </div>
)}

   {etapa === "ouvir" && (
  <div className={Styles.card_ouvir}>
    <h3 className={Styles.titulo_medita}>🧘 {tipo}{meditacaoSelecionada ? ` - ${meditacaoSelecionada.nome}` : ""}</h3>
    <p className={Styles.info}>Sinta-se confortável e aproveite este momento para você.</p>
    <div className={Styles.player}>
      {meditacaoSelecionada ? (
        <audio controls src={meditacaoSelecionada.audio} style={{ width: "100%" }} />
      ) : (
        <>🎧 [Aqui terá um player...]</>
      )}
    </div>   
  
   {tipo === "Gratidão" && (
      <div className="card-gratidao">
        <h4 className={Styles.titulo_medita}>Hoje, eu sou grata por...</h4>
        <div className={Styles.opcoes}>
          <button className={Styles.opcoes_gratidao} onClick={() => setMensagemGratidao("Minha saúde")}>💖 Minha saúde</button>
          <button className={Styles.opcoes_gratidao} onClick={() => setMensagemGratidao("Minha família")}>👨‍👩‍👧‍👦 Minha família</button>
          <button className={Styles.opcoes_gratidao} onClick={() => setMensagemGratidao("Momentos felizes")}>🌟 Momentos felizes</button>
          <button className={Styles.opcoes_gratidao} onClick={() => setMensagemGratidao("Outros")}>✨ Outros</button>
        </div>

     {mensagemGratidao === "Outros" && (
          <input
            className={Styles.input_gratidao}
            type="text"
            placeholder="Escreva aqui sua gratidão..."
            value={textoGratidao}
            onChange={(e) => setTextoGratidao(e.target.value)}
          />
        )}
  

{mensagemGratidao && (
          <div className={Styles.confirmacao}>
            <p>
              Você escolheu:{" "}
              <b>{mensagemGratidao === "Outros" ? textoGratidao : mensagemGratidao}</b>
            </p>
            <button
              type="button"
              className={Styles.finalizar}
              onClick={() => setEtapa("sentimento")}
            >
              Enviar
            </button>
     </div>
        )}
      </div>
    )}
    {tipo !== "Gratidão" && (
      <button className={Styles.botao_finalizar} onClick={() => setEtapa("sentimento")}>
        Finalizar
      </button>
    )}
  </div>
)}

      {etapa === "musicalSugestoes" && (
  <div className={Styles.escolhas}>
    {meditacoesMusical.map((med, i) => (
      <div className={Styles.teste} key={i}>
        <h2 className={Styles.nome}>{med.nome}</h2>
        <p className={Styles.info}><b>Descrição:</b> {med.descricao}</p>
        <p className={Styles.info}><b>Duração:</b> {med.duracao}</p>
        <p className={Styles.info}><b>Sugestões:</b></p>
        <ul className={Styles.lista}>
          {med.sugestoes.map((sug, index) => (
            <li key={index}>{sug}</li>
          ))}
        </ul>
        <div className={Styles.ouvir_container}>
          <button className={Styles.ouvir} onClick={() => ouvirMeditacao(med)}>Ouvir agora</button>
        </div>
      </div>
    ))}
  </div>
  )}

  {etapa === "movimentoSugestoes" && (
  <div className={Styles.escolhas}>
    {meditacoesMovimento.map((med, i) => (
      <div className={Styles.teste} key={i}>
        <h2 className={Styles.nome}>{med.nome}</h2>
        <p className={Styles.info}><b>Descrição:</b> {med.descricao}</p>
        <p className={Styles.info}><b>Duração:</b> {med.duracao}</p>
        <p className={Styles.info}><b>Sugestões:</b></p>
        <ul className={Styles.lista}>
          {med.sugestoes.map((sug, index) => (
            <li key={index}>{sug}</li>
          ))}
        </ul>
        <div className={Styles.ouvir_container}>
          <button className={Styles.ouvir} onClick={() => ouvirMeditacao(med)}>Ouvir agora</button>
        </div>
      </div>
    ))}
  </div>
)}


{etapa === "sentimento" && (
  <div className={Styles.card_sentimento}>
    <h3 className={Styles.titulo_medita}>
      Como a meditação te fez se sentir hoje?
    </h3>

    {!sentimento ? (
      <div className={Styles.grid_emojis}>
        {opcoesSentimento.map((opcao) => (
          <div
            key={opcao.label}
            className={`${Styles.emoji_card} ${sentimento === opcao.label ? "selecionado" : ""}`}
            onClick={() => setSentimento(opcao.label)}
          >
            <span className={Styles.emoji}>{opcao.emoji}</span>
            <p>{opcao.label}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className={Styles.resposta_animada} ref={mensagemRef}>
        <p className={Styles.mensagem_sentimento}>
          💖 Que lindo saber que você se sentiu <b>{sentimento}</b> hoje!
        </p>

        {tipo === "Gratidão" && (
          <p className={Styles.mensagem_gratidao}>
            🌟 Sua gratidão hoje foi:{" "}
            <b>{mensagemGratidao === "Outros" ? textoGratidao : mensagemGratidao}</b>
          </p>
        )}

        <button
          className={Styles.botao_voltar}
          onClick={() => {
            setEtapa("exercicios");
            setSentimento("");
            setMensagemGratidao("");
            setTextoGratidao("");
            setMeditacaoSelecionada(null);
            setTipo("");
            salvarAtividadeNoHistorico(tipo);

            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Finalizar e Voltar
        </button>
      </div>
    )}
        </div>
      )}
    </div>
  );
}
