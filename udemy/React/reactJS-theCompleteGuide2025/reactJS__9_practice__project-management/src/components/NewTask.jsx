import { useRef } from "react";
import InputComponent from "./InputComponent";
import Modal from "./Modal";

export default function NewTask({ projectTasks, onAddTask }) {
    const taskRef = useRef();
    const modal = useRef();

    function addTaskHandler() {
        const taskValue = taskRef.current.value.trim();
        if (taskValue.length === 0) {
            modal.current.open('Please enter a task.');
            return;
        }

        if (projectTasks.includes(taskValue)) {
            modal.current.open('This task already exists in the project.');
            return;
        }

        onAddTask(taskValue);
        taskRef.current.value = '';
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Review your input</h2>
            </Modal>
            <div className="flex items-center justify-between">
                <InputComponent ref={taskRef} />
                <button className="text-stone-800 hover:text-stone-950" onClick={addTaskHandler}>Add task</button>
            </div>
        </>
    );
}