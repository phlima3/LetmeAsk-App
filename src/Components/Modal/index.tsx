import React from "react";
import ReactDOM from "react-dom";
import deleteImg from "../../Assets/Images/x.svg";
import "../Modal/styles.scss";
const portalRoot = document.querySelector("#portal-root")!;

type ModalType = {
  isOpen: boolean;
  handleClose: Function;
  handleConfirm: Function;
};

export function Modal({ isOpen, handleClose, handleConfirm }: ModalType) {
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <div className="modal-overlay">
              <div className="modal-content">
                <img src={deleteImg} alt="Icon delete room" />
                <section>
                  <h1>Encerrar Sala</h1>
                  <h3>Tem certeza que deseja encerrar esta sala?</h3>
                </section>
                <div className="buttons">
                  <button className="btn-cancel" onClick={() => handleClose()}>
                    Cancelar
                  </button>
                  <button
                    className="btn-confirm"
                    onClick={() => handleConfirm()}
                  >
                    Sim, encerrar
                  </button>
                </div>
              </div>
            </div>,
            portalRoot
          )
        : null}
    </>
  );
}
