import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
declare var firebase: any

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  authStatus;
  constructor(public dataService: DataService) {

  }

  ngOnInit() {
  }

  setActive(el, secEl) {
    console.log(el);
    el.style.backgroundColor = '#547354';
    secEl.style.backgroundColor = '#449d44';
  }

  logout() {
    this.dataService.authStatus = false;
    this.dataService.setNavBar('noAuth');

    firebase.auth().signOut().then(function () {
      localStorage.clear();
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    });
  }

}
