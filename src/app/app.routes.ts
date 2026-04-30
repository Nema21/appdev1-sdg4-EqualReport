import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { unsavedGuard } from './guards/unsaved.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about',
  component: AboutComponent,
  canDeactivate: [unsavedGuard]
  },
// Main Features
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: 'dashboard/:id', component: DetailComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];