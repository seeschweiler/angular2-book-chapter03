System.register(['angular2/core', './todos-list.component', './add-todo.component', './todo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todos_list_component_1, add_todo_component_1, todo_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todos_list_component_1_1) {
                todos_list_component_1 = todos_list_component_1_1;
            },
            function (add_todo_component_1_1) {
                add_todo_component_1 = add_todo_component_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.todos = [
                        new todo_1.Todo("My Todo Item 1", "My Todo 1 Description", "Sebastian"),
                        new todo_1.Todo("My Todo Item 2", "My Todo 2 Description", "Sebastian"),
                        new todo_1.Todo("My Todo Item 3", "My Todo 3 Description", "Sebastian")
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <h4>Todos List</h4>\n     <h5>Number of Todos: <span class=\"badge\">{{todos.length}}</span></h5>\n     <todos-list [todos]=\"todos\"></todos-list>\n     <add-todo [todos]=\"todos\"></add-todo>\n   ",
                        directives: [todos_list_component_1.TodosList, add_todo_component_1.AddTodo]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map