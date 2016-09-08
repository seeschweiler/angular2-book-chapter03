import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'my-app',
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
        <div [ngClass]="{mystyle: isActive}" align="center">
          This is the result!
        </div>
      </div>
    </div>
    `
})
export class AppComponent {
  isActive: boolean;

  constructor() {
    this.isActive = false;
  }

  changeStyle() {
    this.isActive = !this.isActive;
  }
}
