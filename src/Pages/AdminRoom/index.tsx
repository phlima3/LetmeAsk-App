import { Link, useNavigate, useParams } from "react-router-dom";
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
  const [modalRoom, setModalRoom] = useState(false);

  const navigate = useNavigate();

  function handleDeleteQuestion(questionID: string) {
    setModal(!modal);
  }
  async function handleConfirmDelete(questionID: string) {
    await database.ref(`rooms/${roomID}/questions/${questionID}`).remove();
    setModal(false);
  }
  function handleEndRoom() {
    setModalRoom(!modalRoom);
  }
  async function confirmHandleEndRoom() {
    await database.ref(`rooms/${roomID}/`).update({
      endedAt: new Date(),
    });
    navigate("/");
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
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
            <Modal
              isOpen={modalRoom}
              handleClose={handleEndRoom}
              handleConfirm={() => confirmHandleEndRoom()}
              title="Encerrar Sala"
            >
              Tem certeza que você deseja encerrar a sala?
            </Modal>
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
              <div key={question.id}>
                <Question content={question.content} author={question.author}>
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImage} alt="Remover pergunta" />
                  </button>
                </Question>
                {modal ? (
                  <Modal
                    isOpen={modal}
                    handleClose={handleDeleteQuestion}
                    handleConfirm={() => handleConfirmDelete(question.id)}
                    title="Excluir pergunta"
                  >
                    Tem certeza que deseja excluir essa pergunta?
                  </Modal>
                ) : null}
              </div>
            );
          })}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
