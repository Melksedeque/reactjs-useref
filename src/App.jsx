import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form className="formulario">
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default App;
