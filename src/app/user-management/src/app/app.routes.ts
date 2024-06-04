import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserManagementQueryComponent } from "./components/user-management-query/user-management-query.component";

export const routes: Routes = [
  { path: "", component: UserManagementQueryComponent },
];
