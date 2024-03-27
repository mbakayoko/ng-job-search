import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';
import { JobListComponent } from '../job-list/job-list.component';

@Component({
  selector: 'app-job-favorites',
  standalone: true,
  imports: [CommonModule, JobListComponent],
  templateUrl: './job-favorites.component.html',
  styleUrl: './job-favorites.component.css'
})
export class JobFavoritesComponent implements OnInit {
  jobs!: Job[];
  ngOnInit(): void {
    const item = localStorage.getItem('jobs');
    if (item) {
      const jobs = JSON.parse(item);
      this.jobs = jobs.filter((job: Job) => job.active);
    }
  }
}


