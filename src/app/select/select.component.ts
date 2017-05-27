import {Component, Input} from '@angular/core';
import {Test, Option, AppService} from '../app.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() test: Test;

  constructor(private appService: AppService) {
  }

  onSelect(value: String): void {
    const count = this.test.options.length;
    let correct = false;
    let op: Option;
    for (let i = 0; i < count; i++) {
      op = this.test.options[i];
      if (op.value === value && op.correct) {
        correct = true;
        break;
      }
    }
    this.appService.processTestResult(this.test.caption, correct);
  }
}
