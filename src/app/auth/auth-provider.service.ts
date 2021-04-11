import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  private authenticated: Boolean = false;

  constructor() { }

  authenticate(user: User): Boolean {
    if(user.email === "test@termsheet.com" && user.password === "test1234!@#$")
      this.authenticated = true;

    return this.authenticated;
  }

  isAuthenticated(): Boolean {
    return this.authenticated;
  }
}