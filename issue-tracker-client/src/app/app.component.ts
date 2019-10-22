import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: 'list' | 'landing' | 'form' = 'landing';

  changePage(newPage: string) {
    this.currentPage = newPage as any;
  }

}
