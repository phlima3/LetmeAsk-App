import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logoImage from "../../Assets/Images/logo.svg";
import { Button } from "../../Components/Button/index";
import { RoomCode } from "../../Components/RoomCode";
import { useAuth } from "../../Hooks/useAuth";

import "../Room/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../Services/firebase";
import { Question } from "../../Components/Question";
import { useRoom } from "../../Hooks/useRoom";

type RoomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const roomID = params.id!;
  const { title, questions } = useRoom(roomID);

  async function handleSendNewQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }
    if (!user) {
      toast.error(
        "É necessário que você esteja logado para fazer uma pergunta",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return console.log(Error);
    }
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomID}/questions`).push(question);

    setNewQuestion("");
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImage} alt="letmeask" />
          <RoomCode code={roomID} />
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
        </div>
        <form onSubmit={handleSendNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt="Avatar do usuário" />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
