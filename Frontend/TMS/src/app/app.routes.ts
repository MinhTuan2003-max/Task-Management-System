import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingComponent } from './modules/landing-page/landing-page';
import { MemberDashboardComponent } from './modules/dashboard/member-dashboard/member-dashboard';
import { AdminDashboardComponent } from './modules/dashboard/admin-dashboard/admin-dashboard';
import { OwnerDashboardComponent } from './modules/dashboard/owner-dashboard/owner-dashboard';
import { AdminGuard } from './core/guards/admin.guard';
import { DashboardResolver } from './core/resolvers/dashboard.resolver';

export const routes: Routes = [
  // Landing page
  {
    path: '',
    component: LandingComponent,
    title: 'Task Management System - Manage Your Tasks Efficiently'
  },

  // Authentication routes
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then(r => r.authRoutes),
    title: 'Authentication'
  },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    resolve: { redirect: DashboardResolver },
    loadComponent: () => import('./modules/dashboard/dashboard-redirect/dashboard-redirect').then(c => c.DashboardRedirect)
  },

  // Role-specific dashboard routes
  {
    path: 'dashboard/admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
    title: 'Admin Dashboard'
  },
  {
    path: 'dashboard/owner',
    component: OwnerDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OWNER', 'ROLE_MANAGER'] },
    title: 'Owner Dashboard'
  },
  {
    path: 'dashboard/member',
    component: MemberDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_USER'] },
    title: 'Member Dashboard'
  },

  // Error pages
  {
    path: 'unauthorized',
    loadComponent: () => import('./shared/modules/components/unauthorized/unauthorized').then(c => c.Unauthorized),
    title: 'Unauthorized'
  },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/modules/components/not-found/not-found').then(c => c.NotFound),
    title: 'Page Not Found'
  },

  // Wildcard route - phải ở cuối
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
