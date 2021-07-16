import { React, useState } from "react";



function Form() {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function handleForm(e) {
    e.preventDefault();
    let userName = document.querySelector("#name").value;
    localStorage.setItem("userName", userName);
    let userEmail = document.querySelector("#email").value;
    localStorage.setItem("userEmail", userEmail);
    
    formMessage();

  }

  function formMessage() {
    const formInputMessage = document.querySelector("form");
    const afterForm = document.querySelector("#formMessage");
    formInputMessage.style.display = "none";
    afterForm.style.display = "block";
  }

    return (
        <>
    <h2 id="formMessage">Pronto! Agora você vai ficar por dentro de todas as promoções!</h2>
    <form onSubmit={handleForm}>
        
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
</>
        )
    }

export default Form;
