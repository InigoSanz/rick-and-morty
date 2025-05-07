import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';

@Component({
  standalone: true,
  selector: 'app-characters',
  imports: [CardComponent, CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
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

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    console.log(this._filterService.searchText);
  }
}
