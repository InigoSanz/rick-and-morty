import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _searchText: string;

  constructor() {
    this._searchText = '';
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  get searchText(): string {
    return this._searchText;
  }
}
