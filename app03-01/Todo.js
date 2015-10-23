var Todo = (function () {
    function Todo(title, description, responsible) {
        this.title = title;
        this.description = description;
        this.responsible = responsible;
        this.completed = false;
    }
    Todo.prototype.setToCompleted = function () {
        console.log("Setting to completed");
        this.completed = true;
        return false;
    };
    return Todo;
})();
exports.Todo = Todo;
