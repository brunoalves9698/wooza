import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
   providedIn: 'root'
})
export class UserService {
   public url = 'http://localhost:3000/v1/users'

   constructor(private http: HttpClient) { }

   getUsers() {
      return this.http.get<User[]>(`${this.url}`);
   }
}
