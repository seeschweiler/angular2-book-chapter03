/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, NgClass, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Set Styles</h3>
      </div>
      <div class="panel-body">
        Click button to change style.
        <div>
          <button class="btn btn-default" (click)="changeStyle()">Change mystyle: {{ isActive ? "active" : "inactive"}}</button>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Result</h3>
      </div>
      <div class="panel-body">
        <div [ng-class]="{mystyle: isActive}" align="center">
          This is the result!
        </div>
      </div>
    </div>
    `,
    directives: [NgClass]
})
class MyApp {
  isActive: boolean;
  
  constructor() {
    this.isActive = false;
  }
  
  changeStyle() {
    this.isActive = !this.isActive;
  }
}

bootstrap(MyApp);