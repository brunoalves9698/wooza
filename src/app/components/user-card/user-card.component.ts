import { User } from './../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-user-card',
   templateUrl: './user-card.component.html',
   styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
   @Input() user: User;

   constructor() { }

   ngOnInit() {
   }

}
