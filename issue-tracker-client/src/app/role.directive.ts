import { Directive, Input, ElementRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserRole } from 'src/domain/user-role';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  @Input() appRole: UserRole[];

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.authService.hasRole(this.appRole)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
