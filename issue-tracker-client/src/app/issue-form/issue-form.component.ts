import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/domain/issue';
import { FormGroup } from '@angular/forms';
import { IssueStatus } from 'src/domain/issue-status';

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
    console.log(this.issue);
  }

}
