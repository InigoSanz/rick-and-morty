import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';

@Component({
  standalone: true,
  selector: 'app-episodes',
  imports: [CardComponent, CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
})
export class EpisodesComponent implements OnInit {
  episodes = [
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
  ];

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    console.log(this._filterService.searchText);
  }
}
