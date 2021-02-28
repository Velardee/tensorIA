import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DrawableDirective } from './drawable.directive';
import { MainPageComponent } from './main-page/main-page.component';
import { DrawComponent } from './draw/draw.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawableDirective,
    MainPageComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  exports:[
    DrawableDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
