import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { GameSquareComponent } from './components/game-square/game-square.component';

@NgModule({
  declarations: [AppComponent, GameTableComponent, GameSquareComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
