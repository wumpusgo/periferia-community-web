import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Service()
export class UserService {
  public path: string = "http://localhost:8080/userInfo"
  public httpClient = inject(HttpClient)

  getUserInfo(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.path)
  }

}
