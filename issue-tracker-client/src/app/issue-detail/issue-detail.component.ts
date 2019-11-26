import { Component, OnInit } from "@angular/core";
import { Issue } from "src/domain/issue";
import { ActivatedRoute, Router } from "@angular/router";
import { IssueService } from "../issue.service";
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.component.html",
  styleUrls: ["./issue-detail.component.css"]
})
export class IssueDetailComponent implements OnInit {
  UserRole = UserRole;
  issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router
  ) {}

  async ngOnInit() {
    const issueId = parseInt(this.route.snapshot.params.id);
    this.issue = await this.issueService.getIssue(issueId);
  }

  editIssue() {
    this.router.navigate([
      "issues", this.issue.id, "edit"]);
  }
}
