import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { GameSquareComponent } from './components/game-square/game-square.component';

import { SquareService } from './services/squareService/square.service';

@NgModule({
  declarations: [AppComponent, GameTableComponent, GameSquareComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [SquareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
