import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
  CommonModule,
    HomeRoutingModule,
   /*  FormsModule,
    RouterModule */
  ],
  exports:[
    HomeComponent
  ]

})
export class HomeModule { }
