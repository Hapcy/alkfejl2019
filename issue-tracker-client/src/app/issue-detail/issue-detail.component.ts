import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/domain/issue';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  async ngOnInit() {  
    const issueId = parseInt(
      this.route.snapshot.params.id);
    this.issue = await this.issueService.getIssue(issueId);
  }

}
