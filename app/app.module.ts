import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'Home',
        component:HomeComponent
      },
      {
        path:'News',
        component:NewsComponent
      }
    ]),
    HttpModule
  ],
  providers: [],
  bootstrap: [NavigationbarComponent]
})
export class AppModule { }
