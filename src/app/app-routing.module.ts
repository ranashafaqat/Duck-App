import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DuckComponent } from './duck/duck.component';

const routes: Routes = [
  
  {
    path: 'duck/:id',
    component: DuckComponent

  },
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
