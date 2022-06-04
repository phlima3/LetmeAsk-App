import { FormEvent, useState } from "react";
import illustrationImg from "../../Assets/Images/illustration.svg";
import logoImage from "../../Assets/Images/logo.svg";
import googleImage from "../../Assets/Images/google-icon.svg";
import loginImage from "../../Assets/Images/log-in.svg";
import { database } from "../../Services/firebase";
import { Button } from "../../Components/Button/index";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Home/style.scss";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("rooms");
  }
  function setErrorMessage(errormessage: string) {
    toast.error(errormessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      setErrorMessage("O código da sala não pode estar vazio");
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();
    console.log(roomCode);

    if (!roomRef.exists()) {
      setErrorMessage("Por favor insira um código de sala existente");
      return;
    }
    navigate(`/rooms/${roomCode}`);
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              <img src={loginImage} alt="Logo do Google" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
      <Outlet />
      <ToastContainer />
    </div>
  );
}
