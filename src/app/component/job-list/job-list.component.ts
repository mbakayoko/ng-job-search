import { Component, Input } from '@angular/core';
import { Job } from '../../model/job';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  @Input()
  jobs!: Job[];
  @Input()
  selection!: boolean;
  onActive(job: Job) {
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
  }
}

