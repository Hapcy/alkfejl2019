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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IssueListComponent,
    IssueFormComponent,
    StatusFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RoutingModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
