import illustrationImg from "../Assets/Images/illustration.svg";
import logoImage from "../Assets/Images/logo.svg";
import googleImage from "../Assets/Images/google-icon.svg";
import loginImage from "../Assets/Images/log-in.svg";
import { Button } from "../Components/Button";
import { Link } from "react-router-dom";

import "../Styles/auth.scss";

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Imagem de Ilustração" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="letmeask" />
          <Link to="/rooms/new">
            <button className="create-room">
              <img src={googleImage} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
          </Link>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">
              <img src={loginImage} alt="Logo do Google" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
