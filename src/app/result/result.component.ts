import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  totalValue = 0;
  correctValue = 0;
  subscription;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.update();
    const binding = this.update.bind(this);
    this.subscription = this.appService.changesEmitter.subscribe(binding);
  }

  update() {
    this.totalValue = this.appService.getTotalTestsCount();
    this.correctValue = this.appService.getCorrectTestsCount();
  }
}
