import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewsComponent } from './news/news/news.component'; // Adjust the path if necessary
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewsComponent, HttpClientModule], // Include HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
