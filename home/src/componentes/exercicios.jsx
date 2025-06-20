import { useState, useEffect } from "react";
import Meditacao from "./meditacao";
import Styles from '../css/exercicios.module.css';
import tico_regata from '../imagem/tico_regata.png';
import sugestao from '../assets/gif/sugestao.gif';
import Alongamento from "./alongamento";

function Exercicios() {
  const [abaAtiva, setAbaAtiva] = useState("exercicios");
  const [tipo, setTipo] = useState(""); // guarda tipo de atividade para salvar
  const [historico, setHistorico] = useState(() => {
    const salvo = localStorage.getItem("historico");
    return salvo ? JSON.parse(salvo) : {};
  });

  const formatarData = (date) => {
    const d = new Date(date);
    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const ano = d.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const getAtividadesDoDia = (diasAtras) => {
    const data = new Date();
    data.setDate(data.getDate() - diasAtras);
    const dataFormatada = formatarData(data);

    if (historico[dataFormatada]) {
      return historico[dataFormatada].join(",");
    }
    return "Nenhuma atividade registrada";
  };

  const salvarAtividadeNoHistorico = (tipoAtividade) => {
    const hoje = formatarData(new Date());
    const atividadesAnteriores = historico[hoje] || [];

    const novasAtividades = {
      ...historico,
      [hoje]: [...atividadesAnteriores, tipoAtividade],
    };

    setHistorico(novasAtividades);
    localStorage.setItem("historico", JSON.stringify(novasAtividades));
  };

  useEffect(() => {
    if (tipo) {
      salvarAtividadeNoHistorico(tipo);
      setTipo(""); // limpa o tipo após salvar
    }
  }, [tipo]);

  return (
    <>
      <section className={Styles.exercicios}>
        <div className={Styles.quadro1}>
          <div className={Styles.textos}>
            <h1 className={Styles.texto1}>Olá, Maria Antonia!</h1>
            <h2 className={Styles.texto2}>Vamos nos movimentar hoje?</h2>

          </div>
          <img className={Styles.tico_regata} src={tico_regata} alt="tico de regata" />
        </div>
        <div className={Styles.card_maior}>

          <div className={Styles.card_sugestao}>
            <h2 className={Styles.titulo1}> SUGESTÃO DO DIA</h2>

            <img src={sugestao} alt="Gif animado" className={Styles.sugestao_gif} />



            <h3 className={Styles.subtitulo1}>MEDITAÇÃO GUIADA (7 min)</h3>
            <p className={Styles.subtitulo2}>Benefícios:</p>
            <div>
              <h2 className={Styles.lista1}>🌿 Redução do estresse</h2>
              <h2 className={Styles.lista1}>💖 Bem-estar emocional</h2>
              <h2 className={Styles.lista1}>🤝 Conexões mais empáticas</h2>
            </div>

            <button className={Styles.botao_meditacao} onClick={() => setAbaAtiva("meditacao")}>
              Ir para Meditação
            </button>
          </div>

          {/* Últimas Atividades */}
          <div className={Styles.card_atividades}>
            <h2 className={Styles.titulo2}> ÚLTIMAS ATIVIDADES </h2>
            <div className={Styles.lista_atividades}>
              <h2 className={Styles.lista}><span className={Styles.destaque}>📅 Ontem:</span>
                <br />  {getAtividadesDoDia(1)}</h2>
              <h2 className={Styles.lista}><span className={Styles.destaque}>📅 2 dias atrás:</span>
                <br /> {getAtividadesDoDia(2)}</h2>
              <h2 className={Styles.lista}><span className={Styles.destaque}>📅 3 dias atrás:</span>
                <br />{getAtividadesDoDia(3)}</h2>
            </div>
          </div>
        </div>
        <div className={Styles.conteudo}>
          <div className={Styles.abas}>

            <button
              className={abaAtiva === "alongamento" ? Styles.ativa : ""}
              onClick={() => setAbaAtiva("alongamento")}
            >
              <h3 className={Styles.card_tipo} > ALONGAMENTO<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#004456"><path d="M481-276ZM120-160v-160q0-83 58.5-141.5T320-520h429q38 0 64.5 26t26.5 64q0 31-19 55.5T773-342l-93 27v155q0 21-9.5 38T645-94q-16 11-35 13.5T571-86l-189-74H120Zm480-120H375q-7 0-10.5 4t-4.5 9q-1 5 1.5 9.5t8.5 6.5l230 91v-120Zm-400 40h84q-2-6-3-12t-1-13q0-39 28-67t67-28h163l214-59q5-2 7-5t1-7q-1-4-3.5-6.5T749-440H320q-50 0-85 35t-35 85v80Zm200-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480-720q0-33-23.5-56.5T400-800q-33 0-56.5 23.5T320-720q0 33 23.5 56.5T400-640Zm81 364Zm-81-444Z" /></svg> </h3 >
            </button>
            <button
              className={abaAtiva === "meditacao" ? Styles.ativa : ""}
              onClick={() => setAbaAtiva("meditacao")}
            >
              <h3 className={Styles.card_tipo} > MEDITAÇÃO <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#004456"><path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg></h3>
            </button>
          </div>

          {abaAtiva === "meditacao" && (
            <div className={Styles.container_geral}>
              <Meditacao setTipo={setTipo} />

            </div>
          )}

          {abaAtiva === "alongamento" && (
            <div className={Styles.container_geral}>
              <Alongamento setTipo={setTipo} />

            </div>
          )}


        </div>
      </section>
    </>
  );
}

export default Exercicios;

