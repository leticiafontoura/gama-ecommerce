import { React, useState } from "react";
import lpImage from "./lp.jpeg";
import gdImage from "./gd.jpeg";
import swImage from "./sw.jpg";
import Card from "./Cards";
import iconLogo from "./bg.svg";
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import Form from "./Form";

let countDownDate = new Date("Jul 30, 2021 23:18:00").getTime();

function buildCountdownString(onComecou) {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  if (distance < 0) {
    onComecou?.();
    return "";
  } else {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}

function App() {
  const [countdown, setCountdown] = useState(buildCountdownString());

  let countdownTimer = setInterval(function () {
    const countdownString = buildCountdownString(function () {
      clearInterval(countdownTimer);
    });
    setCountdown(countdownString);
  }, 1000);

  return (
    <>
      <div className="formContainer">
      <h2 id="blackfriday">Black Friday</h2>
      <h1 id="logo">v i n í l c o l a</h1>
        
        <section id="form">
          <div className="formInfo">
          <div id="countdown">Faltam {countdown} </div>
            <h2>Até <span className="discount">70%</span> de desconto em todos os itens</h2>
            <img src={iconLogo} alt="desenho de um vinil em chamas com cores neon"/>
          </div>
          <div className="formInput">
            <Form />
          </div>
        </section>
        <h2 id="spoilerAlert">Alerta de spoiler</h2>
        <a id="spoilerAlertIcon" href="#cardsContainer"><ArrowDownwardRoundedIcon style={{fontSize: "3rem"}}/></a>
      </div>

      <section className="content">
        <div className="cardsContainer" id="cardsContainer">
          <Card description="Disco de Vinil Novo, Importado, Lacrado, Duplo, 180 gramas" produto="Linkin Park - A Thousand Suns" alt="vinil do álbum A Thousand Suns da banda Linkin Park" src={lpImage} desconto="40% OFF" precoAntigo="259,00" precoAtual="156,00"/>
          <Card description="Disco de Vinil Novo, Importado, Lacrado, Duplo, 180 gramas" produto="Steven Wilson - The Future Bites" alt="vinil do álbum The Future Bites do cantor Steven Wilson" src={swImage} desconto="60% OFF" precoAntigo="300,00" precoAtual="120,00"/>
          <Card description="Disco de Vinil Novo, Importado, Lacrado, Duplo, 180 gramas" produto="Green Day - American Idiot" alt="vinil do álbum American Idiot da banda Green Day" src={gdImage} desconto="70% OFF" precoAntigo="150,00" precoAtual="45,00"/>
        </div>
      </section>

      <footer>
      <p>© 2021 Vinílcola, todos os direitos reservados. Desenvolvido por <a target="_blank" href="https://github.com/leticiafontoura">Letícia Fontoura <GitHubIcon style={{verticalAlign: "sub"}}/></a></p>
      </footer>
      
    </>
  );
}

export default App;
