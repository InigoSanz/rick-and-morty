import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rick-and-morty';
}
