import { forwardRef, useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function({ targetTime, remainingTime, onReset}, ref) {
    const dilog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = ((1 - remainingTime / (targetTime * 1000)) * 100).toFixed(2);

    useImperativeHandle(ref, () => ({
        open: () => {
            dilog.current.showModal();
        }
    }));

  return createPortal(
    <dialog className="result-modal" ref={dilog} onClose={onReset}>
        {userLost && (<h2>You lost!</h2>)}
        {!userLost && (<>
            <h2>You Won!</h2>
            <h3>Your score: {score}%</h3>
        </>)}
        <p>The target time was {targetTime} seconds.</p>
        {!userLost && (<p>You stopped the timer with {formattedRemainingTime} seconds left</p>)}
        <form method="dialog" >
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
    );
});

export default ResultModal;