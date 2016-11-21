import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'ui-kit-demo',
  templateUrl: 'ui-kit-demo.html',
})
export class UiKitDemo {
  control = new FormControl('');

  subscriptions = [
    {value: 'small-0', viewValue: 'Small'},
    {value: 'medium-1', viewValue: 'Medium'},
    {value: 'large-2', viewValue: 'Large'}
  ];
  constructor() { }
}
