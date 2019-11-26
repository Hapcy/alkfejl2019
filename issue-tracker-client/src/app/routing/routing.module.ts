import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { LandingComponent } from '../landing/landing.component';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
import { IssueNewComponent } from '../issue-new/issue-new.component';
import { IssueEditComponent } from '../issue-edit/issue-edit.component';
import { LoginComponent } from '../login/login.component';
import { UserRole } from 'src/domain/user-role';
import { RoleGuard } from '../role.guard';
// import { IssueDetailComponent } from '../issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'issues',
    component: IssueListComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'issues/new',
    component: IssueNewComponent,
    data: {
      roles: [UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
    data: {
      roles: [UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      roles: [UserRole.Guest],
    },
    canActivate: [RoleGuard],
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
