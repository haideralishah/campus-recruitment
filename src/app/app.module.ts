import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ButtonsModule } from 'ng2-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StPageComponent } from './st-page/st-page.component';
import { VecanciesComponent } from './vecancies/vecancies.component';
import { CompPageComponent } from './comp-page/comp-page.component';
import { JobPostComponent } from './job-post/job-post.component';
import { AdminCompanyComponent } from './admin-company/admin-company.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'stPage', component: StPageComponent },
  { path: 'vecancies', component: VecanciesComponent },
  { path: 'compPage', component: CompPageComponent },
  { path: 'jobPost', component: JobPostComponent },
  { path: 'adminCompany', component: AdminCompanyComponent },
  { path: 'AdminStudent', component: AdminStudentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    SignInComponent,
    StPageComponent,
    VecanciesComponent,
    CompPageComponent,
    JobPostComponent,
    AdminCompanyComponent,
    AdminStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
