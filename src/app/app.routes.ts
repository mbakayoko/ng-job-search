import { Routes } from '@angular/router';
import { JobSearchComponent } from './component/job-search/job-search.component';
import { JobFavoritesComponent } from './component/job-favorites/job-favorites.component';
import { JobDetailsComponent } from './component/job-detail/job-detail.component';

export const routes: Routes = [
  {
    'path': 'jobs',
    component: JobSearchComponent,
  },
  {
    path: 'jobs/:jobId',
    component: JobDetailsComponent
  },
  {
    'path': 'favorites',
    component: JobFavoritesComponent
  },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  {
    'path': '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
];
