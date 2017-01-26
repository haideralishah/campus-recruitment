import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataService } from '../data.service';

declare var firebase: any;

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  studentData: any;
  authData;
  userData: any = [];
  availableUsers: any = [];
  constructor(public http: Http) {
    let that = this;
    this.authData = firebase.auth().currentUser.uid;

    firebase.database().ref('/profiles').on('child_added', (data) => {
      let obj = data.val();
      obj.id = data.key;
      // this.vecanciesData.push(obj)
      this.userData.push(obj)
    })
    console.log(this.userData);


    // firebase.database().ref('/users')
    //   .on('child_added', (data) => {
    //     let obj = data.val();
    //     obj.id = data.key;
    //     this.availableUsers.push(obj.id)
    //   })
    // console.log(this.availableUsers, 'this.availableUsers');

  }

  ngOnInit() {
  }

  deletePost(fileObj) {
    console.log(fileObj);
    var deleteNode = firebase.database().ref('/profiles/' + fileObj.id);
    deleteNode.remove();
  }

  deleteAccountPost(fileObj) {
    console.log(fileObj, 'fileObjfileObjfileObj');
    let opt: RequestOptions
    let myHeaders: Headers = new Headers
    myHeaders.set('uid', fileObj.id);
    opt = new RequestOptions({
      headers: myHeaders
    })
    let url = 'https://immense-depths-75143.herokuapp.com'
    this.http.get(url + '/deleteUser', opt)
      // .map(res => res.json())
      .subscribe(data => {
        console.log(data, 'data');
        var deleteNode = firebase.database().ref('/profiles/' + fileObj.id);
        deleteNode.remove();
      })

  }

}
