import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonFuegoComponent } from './pokemon-fuego/pokemon-fuego.component';

@NgModule({
  declarations: [  /* aquí se registran los nuevos componentes */
    AppComponent,
    PokemonsComponent,
    PokemonFuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
