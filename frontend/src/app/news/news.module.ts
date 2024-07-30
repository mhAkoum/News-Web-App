// news.module.ts (acting as your root module)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NewsComponent } from '../news/news/news.component';
import { routes } from '../app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
    // ... other components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure routes
    // ... other imports
  ],
  exports: [
    AppComponent,
    NewsComponent
    // ... other exports
  ],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class NewsModule { }
