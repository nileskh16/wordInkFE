import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WordPlayComponent } from './wordplay/wordplay.component';

import { AppComponent } from './app.component';
import {AppRouter} from "./app.route";


@NgModule({
  declarations: [
    AppComponent,
    WordPlayComponent
  ],
  imports: [
    AppRouter,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
