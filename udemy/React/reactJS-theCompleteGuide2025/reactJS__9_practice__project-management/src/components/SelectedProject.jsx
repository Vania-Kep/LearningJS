import { useRef } from "react";
import Modal from "./Modal";
import NewTask from "./NewTask";

export default function SelectedProject({ project, onAddTask, onRemoveTask, onDeleteProject, onClose }) {
    const modal = useRef();

    const formatedDueDate = new Date(project.dueDate).toLocaleDateString(navigator.languages[0], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    function deleteProjectHandler(Event) {
        modal.current.open();
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Cancel" confirmButtonCaption="Delete" onConfirm={onDeleteProject}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Do you want to remove this project?</h2>
            </Modal>
            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                        <div>
                            <button className="p-2 rounded-md text-stone-800 hover:text-stone-950" onClick={onClose}>Close</button>
                            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={deleteProjectHandler}>Delete</button>
                        </div>
                    </div>
                    <p className="mb-4 text-stone-400">{formatedDueDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p></header>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <NewTask projectTasks={project.tasks} onAddTask={onAddTask}/>
                {!project.tasks || !project.tasks.length && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
                {project.tasks && project.tasks.length > 0 &&
                    <ul className="p-4 mt-8 rounded-md bg-stone-100">
                        {project.tasks.map((task, index) => (
                            <li className="flex justify-between my-4" key={index}>
                                <span>{task}</span>
                                <button className="text-stone-800 hover:text-stone-950" onClick={() => onRemoveTask(task)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </>
    );
}