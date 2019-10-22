import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() statusFilter: string;

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(e: any) {
    this.filterChange.emit(e);
  }

}
