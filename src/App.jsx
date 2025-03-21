import { useRef } from "react";
import "./App.css";

function App() {
  const labelNome = useRef("");
  const inputNome = useRef("");
  const labelEmail = useRef("");
  const inputEmail = useRef("");

  return (
    <>
      <form className="formulario">
        <h2>Formulário</h2>
        <p>Preencha os campos abaixo:</p>
        <label ref={labelNome}>
          Nome:
          <input
            type="text"
            name="nome"
            ref={inputNome}
            placeholder="Digite seu nome"
          />
        </label>
        <label ref={labelEmail}>
          E-mail:
          <input
            type="email"
            name="email"
            ref={inputEmail}
            placeholder="Digite seu e-mail"
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default App;
