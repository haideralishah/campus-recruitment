import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-vecancies',
  templateUrl: './vecancies.component.html',
  styleUrls: ['./vecancies.component.css']
})
export class VecanciesComponent implements OnInit {
  authData;
  vecanciesData: any = [];
  vecanciesObjData: any = [];
  constructor() {

    let that = this;
    this.authData = firebase.auth();
    firebase.database().ref('/jobposts')
      .on('child_added', (data) => { this.vecanciesData.push(data.val()) })
    // .on('child_added', (data) => { this.vecanciesData.push(data.val()) })
    console.log(this.vecanciesData);
    // for (var i = 0; i < this.vecanciesData.length; i++) {
    //   this.vecanciesObjData.push(this.vecanciesData[i]);
    // }
    console.log(this.vecanciesObjData);



  }

  ngOnInit() {
    // this.vecanciesData.forEach((key, indx) => {
    //   console.log(key.val);

  }


}
