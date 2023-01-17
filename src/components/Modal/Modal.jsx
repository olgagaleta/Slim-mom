// import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow, CloseArrow, ButtonClose } from "./Modal.styled";
import { Routes, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onclose, children }) => {
    // const [backResponse, setBackResponse] = useState(null);
    const location = useLocation();
    const isMobile = useMediaQuery({ query: 'max-width: 426px' });
    // useEffect(() => {
    //     if (!userParams) {
    //         return;
    //     }
    // })

    return createPortal(
        <Overlay>
            <ModalWindow
                onclose={onclose}
                style={
                    location.pathname === Routes.home && isMobile
                        ? { top: '460px' }
                        : null
                }
            >
                {children}
                <ButtonClose type="button" onClick={onclose}></ButtonClose>
                <CloseArrow size="20px" left="20px" onClick={onclose} />
            </ModalWindow>
        </Overlay>,
        modalRoot
    );
}

export default Modal;