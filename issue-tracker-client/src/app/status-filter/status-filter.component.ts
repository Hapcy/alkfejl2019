import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() statusFilter: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.issueService.filterChange(e);
    this.filterChange.emit(e);
  }

}
