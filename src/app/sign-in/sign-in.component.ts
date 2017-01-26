import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';


declare var firebase: any

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor(public dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  starCountRef;
  userID;
  error: any = {};
  loginUser(email, password) {
    let that = this;
    console.log(email, password);
    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      this.error.message = 'Email address is invalid.'
      this.error.status = true;
      setTimeout(() => {
        this.error.status = false;
        this.error.message = ''
      }, 5000);
    }
    else if (password.length <= 4) {
      this.error.message = 'Password must be greater than 4 cheractors.'
      this.error.status = true;
      setTimeout(() => {
        this.error.status = false;
        this.error.message = ''
      }, 5000);
    }

    else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          // this.dataService.setAuth(user);
          console.log(user, 'dataaaaa');
          firebase.database().ref('/users/' + this.dataService.getAuth().uid).once('value')
            .then(function (snapshot) {
              var company = snapshot.val();
              console.log(company, 'company');
              that.dataService.authStatus = true;
              if (company.roll == 'Student') {
                that.dataService.setNavBar('studentAuth');
                that.router.navigate(['./stPage']);
              }
              else if (company.roll == 'company') {
                console.log('data');
                that.dataService.setNavBar('companyAuth');
                that.router.navigate(['./compPage']);
              }
              else if (company.roll == 'admin') {
                console.log('data');
                that.dataService.setNavBar('adminAuth');
                that.router.navigate(['./adminCompany']);
              }
              // ...
            });


        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage, 'errorMessage');
          console.log(errorCode, 'errorCode');
          if (errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
            that.error.message = errorMessage
            that.error.status = true;
            setTimeout(() => {
              that.error.status = false;
              that.error.message = ''
            }, 5000);
          }
          else if (errorMessage == 'The password is invalid or the user does not have a password.') {
            that.error.message = errorMessage
            that.error.status = true;
            setTimeout(() => {
              that.error.status = false;
              that.error.message = ''
            }, 5000);
          }
          // ...
        });
    }
  }
}
