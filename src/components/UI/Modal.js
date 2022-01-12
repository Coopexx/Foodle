import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

//redundant code here

const Backdrop = (props) => {
    const closeModalHandler = () => {
        props.closeModal();
    };
    return (
        <div className={classes.background} onClick={closeModalHandler}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal} {...props}>
            {props.children}
        </div>
    );
};

const portalEl = document.querySelector("#overlays");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop {...props} />, portalEl)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalEl
            )}
        </>
    );
};

export default Modal;
