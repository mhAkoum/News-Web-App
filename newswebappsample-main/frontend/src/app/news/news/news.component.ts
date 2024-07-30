import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NewsService } from '../news.service'; // Adjust the path if necessary

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule], // Include CommonModule here
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService] // Add NewsService to the providers array
})
export class NewsComponent {
  news: any[] = [];

  constructor(private newsService: NewsService) {
    this.newsService.getNews().subscribe(
      (data: any) => {
        console.log(data.articles)
        // convert the object to an array
          data = Object.values(data.articles);
          console.log(data)
          this.news = Array.isArray(data) ? data : [];
      },
      (error) => {
          console.error('Error fetching news:', error);
          this.news = []; // Reset to empty array on error
      }
  );
  }
}
