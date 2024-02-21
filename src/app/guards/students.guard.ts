import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentsGuard: CanActivateFn = (route, state) => {
  let user = JSON.parse(localStorage.getItem('currentUser')!);
  let routes = inject(Router)
  if(!user) {
    routes.navigate(['/signin'])
  } 
  return true;
};
