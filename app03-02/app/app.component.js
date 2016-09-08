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
var AppComponent = (function () {
    function AppComponent() {
        this.color = "black";
        this.bgcolor = "white";
        this.fontSize = 12;
    }
    AppComponent.prototype.applyStyles = function (color, bgcolor, fontSize) {
        this.color = color;
        this.bgcolor = bgcolor;
        this.fontSize = fontSize;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Set Styles</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <label for=\"color\">Color:</label>\n          <input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"color\">Background Color:</label>\n          <input type=\"text\" name=\"bgcolor\" value=\"{{bgcolor}}\" #bgcolorinput>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fontSize\">Font Size:</label>\n          <input type=\"text\" name=\"fontSize\" value=\"{{fontSize}}\" #fontinput>\n        </div>\n        <div>\n          <button class=\"btn btn-default\" (click)=\"applyStyles(colorinput.value, bgcolorinput.value, fontinput.value)\">Apply Styles</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Result</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div [style.font-size.px]=\"fontSize\" [ngStyle]=\"{'color': color, 'background-color': bgcolor}\" align=\"center\">\n          This is the result!\n        </div>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map