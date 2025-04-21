import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  isLoggedIn: boolean = false;
  userRole: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    this.isLoggedIn = !!localStorage.getItem('jwt_token');
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Full reset
    });
  }
  
  title = 'studentmanagement';
}