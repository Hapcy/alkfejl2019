import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/domain/issue';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';
import { IssueStatus } from 'src/domain/issue-status';

@Component({
  selector: 'app-issue-new',
  templateUrl: './issue-new.component.html',
  styleUrls: ['./issue-new.component.css']
})
export class IssueNewComponent implements OnInit {

  issue: Issue;

  constructor(
    private issueService: IssueService,
    private router: Router
  ) { }

  ngOnInit() {
    this.issue = {
      id: null,
      title: '',
      place: '',
      status: 'NEW' as IssueStatus,
      description: '',
      createdAt: null,
      modifiedAt: null,
    };
  }

  async submitIssue(issue: Issue) {
    await this.issueService.createIssue(issue);
    this.router.navigate(['/', 'issues']);
  }

}
