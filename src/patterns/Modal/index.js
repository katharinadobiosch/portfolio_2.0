import React from "react";

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__content">{children}</div>
        </div>
    );
};

export default Modal;
