import illustrationImg from "..Assets/Images/ilustration.svg";
import logoImage from "..Assets/Images/logo.svg";
import googleImage from "..Assets/Images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Imagem de Ilustração" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImage} alt="letmeask" />
          <button>
            <img src={googleImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
        </div>
      </main>
    </div>
  );
}
