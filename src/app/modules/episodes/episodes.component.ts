import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';
import { Subscription } from 'rxjs';

interface Episode {
  id: number;
  name: string;
  episode: string; // Ej: "S01E01"
  air_date: string;
}

@Component({
  standalone: true,
  selector: 'app-episodes',
  imports: [CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
})
export class EpisodesComponent implements OnInit, OnDestroy {
  protected episodes: Episode[] = [
    {
      id: 1,
      name: 'Pilot',
      episode: 'S01E01',
      air_date: 'December 2, 2013',
    },
    {
      id: 2,
      name: 'Lawnmower Dog',
      episode: 'S01E02',
      air_date: 'December 9, 2013',
    },
    {
      id: 3,
      name: 'Anatomy Park',
      episode: 'S01E03',
      air_date: 'December 16, 2013',
    },
    {
      id: 4,
      name: 'M. Night Shaym-Aliens!',
      episode: 'S01E04',
      air_date: 'January 13, 2014',
    },
    {
      id: 5,
      name: 'Meeseeks and Destroy',
      episode: 'S01E05',
      air_date: 'January 20, 2014',
    },
    {
      id: 6,
      name: 'Rick Potion #9',
      episode: 'S01E06',
      air_date: 'January 27, 2014',
    },
  ];

  protected filteredEpisodes: Episode[] = this.episodes;
  private subscription = new Subscription();

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription.add(
      this._filterService.searchText$.subscribe((text: string) => {
        this.filteredEpisodes = this.episodes.filter((ep) =>
          ep.name.toLowerCase().includes(text.toLowerCase())
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
