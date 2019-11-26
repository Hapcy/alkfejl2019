import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { UserRole } from 'src/domain/user-role';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  @Input() appRole: UserRole[];

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.hasRole(this.appRole)) {
      this.elementRef.nativeElement.style = 'display: none;';
    }
  }

}
