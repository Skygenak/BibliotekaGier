import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkcjaComponent } from './akcja/akcja.component';
import { HorrorComponent } from './horror/horror.component';
import { PrzygodoweComponent } from './przygodowe/przygodowe.component';
import { RougeLikeComponent } from './rouge-like/rouge-like.component';
import { SoulsLikeComponent } from './souls-like/souls-like.component';
import { SportoweComponent } from './sportowe/sportowe.component';
import { StrategiczneRTSComponent } from './strategiczne-rts/strategiczne-rts.component';
import { SurvivalComponent } from './survival/survival.component';
import { SymulatoryComponent } from './symulatory/symulatory.component';
import { WyscigoweComponent } from './wyscigowe/wyscigowe.component';

const routes: Routes = [{ path: 'akcja', component: AkcjaComponent } ,
{ path: 'horror', component:HorrorComponent } ,
{ path: 'przygodowe', component:PrzygodoweComponent } ,
{path:'rougelike',component:RougeLikeComponent},
{path:'soulslike',component:SoulsLikeComponent},
{path:'sportowe',component:SportoweComponent},
{path:'strategiaRTS',component:StrategiczneRTSComponent},
{path:'strategiaTurowa',component:StrategiczneRTSComponent},
{path:'survival',component:SurvivalComponent},
{path:'symulacje',component:SymulatoryComponent},
{path:'wscigowe',component:WyscigoweComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
