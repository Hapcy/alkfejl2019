import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/domain/issue';
import { FormGroup } from '@angular/forms';
import { IssueStatus } from 'src/domain/issue-status';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  statuses = [{
    label: 'New',
    value: 'NEW',
  }, {
    label: 'In progress',
    value: 'IN_PROGRESS',
  }, {
    label: 'Done',
    value: 'DONE',
  }]

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

  submitIssue(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.issueService.createIssue(form.value);
    this.router.navigate(['/', 'issues']);
  }

}
