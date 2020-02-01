import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
   public busy = true;
   public users$: User[];

   constructor(private userService: UserService) { }

   ngOnInit() {
      this.userService.getUsers().subscribe((data: User[]) => {
         this.users$ = data
         this.busy = false;
      });
   }

}
