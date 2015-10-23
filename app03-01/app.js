/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var TodosList_1 = require('TodosList');
var AddTodo_1 = require('AddTodo');
var Todo_1 = require('Todo');
var MyApp = (function () {
    function MyApp() {
        this.todos = [
            new Todo_1.Todo("My Todo Item 1", "My Todo 1 Description", "Sebastian"),
            new Todo_1.Todo("My Todo Item 2", "My Todo 2 Description", "Sebastian"),
            new Todo_1.Todo("My Todo Item 3", "My Todo 3 Description", "Sebastian")
        ];
    }
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <h4>Todos List</h4>\n    <h5>Number of Todos: <span class=\"badge\">{{todos.length}}</span></h5>\n    <todos-list [todos]=\"todos\"></todos-list>\n    <add-todo [todos]=\"todos\"></add-todo>\n    ",
            directives: [TodosList_1.TodosList, AddTodo_1.AddTodo]
        })
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
