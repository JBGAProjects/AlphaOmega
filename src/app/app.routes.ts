import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { authGuard } from "@alphaOmega/core";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "user-management",
        loadChildren: () =>
          import("app/user-management/src/app/app.routes").then(
            (m) => m.routes
          ),
      },
    ],
  },
];
