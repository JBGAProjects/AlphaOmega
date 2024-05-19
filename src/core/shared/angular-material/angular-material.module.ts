import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
  MatLabel,
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

const moduleAngular = [
  MatFormFieldModule,
  MatInputModule,
  MatLabel,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, moduleAngular],
  exports: [CommonModule, moduleAngular],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
  ],
})
export class AngularMaterialModule {}
