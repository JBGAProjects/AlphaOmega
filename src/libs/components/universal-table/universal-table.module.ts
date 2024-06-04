import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UniversalTableComponent } from "./universal-table.component";

@NgModule({
  declarations: [],
  exports: [UniversalTableComponent],
  imports: [CommonModule, UniversalTableComponent],
})
export class UniversalTableModule {}
