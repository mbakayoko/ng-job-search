import { JobService } from './../../service/job.service';
import { Job } from './../../model/job';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from '../job-list/job-list.component';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, JobListComponent],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css',
  providers: [JobService]
})
export class JobSearchComponent implements OnInit {
  jobs!: Job[];
  constructor(private jobService: JobService) { };
  ngOnInit(): void {
    const item = localStorage.getItem('jobs');
    if (item) {
      this.jobs = JSON.parse(item);
    } else {
      this.jobService.getJobs().subscribe((jobs) => {
        this.jobs = jobs
      });
    }
  }
}
