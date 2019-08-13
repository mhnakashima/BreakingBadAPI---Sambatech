import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { EpisodesComponent } from './episodes/episodes.component';

import { CharacterStatusPipe } from './utils/character-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    EpisodesComponent,
    CharacterStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
