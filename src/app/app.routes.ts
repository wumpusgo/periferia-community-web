import { Routes } from '@angular/router';
import { UserInfo } from './components/user-info/user-info';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: "userinfo", component: UserInfo }
];
