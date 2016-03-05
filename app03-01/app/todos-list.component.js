System.register(['angular2/core', './todo-item.component'], function(exports_1, context_1) {
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
    var core_1, todo_item_component_1;
    var TodosList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_item_component_1_1) {
                todo_item_component_1 = todo_item_component_1_1;
            }],
        execute: function() {
            TodosList = (function () {
                function TodosList() {
                }
                TodosList = __decorate([
                    core_1.Component({
                        selector: 'todos-list',
                        inputs: ['todos'],
                        template: "\n    <ul class=\"list-group\">\n      <div *ngFor=\"#todo of todos\">\n        <li *ngIf=\"todo.completed == false\" class=\"list-group-item\">\n           <todo-item [todo]=\"todo\" ></todo-item>\n        </li>\n      </div>\n    </ul>\n  ",
                        directives: [todo_item_component_1.TodoItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodosList);
                return TodosList;
            }());
            exports_1("TodosList", TodosList);
        }
    }
});
//# sourceMappingURL=todos-list.component.js.map