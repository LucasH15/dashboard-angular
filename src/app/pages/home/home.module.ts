import { NgModule } from '@angular/core';
import { NbAlertModule } from "@nebular/theme";

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    NbAlertModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
