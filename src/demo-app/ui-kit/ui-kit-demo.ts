import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'ui-kit-demo',
  templateUrl: 'ui-kit-demo.html',
})
export class UiKitDemo {
  control = new FormControl('');

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }
}
