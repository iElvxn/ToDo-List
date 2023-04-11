const tasks = (() => {
    class Task {
        constructor(title, description, date, priority, projectName) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.projectIndex = projectName;
        this.completed = false;
        }
    }

    const addTask = (title, description, date, priority, projectName) => {
        const task = new Task(title, description, date, priority, projectName);
        // add code here to push task to a projects task list.
    }

    return{ addTask }
})();

export default tasks;