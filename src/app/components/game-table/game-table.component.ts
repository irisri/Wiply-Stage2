import { Component, OnInit } from '@angular/core';

import { SquareService } from '../../services/squareService/square.service';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent implements OnInit {
  squares: any[];
  constructor(private squareService: SquareService) {}

  ngOnInit(): void {
    this.getSquares();
  }

  getSquares(): void {
    this.squareService
      .getSquares()
      .subscribe((squares) => (this.squares = squares));
  }

  onChangeRandomColor(id: number, ev: any): void {
    ev.stopPropagation();
    this.squareService.getRandomColor(id);
  }
}
