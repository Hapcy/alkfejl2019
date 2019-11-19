import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/domain/issue';
import { IssueService } from '../issue.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issue: Issue;

  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const issueId = parseInt(
      this.route.snapshot.params.id);
    this.issue = await this.issueService.getIssue(issueId);
  }

  async submitIssue(issue: Issue) {
    issue.id = this.issue.id;
    await this.issueService.modifyIssue(issue);
    this.router.navigate(['/', 'issues']);
  }

}
