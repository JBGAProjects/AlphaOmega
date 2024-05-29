import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [],
  exports: [HeaderComponent],
  imports: [CommonModule, HeaderComponent],
})
export class HeaderModule {}
