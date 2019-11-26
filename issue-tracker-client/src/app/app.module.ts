import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LandingComponent } from './landing/landing.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import {MatInputModule} from '@angular/material/input';
import { RoutingModule } from './routing/routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { IssueNewComponent } from './issue-new/issue-new.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { LoginComponent } from './login/login.component';
import { RoleDirective } from './role.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IssueListComponent,
    IssueFormComponent,
    StatusFilterComponent,
    IssueDetailComponent,
    IssueNewComponent,
    IssueEditComponent,
    LoginComponent,
    RoleDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RoutingModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
