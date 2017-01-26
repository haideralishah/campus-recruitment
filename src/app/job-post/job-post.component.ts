import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  authData;

  jobPosts: any = [];
  vecanciesData: any = [];
  user: any;
  constructor(public dataService: DataService) {
    let that = this;
    this.authData = firebase.auth();
    this.user = firebase.auth().currentUser.uid;
    console.log(this.user, 'console.log(this.authData);');
    firebase.database().ref('/jobposts')
      .on('child_added', (data) => { this.vecanciesData.push(data.val()) })
    firebase.database().ref('/jobposts').on('child_added', (data) => { this.jobPosts.push(data.val()) })
    console.log(this.jobPosts);


  }

  ngOnInit() {
  }
  errorInformation;
  errorInformationMsg;
  jobPostInformation: any = {};
  warningPublish;
  publishWarning(companyName, jobTitle, jd, requirement, salary, skills) {
    console.log(jobTitle, jd, requirement, salary, skills);
    if (!jobTitle || !jd || !requirement || !salary || !skills || !companyName) {
      this.errorInformationMsg = 'All fields are required.'
      this.errorInformation = true;
    }
    else {
      this.jobPostInformation.jobTitle = jobTitle;
      this.jobPostInformation.jd = jd;
      this.jobPostInformation.requirement = requirement;
      this.jobPostInformation.salary = salary;
      this.jobPostInformation.skills = skills
      this.jobPostInformation.companyName = companyName;
      this.jobPostInformation.companyUid = firebase.auth().currentUser.uid;;
      this.seveToDb(this.jobPostInformation);
    }
  }

  seveToDb(jobObj) {
    let that = this;
    console.log(jobObj, 'job post+++++++++');
    this.authData = firebase.auth();


    firebase.database().ref('jobposts/').push(jobObj)
      .then((v) => {
        console.log(v);
        that.jobPostInformation = {};
        // this.warningPublish = false;

      });;

    // firebase.database().ref('jobposts/' + this.authData).set(jobObj)
    //   .then((v) => {
    //     console.log(v);
    //     this.jobPostInformation = {};
    //     // this.warningPublish = false;

    //   });;
  }
}