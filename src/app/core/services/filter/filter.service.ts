import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  // BehaviorSubject para mantener y emitir el texto de búsqueda
  private _searchText = new BehaviorSubject<string>('');

  // Observable que el resto de componentes puede suscribirse
  public searchText$ = this._searchText.asObservable();

  // (opcional) otro subject para pruebas o mensajes, como hacías
  private _message = new BehaviorSubject<string>('message0');

  public message$ = this._message.asObservable();

  constructor() {
    this._startSendingMessages();
  }

  updateSearchText(value: string): void {
    this._searchText.next(value);
  }

  private _startSendingMessages(): void {
    let counter = 1;
    setInterval(() => {
      this._message.next(`message${counter++}`);
    }, 1000);
  }
}
