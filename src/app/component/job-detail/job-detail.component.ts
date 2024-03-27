import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobService } from '../../service/job.service';
import { Observable } from 'rxjs';
import { Job } from '../../model/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailsComponent {
  job$: Observable<Job>;
  constructor(private route: ActivatedRoute, private jobService: JobService) {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.job$ = this.jobService.getJob(jobId);
    this.job$.subscribe(res=>console.log(res));
  }
}
