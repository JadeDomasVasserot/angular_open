import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartComponent} from "./chart/chart.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  { path: 'chart', component:ChartComponent },
  { path: '', component:AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
