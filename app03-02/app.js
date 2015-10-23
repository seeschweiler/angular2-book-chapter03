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
        this.color = "black";
        this.bgcolor = "white";
        this.fontSize = 12;
    }
    MyApp.prototype.applyStyles = function (color, bgcolor, fontSize) {
        this.color = color;
        this.bgcolor = bgcolor;
        this.fontSize = fontSize;
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Set Styles</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <label for=\"color\">Color:</label>\n          <input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"color\">Background Color:</label>\n          <input type=\"text\" name=\"bgcolor\" value=\"{{bgcolor}}\" #bgcolorinput>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fontSize\">Font Size:</label>\n          <input type=\"text\" name=\"fontSize\" value=\"{{fontSize}}\" #fontinput>\n        </div>\n        <div>\n          <button class=\"btn btn-default\" (click)=\"applyStyles(colorinput.value, bgcolorinput.value, fontinput.value)\">Apply Styles</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Result</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div [style.font-size.px]=\"fontSize\" [ng-style]=\"{'color': color, 'background-color': bgcolor}\" align=\"center\">\n          This is the result!\n        </div>\n      </div>\n    </div>\n    ",
            directives: [angular2_1.NgStyle]
        })
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
