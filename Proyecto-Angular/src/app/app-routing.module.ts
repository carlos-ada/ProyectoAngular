import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
//import { Login2Component } from './prueba/login2/login2.component';

const routes: Routes = [
  {path:'',redirectTo:'image/upload',pathMatch:'full'},
  //{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'image', component:ImagesComponent,children:[
    {path:'upload',component:ImageComponent},
    {path:'list',component:ImageListComponent}
  ]},
  //{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  //{ path: 'login2', component:Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
