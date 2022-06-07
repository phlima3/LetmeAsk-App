import React from "react";
import ReactDOM from "react-dom";
import deleteImg from "../../Assets/Images/x.svg";
import "../Modal/styles.scss";
const portalRoot = document.querySelector("#portal-root")!;

type ModalType = {
  children: string;
  title: string;
  isOpen: boolean;
  handleClose: Function;
  handleConfirm: Function;
};

export function Modal({
  isOpen,
  handleClose,
  handleConfirm,
  title,
  children,
}: ModalType) {
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <div className="modal-overlay">
              <div className="modal-content">
                <img src={deleteImg} alt="Icon delete room" />
                <section>
                  <h1>{title}</h1>
                  <h3>{children}</h3>
                </section>
                <div className="buttons">
                  <button className="btn-cancel" onClick={() => handleClose()}>
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn-confirm"
                    onClick={() => handleConfirm()}
                  >
                    Sim, desejo
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
