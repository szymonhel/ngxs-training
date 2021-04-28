import { Component } from '@angular/core';
import {BaseService} from "./base.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private baseService: BaseService) {
  }

  test(){
    this.baseService.testMethod();
  }
  title = 'ngxs';
}
