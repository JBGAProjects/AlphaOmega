import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
  MatLabel,
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

const moduleAngular = [
  MatFormFieldModule,
  MatInputModule,
  MatLabel,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
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
