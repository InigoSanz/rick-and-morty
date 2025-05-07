import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-characters',
  imports: [CardComponent, CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters = [
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
    { name: 'Iñigo', age: '27' },
  ];
}
