import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

   { path: '', component: LoginPageComponent },
   { path: 'login', component: LoginPageComponent },
   {
      path: 'home',
      component: FramePageComponent,
      children: [
         { path: '', component: HomePageComponent },
      ]
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
