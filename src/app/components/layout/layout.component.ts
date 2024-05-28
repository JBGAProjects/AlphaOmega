import { DataAccessUsuarioService } from "@alphaOmega/domain";
import { Component } from "@angular/core";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AngularMaterialModule } from "@alphaOmega/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
  imports: [
    DashboardComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    RouterModule,
  ],
})
export class LayoutComponent {
  constructor(private readonly usuarioLoginService: DataAccessUsuarioService) {}

  public logout() {
    this.usuarioLoginService.logout();
  }
}
