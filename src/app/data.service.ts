import { Injectable } from '@angular/core';

// declare var fb: any

@Injectable()
export class DataService {
  auth;
  constructor() {
    this.setNavBar('noAuth')
  }
  setAuth(id) {
    localStorage.setItem('auth', JSON.stringify(id));

  }

  getAuth() {
    this.auth = localStorage.getItem('auth');
    this.auth = JSON.parse(this.auth);
    return this.auth
  }

  authStatus;
  setAuthStatus(val) {
    // this.authStatus = val;
    this.authStatus = val;
  }

  currentNavBar;
  setNavBar(val) {
    this.currentNavBar = val;
  }




}
