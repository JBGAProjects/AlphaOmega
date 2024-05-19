import { AngularMaterialModule } from "@alphaOmega/core";
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
  //https://www.openproject.org/docs/api/example/

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [""],
      passWord: [""],
    });
  }

  login(formulario: FormGroup) {
    console.log(formulario.value);
  }
}
