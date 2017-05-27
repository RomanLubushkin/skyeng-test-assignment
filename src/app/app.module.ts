import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import {AppService} from './app.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, SelectComponent, ResultComponent],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
