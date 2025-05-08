import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../core/services/filter/filter.service';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  protected searchValue: string = '';

  constructor(private _filterService: FilterService) {}

  protected onSearch(): void {
    this._filterService.updateSearchText(this.searchValue);
  }
}
