import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'

import {ReactiveFormsModule} from '@angular/forms';
import { TopheadlineComponent } from './topheadline/topheadline.component'
import {NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopheadlineComponent,
    TechnewsComponent,
    BusinessnewsComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    


  ],
  providers: [
    NewsapiservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
