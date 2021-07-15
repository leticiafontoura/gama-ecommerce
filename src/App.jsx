import { React, useState } from "react";
import lpImage from "./lp.jpeg";
import gdImage from "./gd.jpeg";
import swImage from "./sw.jpg";
import Card from "./Cards";
import iconLogo from "./bg.svg"

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

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function handleForm() {
    let userName = document.querySelector("#name").value;
    localStorage.setItem("userName", userName);
    let userEmail = document.querySelector("#email").value;
    localStorage.setItem("userEmail", userEmail);
    alert("e-mail cadastrado com sucesso");
  }

  return (
    <>
      <div className="formContainer">
      <h1>Black Friday</h1>
      <h1 id="logo">v i n í l c o l a</h1>
        
        <div id="form" onSubmit={handleForm}>
          <div className="formInfo">
          <div id="countdown"> {countdown} </div>
            <h2>Até <span className="discount">70%</span> de desconto em todos os itens</h2>
            <img src={iconLogo} />
          </div>
          <div className="formInput">
            <form>
              <h2>Cadastre-se para receber as promoções em primeira mão e ganhe mais <span className="discount">5% de desconto</span></h2>
              <p>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </p>
              <p>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </p>
              <p><input type="submit" id="submit" value="Enviar" /></p>
            </form>
          </div>
        </div>
      </div>

      <section className="content">
        <h1>Alerta de spoiler:</h1>
        <div className="cardsContainer">
          
          <Card produto="Linkin Park - A Thousand Suns" src={lpImage} desconto="40% OFF" precoAntigo="259,00" precoAtual="156,00"/>
          <Card produto="Steven Wilson - The Future Bites" src={swImage} desconto="60% OFF" precoAntigo="300,00" precoAtual="180,00"/>
          <Card produto="Green Day - American Idiot" src={gdImage} desconto="70% OFF" precoAntigo="150,00" precoAtual="100,00"/>
        </div>
      </section>

      <footer>
        Vinílcola 2021, todos os direitos reservados. Desenvolvido por Letícia Fontoura.
      </footer>
      
    </>
  );
}

export default App;
