import { Injectable } from '@angular/core';
import { IssueStatus } from 'src/domain/issue-status';
import { Issue } from 'src/domain/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [
    {
      id: 1,
      title: 'Rossz projektor',
      place: '2-201',
      status: IssueStatus.New,
      createdAt: null,
      description: null,
      modifiedAt: null,
    },
    {
      id: 2,
      title: 'Rossz hallgatói gép',
      place: '2-211',
      status: IssueStatus.Doing,
      createdAt: null,
      description: null,
      modifiedAt: null,
    },
  ];
  
  filteredIssues: Issue[] = this.issues;

  constructor() { }

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
}
