import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './details-page/details-page.component';
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { DetailsPageModule } from './details-page/details-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

const AppRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'details-page',
    component: DetailsPageComponent
  },
  {
    path: 'ingredients-page',
    component: IngredientsPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    CommonModule,
    HomePageModule,
    DetailsPageModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
