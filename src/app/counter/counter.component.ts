import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  num: number = 0;
  isButtonDisabled: boolean= false;
  
  constructor() {}

  //función sumar
  sumar() {
    this.num += 1;
    this.limitNumber();
  }

  restar() {
    this.num -= 1;
  }

  accionOperacion(n: number) {
    this.num += n;
    this.limitNumber();
  }

  limitNumber() {
    if (this.num > 50) {
      alert('No se puede seguir sumando porque el limite es 50');
      this.num = 0;
    }

    if (this.num < 0) {
      alert('No se puede seguir restando porque el limite es 0');
      this.num = 0;
    }
  }

  ngOnInit(): void {}
}
