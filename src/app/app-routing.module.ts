import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ShowsComponent } from './shows/shows.component'
import {ShowInfoComponent } from './show-info/show-info.component'

const routes: Routes = [
  { path: '', component: ShowsComponent },
  { path: 'showinfo/:id', component: ShowInfoComponent }
]


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
