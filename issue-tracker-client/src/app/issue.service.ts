import { Injectable } from '@angular/core';
import { IssueStatus } from 'src/domain/issue-status';
import { Issue } from 'src/domain/issue';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [];
  
  filteredIssues: Issue[] = this.issues;

  constructor(
    private http: HttpClient
  ) { }

  async getIssues() {
    const issues = await (this.http.get('issues')
      .toPromise() as Promise<any[]>);
    this.filteredIssues = this.issues = issues.map(this.createIssueModel);
  }

  async getIssue(issueId: number): Promise<Issue> {
    const issue = await (this.http.get(`issues/${issueId}`)
      .toPromise() as Promise<any>);
    return this.createIssueModel(issue);
  }

  createIssue(issue: Issue) {
    issue.id = 3;
    this.issues.push(issue);
  }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredIssues = this.issues;
      } else {
        // Lehet ciklussal is :)
        this.filteredIssues = this.issues.filter(issue => {
          return issue.status === filterValue;
        });
      }
    }
  }

  private createIssueModel(issue: any): Issue {
    return {
      ...issue,
      createdAt: new Date(issue.createdAt),
    } as Issue;
  }
}
