import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { CharteComponent } from './charte/charte.component';
import { WebComponent } from './web/web.component';
import { VisuelComponent } from './visuel/visuel.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {UploadComponent} from './upload/upload.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user',             component: ProfileComponent},
    { path: 'upload',           component: UploadComponent},
    { path: 'template',         component: TemplateComponent},
    { path: 'charte',           component: CharteComponent},
    { path: 'web',              component: WebComponent},
    { path: 'visuel',           component: VisuelComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
