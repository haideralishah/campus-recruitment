import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
declare var firebase: any
// var database = firebase.database();

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  roll: any;
  error: any = {};
  registerNewUser(email, password) {
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
    else if (this.roll == undefined) {
      this.error.message = 'Select your roll'
      this.error.status = true;
      setTimeout(() => {
        this.error.status = false;
        this.error.message = ''
      }, 5000);
    }
    else {
      console.log(email, password, this.roll);
      let that = this;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          firebase.database().ref('users/' + user.uid).set({
            email: email,
            roll: this.roll,
            uid: user.uid
          })
          that.router.navigate(['./home']);
        })
        .catch(function (err) {
          // Handle Errors here.
          var errorCode = err.code;
          var errorMessage = err.message;
          console.log(err.code);
          if (errorCode == 'auth/email-already-in-use') {
            that.error.message = errorMessage
            that.error.status = true;
            setTimeout(() => {
              that.error.status = false;
              that.error.message = ''
            }, 5000);
          }
        });
    }
  }
}
