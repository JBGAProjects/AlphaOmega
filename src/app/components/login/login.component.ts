import { AngularMaterialModule } from "@alphaOmega/core";
import { DataAccessUsuarioService } from "@alphaOmega/domain";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
  //username: 'kminchelle',
  //password: '0lelplR',

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly usuarioService: DataAccessUsuarioService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [""],
      password: [""],
    });
  }

  login(formulario: FormGroup) {
    this.usuarioService.login(formulario.value);
  }
}
