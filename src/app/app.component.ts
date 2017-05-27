import { Component } from '@angular/core';
import {Option, Test, AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skyeng test assignment';
  tests = [];

  constructor(private appService: AppService) {
    this.tests = this.appService.getTests();
  }
}
