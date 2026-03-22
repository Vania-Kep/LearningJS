import { forwardRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption, confirmButtonCaption, onConfirm }, ref) {
    const dialog = useRef();
    const msg = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(text) {
                msg.current.textContent = text;
                dialog.current.showModal();
            }
        }
    });



    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadowed-md">
            {children}
            <p className="text-stone-600 mb-4" ref={msg}></p>
            <form method="dialog" className="mt-4 text-right">
                <button>{buttonCaption}</button>
                {
                    confirmButtonCaption && (<button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md" onClick={onConfirm}>{confirmButtonCaption}</button>)
                }
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;