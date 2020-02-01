import { User } from 'src/app/models/user.model';

export class Security {

   public static setUser(user: User) {
      const data = JSON.stringify(user);
      localStorage.setItem('wooza.user', btoa(data));
   }

   public static getCurrentUser(): User {
      const data = localStorage.getItem('wooza.user');
      if (data) {
         return JSON.parse(atob(data));
      } else {
         return null;
      }
   }

   public static clear() {
      localStorage.removeItem('wooza.user');
   }
}