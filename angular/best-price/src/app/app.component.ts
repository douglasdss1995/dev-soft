import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BestPriceComponent} from './best-price/best-price.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BestPriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'best-price';
}
