import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegisterComponent } from './register/register.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';

const routes: Routes = [
  {path: '', redirectTo: '/logIn',  pathMatch: 'full'},
  {path : 'logIn', component : LoginComponent},
  {path : 'register', component : RegisterComponent},  
  {
    path : 'dashboard', 
    component : DashboardComponent,
    children : [   
      {path: '', redirectTo: 'home',  pathMatch: 'full'},   
      {
        path: 'home',
        component : HomeComponent,
        children :[
          {
            path : 'viewrequests',
            component : ViewrequestsComponent
          }
        ]
      },
      {
       path : 'mailbox',
       component : MailboxComponent
      },
      {
        path : 'notifications',
        component : NotificationsComponent
      },
      
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
