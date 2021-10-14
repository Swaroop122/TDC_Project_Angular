import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string="http://localhost:4200/../assets/users.json";
  

  constructor(private http:HttpClient) { }

  getLogin()
  {
    return this.http.get(this.url);
  }
}
