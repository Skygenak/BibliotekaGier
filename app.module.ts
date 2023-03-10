import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkcjaComponent } from './akcja/akcja.component';
import { SymulatoryComponent } from './symulatory/symulatory.component';
import { SportoweComponent } from './sportowe/sportowe.component';
import { StrategiczneTuroweComponent } from './strategiczne-turowe/strategiczne-turowe.component';
import { StrategiczneRTSComponent } from './strategiczne-rts/strategiczne-rts.component';
import { HorrorComponent } from './horror/horror.component';
import { PrzygodoweComponent } from './przygodowe/przygodowe.component';
import { WyscigoweComponent } from './wyscigowe/wyscigowe.component';
import { SoulsLikeComponent } from './souls-like/souls-like.component';
import { RougeLikeComponent } from './rouge-like/rouge-like.component';
import { SurvivalComponent } from './survival/survival.component';

@NgModule({
  declarations: [
    AppComponent,
    AkcjaComponent,
    SymulatoryComponent,
    SportoweComponent,
    StrategiczneTuroweComponent,
    StrategiczneRTSComponent,
    HorrorComponent,
    PrzygodoweComponent,
    WyscigoweComponent,
    SoulsLikeComponent,
    RougeLikeComponent,
    SurvivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
