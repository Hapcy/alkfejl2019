import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/domain/issue';
import { IssueStatus } from 'src/domain/issue-status';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  constructor(
    public issueService: IssueService
  ) { }

  ngOnInit() {
    this.issueService.getIssues();
  }

}
