import { Component } from '@angular/core';
import { AuthService } from '@mdv4/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory';

  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
