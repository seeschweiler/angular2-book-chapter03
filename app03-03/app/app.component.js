"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var AppComponent = (function () {
    function AppComponent() {
        this.isActive = false;
    }
    AppComponent.prototype.changeStyle = function () {
        this.isActive = !this.isActive;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Set Styles</h3>\n      </div>\n      <div class=\"panel-body\">\n        Click button to change style.\n        <div>\n          <button class=\"btn btn-default\" (click)=\"changeStyle()\">Change mystyle: {{ isActive ? \"active\" : \"inactive\"}}</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Result</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div [ngClass]=\"{mystyle: isActive}\" align=\"center\">\n          This is the result!\n        </div>\n      </div>\n    </div>\n    ",
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map