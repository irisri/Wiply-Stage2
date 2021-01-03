import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Square } from '../../../models/Square';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  public squaresFromDB: Square[];
  private readonly observableSquaresDao;

  constructor(private firestoreDB: AngularFirestore) {
    this.observableSquaresDao = firestoreDB
      .collection('squares')
      .snapshotChanges();
  }

  public getObservableSquaresDao() {
    return this.observableSquaresDao;
  }

  private _updateSquare(id: number, color: string) {
    return this.firestoreDB.doc('squares/' + id).update({ color });
  }

  public saveRandomColorToDB(id: number, squaresList: Square[]) {
    let color = this._generateRandomColor();
    const colorMap = this._getColorMap(squaresList);
    while (!colorMap[color] === undefined) {
      color = this._generateRandomColor();
    }
    this._updateSquare(id, color);
  }

  private _getColorMap(squares: Square[]): Map<string, boolean> {
    let colorsMap = new Map();
    squares.forEach((square) => (colorsMap[square.color] = true));
    return colorsMap;
  }

  private _generateRandomColor(): string {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
