import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {ZooStateModel} from "./store/base.store";
import {CALCULATOR_API_BASE_URL, CalculatorApiClient} from "./test.api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

      NgxsModule.forRoot([ZooStateModel], {
      developmentMode: !environment.production
    })
  ],
  providers: [CalculatorApiClient,
    {provide: CALCULATOR_API_BASE_URL, useValue: 'http://localhost:5000/'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
