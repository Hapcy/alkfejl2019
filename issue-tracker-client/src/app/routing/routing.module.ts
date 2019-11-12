import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { LandingComponent } from '../landing/landing.component';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
// import { IssueDetailComponent } from '../issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'issues',
    component: IssueListComponent
  },
  {
    path: 'issues/new',
    component: IssueFormComponent
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
