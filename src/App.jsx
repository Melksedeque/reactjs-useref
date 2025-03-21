import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const labelNome = useRef("");
  const inputNome = useRef("");
  const labelEmail = useRef("");
  const inputEmail = useRef("");

  useEffect(() => {
    labelNome.current.innerHTML = "Nome do usuário:";
    labelNome.current.style.fontStyle = "italic";
    labelNome.current.style.color = "red";
  }, []);

  const enviarFormulario = (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const email = event.target.email.value;
    alert(`Nome: ${nome} - E-mail: ${email}`);
    inputNome.current.focus();
  };

  return (
    <>
      <form className="formulario" onSubmit={enviarFormulario}>
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
