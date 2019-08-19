import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { EpisodesComponent } from './episodes/episodes.component';

import { CharacterStatusPipe } from './utils/character-status.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchUserPipe } from './utils/search-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    EpisodesComponent,
    CharacterStatusPipe,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule, BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
