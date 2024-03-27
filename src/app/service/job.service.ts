import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../model/job';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private httpClient: HttpClient) { }
  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('/jobs');
  }
  getJob(jobId: string | null): Observable<Job> {
    return this.httpClient.get<Job>(`/jobs/${jobId}`);
  }
}
