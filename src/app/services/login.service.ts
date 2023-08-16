import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  baseurl = 'https://dummyjson.com'

  login(user: object ):Observable<any>{
    return this.http.post(`${this.baseurl}/auth/login`, user);
  }
}
