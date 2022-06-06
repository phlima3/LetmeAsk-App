import React from "react";
import ReactDOM from "react-dom";
import deleteImg from "../../Assets/Images/x.svg";
import "../Modal/styles.scss";
const portalRoot = document.querySelector("#portal-root")!;

type ModalType = {
  //children: React.ReactNode;
  isOpen: boolean;
  handleClose: Function;
};

export function Modal({ isOpen, handleClose }: ModalType) {
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
                  <button className="btn-confirm">Sim, encerrar</button>
                </div>
              </div>
            </div>,
            portalRoot
          )
        : null}
    </>
  );
}