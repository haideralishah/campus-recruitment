import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-st-page',
  templateUrl: './st-page.component.html',
  styleUrls: ['./st-page.component.css']
})
export class StPageComponent implements OnInit {
  studentData: any;
  authData;
  constructor(public dataService: DataService) {
    let that = this;
    this.authData = firebase.auth().currentUser.uid;
    firebase.database().ref('/profiles/' + this.authData).once('value')
      .then(function (snapshot) {
        that.studentData = snapshot.val();
        console.log(that.studentData);
        // ...
      });
  }

  ngOnInit() {
  }
  errorInformation;
  errorInformationMsg;
  warningPublish;
  studentInformation: any = {};
  publishWarning(firstName, lastName, education, gpa, dob, skills) {
    console.log(firstName, lastName, education, gpa, dob, skills);
    if (!firstName || !lastName || !education || !gpa || !dob || !skills) {
      this.errorInformationMsg = 'All fields are required.'
      this.errorInformation = true;
    }
    else {
      this.errorInformation = false;
      this.warningPublish = true;
      this.errorInformationMsg = 'Please make sure your provided details are correct, once published you may not edit it without admins approval.'
      this.studentInformation.firstName = firstName;
      this.studentInformation.lastName = lastName;
      this.studentInformation.education = education;
      this.studentInformation.gpa = gpa;
      this.studentInformation.dob = dob;
      this.studentInformation.skills = skills;
    }
  }

  seveToDb(informationObj) {
    this.authData = firebase.auth().currentUser.uid;
    firebase.database().ref('profiles/' + this.authData).set(informationObj)
      .then((v) => {

      });
  }

}
