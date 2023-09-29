import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

// auth.constants.ts
export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    console.log('AuthGuard called');
    return authService.isAuthenticated() ? true : router.navigate(['']);
};