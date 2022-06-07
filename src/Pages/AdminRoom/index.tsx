import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logoImage from "../../Assets/Images/logo.svg";
import deleteImage from "../../Assets/Images/delete.svg";
import { RoomCode } from "../../Components/RoomCode";

import "../AdminRoom/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { Question } from "../../Components/Question";
import { useRoom } from "../../Hooks/useRoom";
import { Button } from "../../Components/Button";
import { Modal } from "../../Components/Modal";
import { useState } from "react";
import { database } from "../../Services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomID = params.id!;
  const { title, questions } = useRoom(roomID);
  const [modal, setModal] = useState(false);

  function handleDeleteQuestion(questionId: string) {
    setModal(!modal);
  }
  async function handleConfirmDelete(questionId: string) {
    await database.ref(`rooms/${roomID}/questions/${questionId}`).remove();
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <Link to="/">
            <img src={logoImage} alt="letmeask" />
          </Link>
          <div>
            <RoomCode code={roomID} />
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <>
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                >
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImage} alt="Remover pergunta" />
                  </button>
                </Question>
                <Modal
                  isOpen={modal}
                  handleClose={handleDeleteQuestion}
                  handleConfirm={handleConfirmDelete}
                />
              </>
            );
          })}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
//
