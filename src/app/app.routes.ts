import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { authGuard } from "@alphaOmega/core";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
    ],
  },
];
