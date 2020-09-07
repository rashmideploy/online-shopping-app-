import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTable } from '../Model/UserTable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Using Depedency Injection We have to inject the HttpClient Class as a Module in
  //the service

  baseURL: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) {

  }
  //Get All the Users
  getAllUsers() {
    return this._http.get<UserTable[]>(this.baseURL);
  }

}
