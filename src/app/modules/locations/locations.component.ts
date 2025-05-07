import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-locations',
  imports: [CardComponent, CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent {
  locations = [
    { name: 'Totooine', distance: 1500 },
    { name: 'Totooine', distance: 1500 },
    { name: 'Totooine', distance: 1500 },
    { name: 'Totooine', distance: 1500 },
  ];
}
