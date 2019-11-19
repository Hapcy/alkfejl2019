import { Injectable } from '@angular/core';
import { User } from 'src/domain/user';
import { UserRole } from 'src/domain/user-role';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn(): boolean {
    return this.user.role !== UserRole.Guest;
  }
  get token() {
    return btoa(`${this.user.username}:${this.user.password}`);
  }
  private user: User;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.logout();
  }

  async login(username: string, password: string) {
    const oldUser = this.user;
    this.user = {
      name: null,
      role: null,
      username: username,
      password: password,
    };
    try {
      const user = await (this.http.get('users/login').toPromise() as Promise<User>);
      this.user.name = user.name;
      this.user.role = user.role;
      this.router.navigate(['/']);
    } catch (e) {
      this.user = oldUser;
    }
  }

  logout() {
    this.user = {
      name: 'Guest',
      username: null,
      password: null,
      role: UserRole.Guest,
    };
    // this.router.navigate(['/']);
  }

}
