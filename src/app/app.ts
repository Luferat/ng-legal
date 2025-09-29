// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-legal');

  constructor(public authService: AuthService) { }

  // Método para confirmar e fazer logout
  confirmLogout() {
    if (confirm('Tem certeza que deseja sair?')) {
      this.authService.logout();
    }
  }
}
