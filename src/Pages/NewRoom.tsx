import illustrationImg from "../Assets/Images/illustration.svg";
import logoImage from "../Assets/Images/logo.svg";
import googleImage from "../Assets/Images/google-icon.svg";
import loginImage from "../Assets/Images/log-in.svg";
import { Button } from "../Components/Button";
import { Link } from "react-router-dom";
import "../Styles/auth.scss";
import { useContext } from "react";
import { AuthContext } from "../App";

export function NewRoom() {
  const { user } = useContext(AuthContext);

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
          <h1>{user?.name}</h1>
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
