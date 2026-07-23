import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-to-home-button',
  imports: [MatIcon],
  templateUrl: './back-to-home-button.html',
  styleUrl: './back-to-home-button.scss',
})
export class BackToHomeButton {
  private router = inject(Router);
  protected homeRoute = this.router.config[0];

  navigate() {
    this.router.navigate([this.homeRoute.path]);
  }
}
