import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouterModule, useValue: RouterModule.forRoot(routes) },
    HttpClientModule // Include HttpClientModule here
  ]
}).catch(err => console.error(err));