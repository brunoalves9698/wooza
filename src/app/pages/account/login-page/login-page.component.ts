import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Security } from 'src/app/utils/storage/security.util';

@Component({
   selector: 'app-login-page',
   templateUrl: './login-page.component.html',
   styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
   public busy = false;

   constructor(private router: Router) { }

   ngOnInit() {
   }

   submit() {
      this.busy = true;
      let userName = <any>document.getElementById('name');
      let user = new User('', userName.value, '', '')
      Security.setUser(user);
      this.busy = false;
      this.router.navigate(['/home']);
   }

}
