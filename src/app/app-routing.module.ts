import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignComponent } from './user-sign/user-sign.component';

const routes: Routes = [
  {
    path: 'UserLoginComponent',
    component: UserLoginComponent
  }
  , {
    path: '' ,
    component: HomeLayoutComponent
  }
  , {
    path: 'UserSignComponent' ,
    component: UserSignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
