import {Injectable, EventEmitter} from '@angular/core';

export class Option {
  value: string;
  correct: boolean;
}

export class Test {
  caption: string;
  options: Option[];
}

export const TEST_LIST: Test[] = [
  {
    caption: 'Find fruit', options: [
    {value: 'Pepper', correct: false},
    {value: 'Apple', correct: true},
    {value: 'Garlic', correct: false}]
  },
  {
    caption: 'Find vegetable', options: [
    {value: 'Apple', correct: false},
    {value: 'Banana', correct: false},
    {value: 'Tomato', correct: true}]
  },
  {
    caption: 'Find berry', options: [
    {value: 'Tomato', correct: false},
    {value: 'Apple', correct: false},
    {value: 'Strawberry', correct: true}]
  }
];

@Injectable()
export class AppService {
  answers = {};
  changesEmitter = new EventEmitter();

  getTests(): Test[] {
    return TEST_LIST;
  }

  getTotalTestsCount(): number {
    return TEST_LIST.length;
  }

  getCorrectTestsCount(): number {
    let result = 0;
    for (const key in this.answers) {
      if (this.answers[key]) {
        result++;
      }
    }
    return result;
  }

  processTestResult(caption, correct) {
    this.answers[caption] = correct;
    this.changesEmitter.emit();
  }
}
