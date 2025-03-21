import { useState } from "react";
import "./App.css";

function App() {
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
