import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: String = 'Pokemon';
  favorite: String = 'Charizard';
  img: String =
    'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';
}
