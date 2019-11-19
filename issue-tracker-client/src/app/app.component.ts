import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: 'list' | 'landing' | 'form' = 'landing';

  constructor(
    public authService: AuthService
  ) {}

  changePage(newPage: string) {
    this.currentPage = newPage as any;
  }

}
