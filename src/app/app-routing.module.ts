
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  { path: '',           component: DashboardComponent},
  { path: 'characters', component: DashboardComponent},
  { path: 'episodes',   component: EpisodesComponent},
  { path: 'contact',    component: ContactComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
