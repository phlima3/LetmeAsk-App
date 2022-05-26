import logoImage from "../Assets/Images/logo.svg";
import { Button } from "../Components/Button";

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImage} alt="letmeask" />
          <div>codigo</div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 Perguntas</span>
        </div>
        <form>
          <textarea placeholder="O que você quer perguntar?" />
          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
