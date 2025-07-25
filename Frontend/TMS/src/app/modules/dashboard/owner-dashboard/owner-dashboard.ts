import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {
  NotificationDropdownComponent
} from '../../../shared/modules/components/notification-dropdown/notification-dropdown';


@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NotificationDropdownComponent
  ],
  templateUrl: './owner-dashboard.html',
})
export class OwnerDashboardComponent implements OnInit {

  username: string = ''

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const user = this.auth.getCurrentUserValue();
    this.username = user?.fullName || user?.username || 'Guest';
  }

  createProject(): void {
    this.router.navigate(['/projects/create']);
  }

  logout(): void {
    this.auth.logout();
  }
}
