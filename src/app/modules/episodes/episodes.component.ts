import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-episodes',
  imports: [CardComponent, CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
})
export class EpisodesComponent {
  episodes = [
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
    { title: 'El Señor de los Anillos', year: '2002' },
  ];
}
