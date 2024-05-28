import { LoginForm } from "@alphaOmega/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class DataAccessUsuarioService {
  private apiUrl = "https://dummyjson.com/auth";

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  public login(credentials: LoginForm) {
    return this.http.post(`${this.apiUrl}/login`, credentials).subscribe({
      next: (response: any) => {
        sessionStorage.setItem("token", response.token);
        this.router.navigate(["home"]);
      },
      error: (error) => {
        console.error("Login failed", error);
      },
    });
  }

  public logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
