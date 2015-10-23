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
var MyApp = (function () {
    function MyApp() {
        this.isActive = false;
    }
    MyApp.prototype.changeStyle = function () {
        this.isActive = !this.isActive;
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Set Styles</h3>\n      </div>\n      <div class=\"panel-body\">\n        Click button to change style.\n        <div>\n          <button class=\"btn btn-default\" (click)=\"changeStyle()\">Change mystyle: {{ isActive ? \"active\" : \"inactive\"}}</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Result</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div [ng-class]=\"{mystyle: isActive}\" align=\"center\">\n          This is the result!\n        </div>\n      </div>\n    </div>\n    ",
            directives: [angular2_1.NgClass]
        })
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
