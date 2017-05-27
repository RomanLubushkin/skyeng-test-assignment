import {Component} from '@angular/core';
import {AppService} from './app.service';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = environment.assignment === undefined ? 0 : environment.assignment;
  tests = [];
  translations = [];

  constructor(private appService: AppService) {
    this.tests = this.appService.getTests();
    this.translations = this.appService.getTranslations();
  }
}
