import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SQUARES } from '../../db';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  constructor() {}

  public getSquares(): Observable<any[]> {
    return of(SQUARES);
  }

  public getRandomColor(id: number): void {
    let _squares = [];
    this.getSquares().subscribe((squares) => (_squares = squares));
    const colorMap = this._getColorMap(_squares);
    let color = this._generateRandomColor();
    const indexes = this._getSquareById(id);
    while (!colorMap[color] === undefined) {
      color = this._generateRandomColor();
    }
    let square = _squares[indexes[0]][indexes[1]];
    square.color = color;
  }

  private _getColorMap(squares: any[]): Map<string, boolean> {
    let colorsMap = new Map();
    let allSquares = [];
    squares.forEach((row) => {
      row.forEach((square) => allSquares.push(square));
    });
    allSquares.forEach((square) => {
      colorsMap[square.color] = true;
    });
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

  private _getSquareById(id: number): any[] {
    let indexes = [];
    switch (id) {
      case 1:
        indexes.push(0, 0);
        break;
      case 2:
        indexes.push(0, 1);
        break;
      case 3:
        indexes.push(0, 2);
        break;
      case 4:
        indexes.push(1, 0);
        break;
      case 5:
        indexes.push(1, 1);
        break;
      case 6:
        indexes.push(1, 2);
        break;
      case 7:
        indexes.push(2, 0);
        break;
      case 8:
        indexes.push(2, 1);
        break;
      case 9:
        indexes.push(2, 2);
        break;
    }
    return indexes;
  }
}
