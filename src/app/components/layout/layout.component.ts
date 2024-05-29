import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "libs/components/header/header.module";

@Component({
  selector: "app-layout",
  standalone: true,
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
  imports: [RouterModule, HeaderModule],
})
export class LayoutComponent {}
