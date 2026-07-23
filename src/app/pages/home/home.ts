import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected router = inject(Router);
  protected routes = this.router.config;
}
