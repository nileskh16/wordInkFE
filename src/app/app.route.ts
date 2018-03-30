import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {AppComponent} from "./app.component";
import {WordPlayComponent} from "./wordplay/wordplay.component";

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'wordplay', component: WordPlayComponent}
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);
