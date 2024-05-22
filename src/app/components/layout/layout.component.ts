import { DataAccessUsuarioService } from "@alphaOmega/domain";
import { Component } from "@angular/core";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {
  constructor(private readonly usuarioLoginService: DataAccessUsuarioService) {}

  public logout() {
    this.usuarioLoginService.logout();
  }
}
