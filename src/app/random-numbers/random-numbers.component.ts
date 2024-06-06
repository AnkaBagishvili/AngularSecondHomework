import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.scss']
})
export class RandomNumbersComponent implements OnInit {
  randomNumbers: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateRandomNumbers();
  }

  generateRandomNumbers(): void {
    this.randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
  }
}

