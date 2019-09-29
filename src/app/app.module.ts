import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './dataService.service';
import { CharacterComponent } from './character/character.component';
import { HomeworldComponent } from './homeworld/homeworld.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HomeworldComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent
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
