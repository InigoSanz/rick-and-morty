import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';
import { Subscription } from 'rxjs';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
}

@Component({
  standalone: true,
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit, OnDestroy {
  protected characters: Character[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
    },
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    },
    {
      id: 6,
      name: 'Birdperson',
      status: 'Unknown',
      species: 'Bird-Person',
      gender: 'Male',
    },
  ];

  protected filteredCharacters: Character[] = this.characters;
  private subscription = new Subscription();

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription.add(
      this._filterService.searchText$.subscribe((text: string) => {
        this.filteredCharacters = this.characters.filter((char) =>
          char.name.toLowerCase().includes(text.toLowerCase())
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
