import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Backdrop = () => {
    return <div className={classes.background}></div>;
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>{props.children}</div>;
};

const portalEl = document.querySelector("#overlays");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalEl)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalEl
            )}
        </>
    );
};

export default Modal;
