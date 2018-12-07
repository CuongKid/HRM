import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './ui/login/login.component';

import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

import { MutualAreaComponent } from './ui/mutual-area/mutual-area.component';

import { ProfileAreaComponent } from './ui/profile-area/profile-area.component';

import { WorkPositionAreaComponent } from './ui/work-position-area/work-position-area.component';

import { LoginService } from './services/login.service';

import { HttpClientModule } from '@angular/common/http';
//import thư viện để sử dụng cho các control MAT(table, button..)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatFormFieldModule, MatButtonModule, MatCheckboxModule,
  MatOptionModule, MatSelectModule, MatSortModule, MatInputModule, MatTableModule, MatPaginatorModule, MatIcon, MatIconModule
} from '@angular/material';

import { ProfileService } from './services/profile.service';
import { EducationBackgroundService } from './services/education-background.service';
import { SalaryService } from './services/salary.service';
import { TitleService } from './services/title.service';
import { WorkPositionService } from './services/work-position.service';
import { TitleAreaComponent } from './ui/title-area/title-area.component';
import { SalaryAreaComponent } from './ui/salary-area/salary-area.component';
import { EducationBackgroundAreaComponent } from './ui/education-background-area/education-background-area.component';
import { InstituteAreaComponent } from './ui/institute-area/institute-area.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'human-resource',
    component: MutualAreaComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'profile-area',
  //   component: ProfileAreaComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'work-position-area',
  //   component: WorkPositionAreaComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'salary-area',
  //   component: SalaryAreaComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'title-area',
  //   component: TitleAreaComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'institute-area',
  //   component: InstituteAreaComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'education-area',
  //   component: EducationBackgroundAreaComponent,
  //   pathMatch: 'full'
  // },
  
  //Nếu nhập 1 path bất kì không phải path các path được khai báo sẽ báo page not found
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MutualAreaComponent,
    ProfileAreaComponent,
    WorkPositionAreaComponent,
    TitleAreaComponent,
    SalaryAreaComponent,
    EducationBackgroundAreaComponent,
    InstituteAreaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [
    LoginService,
    ProfileService,
    EducationBackgroundService,
    SalaryService,
    TitleService,
    WorkPositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
