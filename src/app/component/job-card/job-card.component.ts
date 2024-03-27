import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../model/job';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input()
  job!: Job;
  @Input()
  selection!: boolean;
  @Output() activate = new EventEmitter<Job>;

  constructor(private router: Router) { }

  onClickStar(job: Job) {
    if (this.selection) {
      job.active = !job.active;
      this.activate.emit(job);
    }
  }

  onClickTitle(id: number) {
    this.router.navigate(['jobs', id])
  }
}
