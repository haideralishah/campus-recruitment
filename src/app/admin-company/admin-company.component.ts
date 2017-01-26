import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataService } from '../data.service';
declare var firebase: any;
@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.css']
})
export class AdminCompanyComponent implements OnInit {
  authData;
  vecanciesData: any = [];
  vecanciesObjData: any = [];
  availableUsers: any = [];
  constructor(public http: Http) {

    let that = this;
    this.authData = firebase.auth();
    firebase.database().ref('/jobposts')
      .on('child_added', (data) => {
        let obj = data.val();
        obj.id = data.key;
        this.vecanciesData.push(obj)

      })


    firebase.database().ref('/users')
      .on('child_added', (data) => {
        let obj = data.val();
        obj.id = data.key;
        this.availableUsers.push(obj.id)
      })
    console.log(this.availableUsers, 'this.availableUsers');
  }

  ngOnInit() {
  }
  deletePost(fileObj) {
    console.log(fileObj);
    var deleteNode = firebase.database().ref('/jobposts/' + fileObj.id);
    deleteNode.remove();
  }

  deleteAccountPost(fileObj) {
    console.log(fileObj, 'fileObjfileObjfileObj');
    let opt: RequestOptions
    let myHeaders: Headers = new Headers
    myHeaders.set('uid', fileObj.companyUid);
    opt = new RequestOptions({
      headers: myHeaders
    })
    let url = 'https://immense-depths-75143.herokuapp.com'
    this.http.get(url + '/deleteUser', opt)
      // .map(res => res.json())
      .subscribe(data => {
        console.log(data, 'data');
        var deleteNode = firebase.database().ref('/users/' + fileObj.companyUid);
        deleteNode.remove();
      })

  }
}
