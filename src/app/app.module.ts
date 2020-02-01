import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginPageComponent,
      HomePageComponent,
      FramePageComponent,
      NavbarComponent,
      LoadingComponent,
      FooterComponent,
      UserCardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
