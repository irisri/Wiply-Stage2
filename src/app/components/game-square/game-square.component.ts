import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.css'],
})
export class GameSquareComponent implements OnInit {
  constructor() {}

  @Input() id: number;
  @Input() color: string;

  ngOnInit(): void {}
}
