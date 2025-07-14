;
function createTask(id, title) {
    return {
        id: id,
        title: title,
        completed: false
    };
}
;
function completeTask(task) {
    task.completed = true;
    return task;
}
;
var task1 = createTask(1, "Learn TypeScript");
var task2 = createTask(2, "Practice TypeScript");
completeTask(task1);
console.log(task1);
