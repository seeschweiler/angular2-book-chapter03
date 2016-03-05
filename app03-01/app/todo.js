System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
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
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map