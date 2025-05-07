import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';

@Component({
  standalone: true,
  selector: 'app-locations',
  imports: [CardComponent, CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent implements OnInit {
  locations = [
    { name: 'Totooine', distance: 1500 },
    { name: 'Totooine', distance: 1500 },
    { name: 'Totooine', distance: 1500 },
    { name: 'Totooine', distance: 1500 },
  ];

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    console.log(this._filterService.searchText);
  }
}
