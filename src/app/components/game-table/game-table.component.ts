import { Component, OnInit, OnDestroy } from '@angular/core';
import { Square } from '../../../models/Square';
import { Subscription } from 'rxjs';

import { SquareService } from '../../services/squareService/square.service';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent implements OnInit, OnDestroy {
  public squareListFromDB: Square[];
  public subscription: Subscription;

  constructor(private squareService: SquareService) {}

  ngOnInit(): void {
    this.getSquaresFromDb();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSquaresFromDb(): void {
    this.subscription = this.squareService
      .getObservableSquaresDao()
      .subscribe((res) => {
        this.squareListFromDB = res.map((square) => {
          return {
            id: +square.payload.doc.id,
            color: Object(square.payload.doc.data().color),
          } as Square;
        });
      });
  }

  onChangeColorDB(id: number, squaresListFromDB: Square[], ev: any): void {
    ev.stopPropagation();
    this.squareService.saveRandomColorToDB(id, squaresListFromDB);
  }
}
