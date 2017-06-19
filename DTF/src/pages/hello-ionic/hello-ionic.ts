import { Component } from '@angular/core';
import {EmployeehandbookPage} from '../employeehandbook/employeehandbook';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})

export class HelloIonicPage {
  emphand = EmployeehandbookPage;
  constructor() {

  }
}
