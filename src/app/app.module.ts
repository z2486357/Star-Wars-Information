import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './dataService.service';
import { CharacterComponent } from './character/character.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
