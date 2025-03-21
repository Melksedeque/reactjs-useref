import { useRef, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const labelNome = useRef("");
  const inputNome = useRef("");
  const labelEmail = useRef("");
  const inputEmail = useRef("");

  useEffect(() => {
    labelNome.current.innerHTML = "Nome do usuário:";
    labelNome.current.style.fontStyle = "italic";
    labelNome.current.style.color = "red";
    labelEmail.current.innerHTML = "E-mail do usuário:";
    labelEmail.current.style.fontStyle = "bold";
    labelEmail.current.style.color = "blue";
  }, []);

  const enviarFormulario = (event) => {
    event.preventDefault();
    // const nome = event.target.nome.value;
    // const email = event.target.email.value;
    // alert(`Nome: ${nome} - E-mail: ${email}`);
    inputNome.current.focus();
  };

  const StyledLabelInput = styled.div`
    display: block;
    margin: 10px 0;
  `;

  return (
    <>
      <form className="formulario" onSubmit={enviarFormulario}>
        <h2>Formulário</h2>
        <p>Preencha os campos abaixo:</p>
        <StyledLabelInput>
          <label ref={labelNome}>Nome:</label>
          <input
            type="text"
            name="nome"
            ref={inputNome}
            placeholder="Digite seu nome"
          />
        </StyledLabelInput>
        <StyledLabelInput>
          <label ref={labelEmail}>E-mail:</label>
          <input
            type="email"
            name="email"
            ref={inputEmail}
            placeholder="Digite seu e-mail"
          />
        </StyledLabelInput>
        <button>Salvar</button>
      </form>
    </>
  );
}

export default App;
