var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var TodoItem = (function () {
    function TodoItem() {
    }
    TodoItem.prototype.deleteTodo = function () {
        console.log("In TodoItem delete: Setting to completed");
        this.todo.setToCompleted();
    };
    TodoItem = __decorate([
        angular2_1.Component({
            selector: 'todo-item',
            properties: ['todo']
        }),
        angular2_1.View({
            template: "\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <strong>{{todo.title}}</strong>\n        </div>\n        <div class=\"col-md-4\" align=\"right\">\n          <span class=\"glyphicon glyphicon-user\"></span> {{todo.responsible}}\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          {{todo.description}}\n        </div>\n      </div>\n      <hr>\n      <div align=\"right\" class=\"row\">\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-danger btn-sm\"  (click)=\"deleteTodo()\"><span class=\"glyphicon glyphicon-trash\"></span> Delete</Button>\n        </div>\n      </div>\n  "
        })
    ], TodoItem);
    return TodoItem;
})();
exports.TodoItem = TodoItem;
