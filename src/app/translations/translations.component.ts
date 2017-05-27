import {Component, HostListener, Input, OnInit} from '@angular/core';
import {TranslationOption} from '../app.service';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})

export class TranslationsComponent implements OnInit {
  @Input() translations: TranslationOption[];
  txIndex = 0;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      this.txIndex--;
      this.txIndex = Math.max(this.txIndex - 1, 0);
    } else if (event.key === 'ArrowRight') {
      this.txIndex++;
      this.txIndex = Math.min(this.txIndex + 1, this.translations.length - 1);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
