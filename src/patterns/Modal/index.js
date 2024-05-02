import React from "react";

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__content">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
