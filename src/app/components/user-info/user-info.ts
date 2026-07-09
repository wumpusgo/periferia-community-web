import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { from, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-info',
  imports: [AsyncPipe],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo implements OnInit {
  ngOnInit(): void {
    this.userInfo$ = this.userInfoService.getUserInfo();
  }
  public userInfoService = inject(UserService)
  public userInfo$: Observable<User[]> = from([]);



}
