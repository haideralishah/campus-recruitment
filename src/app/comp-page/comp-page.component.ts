import { Component, OnInit } from '@angular/core';

declare var firebase: any;

@Component({
  selector: 'app-comp-page',
  templateUrl: './comp-page.component.html',
  styleUrls: ['./comp-page.component.css']
})
export class CompPageComponent implements OnInit {
  studentData: any;
  authData;
  userData: any = [];
  constructor() {
    let that = this;
    this.authData = firebase.auth().currentUser.uid;
    // this.authData.once('value', function (snapshot) {
    //   snapshot.forEach(function (childSnapshot) {
    //     var childKey = childSnapshot.key();
    //     var childData = childSnapshot.val();
    //     console.log(childKey, childData);
    //     // ...
    //   });
    // });
    // firebase.database().ref('/profiles').on('child_added')
    //   .then(function (snapshot) {
    //     that.studentData = snapshot.val();
    //     console.log(that.studentData);
    //   });
    firebase.database().ref('/profiles').on('child_added', (data) => { this.userData.push(data.val()) })
    console.log(this.userData);
  }


  ngOnInit() {
  }



}
