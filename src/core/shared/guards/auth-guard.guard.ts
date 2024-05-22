import { DataAccessUsuarioService } from "@alphaOmega/domain";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(DataAccessUsuarioService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    return router.parseUrl("/login");
  }
};
