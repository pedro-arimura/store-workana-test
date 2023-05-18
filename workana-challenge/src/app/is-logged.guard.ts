import { CanActivateFn } from '@angular/router';
import {Router} from "@angular/router"

export const isLoggedGuard: CanActivateFn = (route, state) => {
  let uid = localStorage.getItem("uid");
  if(!uid) {
    let router = new Router();
    router.navigate(['login']);

    return false;
  }

  return true;
};
