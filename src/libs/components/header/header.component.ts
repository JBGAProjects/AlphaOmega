import { AngularMaterialModule } from "@alphaOmega/core";
import { DataAccessUsuarioService } from "@alphaOmega/domain";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [AngularMaterialModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(private readonly usuarioLoginService: DataAccessUsuarioService) {}

  public logout() {
    this.usuarioLoginService.logout();
  }
}
