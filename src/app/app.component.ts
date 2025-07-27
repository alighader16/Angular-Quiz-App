import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false;

  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) {
    this.loaderService.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }

  onSearch(value: string): void {
    const id = Number(value);
    if (!isNaN(id) && id > 0) {
      window.scrollTo({ top: 0 });
      this.router.navigate(['/user', id]);
    }
  }
}
