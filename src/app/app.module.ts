import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layaut/skeleton/skeleton.component';
import { HeaderComponent } from './layaut/header/header.component';
import { FooterComponent } from './layaut/footer/footer.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './modules/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    {
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
