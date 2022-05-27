import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { TechnewsComponent } from './technews/technews.component';
import {TopheadlineComponent} from './topheadline/topheadline.component'
import {BusinessnewsComponent} from './businessnews/businessnews.component'



const routes: Routes = [
 
  {
    path: '',
    component:TopheadlineComponent,
   },//home
  
   {
    path: 'teach',
    component:TechnewsComponent,
   },//teachnews

   {
    path: 'business',
    component:BusinessnewsComponent,
   },//teachnews





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
