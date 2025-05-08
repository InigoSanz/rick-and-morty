import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';
import { Subscription } from 'rxjs';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

@Component({
  standalone: true,
  selector: 'app-locations',
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent implements OnInit {
  protected locations: Location[] = [
    {
      id: 1,
      name: 'Earth (C-137)',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: ['Rick', 'Morty'],
    },
    {
      id: 2,
      name: 'Abadango',
      type: 'Cluster',
      dimension: 'Unknown',
      residents: ['Abadango Cluster Princess'],
    },
    {
      id: 3,
      name: 'Citadel of Ricks',
      type: 'Space station',
      dimension: 'Unknown',
      residents: ['Many Ricks', 'Mortys'],
    },
    {
      id: 4,
      name: 'Gazorpazorp',
      type: 'Planet',
      dimension: 'Unknown',
      residents: ['Gazorpians'],
    },
    {
      id: 5,
      name: 'Bird World',
      type: 'Planet',
      dimension: 'Bird Dimension',
      residents: ['Birdperson'],
    },
    {
      id: 6,
      name: 'Froopyland',
      type: 'Artificial dimension',
      dimension: 'Froopy Dimension',
      residents: ['Tommy'],
    },
  ];

  protected filteredLocations: Location[] = this.locations;

  private subscription = new Subscription();

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription.add(
      this._filterService.searchText$.subscribe((searchText: string) => {
        this.filteredLocations = this.locations.filter((loc) =>
          loc.name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
