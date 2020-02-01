import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Security } from 'src/app/utils/storage/security.util';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
   public currentUser: User;

   constructor(private router: Router) { }

   ngOnInit() {
      this.currentUser = Security.getCurrentUser();
   }

   logout() {
      Security.clear();
      this.router.navigate(['/login']);
   }

}
