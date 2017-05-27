import {Injectable, EventEmitter} from '@angular/core';

export class TestOption {
  value: string;
  correct: boolean;
}

export class Test {
  caption: string;
  options: TestOption[];
}


export class TranslationOption {
  word: string;
  translation: string;
}


export const TRANSLATION_LIST = [
  {word: 'Apple', translation: 'Яблоко'},
  {word: 'Banana', translation: 'Банан'},
  {word: 'Garlic', translation: 'Чеснок'},
  {word: 'Tomato', translation: 'Помидор'}
];

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

  getTranslations(): TranslationOption [] {
    return TRANSLATION_LIST;
  }

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
