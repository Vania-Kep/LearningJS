interface Task {
    id: number;
    title: string;
    completed: boolean;
};

function createTask(id: number, title: string): Task {
    return {
        id,
        title,
        completed: false
    };
};

function completeTask(task: Task): Task {
    task.completed = true;

    return task;
};

let task1 = createTask(1, "Learn TypeScript");
let task2 = createTask(2, "Practice TypeScript");

completeTask(task1);

console.log(task1);