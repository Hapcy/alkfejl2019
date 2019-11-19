import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() mode: 'create' | 'edit';
  @Input() issue: Issue;
  @Output() issueSubmit: EventEmitter<Issue> = new EventEmitter();

  statuses = [{
    label: 'New',
    value: 'NEW',
  }, {
    label: 'In progress',
    value: 'DOING',
  }, {
    label: 'Done',
    value: 'DONE',
  }]

  constructor() { }

  ngOnInit() {}

  async submitIssue(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.issueSubmit.emit(form.getRawValue() as Issue);
  }

}
