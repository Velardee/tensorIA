import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { DrawComponent } from './draw/draw.component';

const routes: Routes = [
  {
    path:'main',
    component: MainPageComponent
  },
  {
    path: 'draw',
    component: DrawComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }