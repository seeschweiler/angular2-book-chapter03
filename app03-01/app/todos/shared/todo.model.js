"use strict";
var Todo = (function () {
    function Todo(title, description, responsible, completed) {
        this.title = title;
        this.description = description;
        this.responsible = responsible;
        this.completed = completed;
        this.completed = false;
    }
    Todo.prototype.setToCompleted = function () {
        this.completed = true;
        return false;
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map