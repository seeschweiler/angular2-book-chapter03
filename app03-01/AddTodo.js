var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var Todo_1 = require('Todo');
var AddTodo = (function () {
    function AddTodo() {
    }
    AddTodo.prototype.addTodo = function (title, description, responsible) {
        this.todos.push(new Todo_1.Todo(title, description, responsible));
    };
    AddTodo = __decorate([
        angular2_1.Component({
            selector: 'add-todo',
            properties: ['todos']
        }),
        angular2_1.View({
            template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-plus-sign\"></span> Add New Todo</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <label for=\"titleInput\">Title:</label>\n          <input id=\"titleInput\" class=\"form-control\" placeholder=\"Title\" #title>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"descriptionInput\">Description:</label>\n          <input id=\"descriptionInput\" class=\"form-control\" placeholder=\"Description\" #description>\n        </div>\n        <div class=\"form-group\">\n          <label id=\"responsibleInput\">Responsible:</label>\n          <input id=\"responsibleInput\" class=\"form-control\" placeholder=\"Responsible\" #responsible>\n        </div>\n        <div>\n          <button class=\"btn btn-default\" (click)=\"addTodo(title.value, description.value, responsible.value)\">Add Todo</button>\n        </div>\n      </div>\n    </div>\n  "
        })
    ], AddTodo);
    return AddTodo;
})();
exports.AddTodo = AddTodo;
