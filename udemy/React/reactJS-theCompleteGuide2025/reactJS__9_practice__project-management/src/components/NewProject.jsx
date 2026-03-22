import InputComponent from "./InputComponent";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({ onCancel, onSave }) {
    const modal = useRef();
    const titleField = useRef();
    const descField = useRef();
    const dateField = useRef();

    function cancelHandler() {
        onCancel();
        titleField.current.value = '';
        descField.current.value = '';
        dateField.current.value = '';

    }

    function submitHandler(event) {
        const titleValue = titleField.current.value.trim();
        const descValue = descField.current.value.trim();
        const dateValue = dateField.current.value.trim();

        if (
            titleValue.length === 0 ||
            dateValue.length === 0
        ) {
            modal.current.open();

            return;
        }

        onSave({
            title: titleValue,
            description: descValue,
            dueDate: dateValue,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Please fill in all required fields.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-6 my-4">
                    <button className="p-2 rounded-md text-stone-800 hover:text-stone-950" onClick={cancelHandler}>Cancel</button>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={submitHandler}>Save</button>
                </menu>

                <InputComponent ref={titleField} label="Title" type="text" required />
                <InputComponent ref={descField} label="Description" type="textarea" required />
                <InputComponent ref={dateField} label="Due Date" type="date" placeholder="mm/dd/yyyy" required />
            </div>
        </>
    );
}