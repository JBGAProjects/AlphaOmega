import { UniversalTable } from "@alphaOmega/core";
import { Component } from "@angular/core";
import { UniversalTableModule } from "libs/components/universal-table/universal-table.module";

@Component({
  selector: "app-user-management-query",
  standalone: true,
  imports: [UniversalTableModule],
  templateUrl: "./user-management-query.component.html",
  styleUrl: "./user-management-query.component.scss",
})
export class UserManagementQueryComponent {
  userDataArray: any[] = [
    { id: "U001", name: "Alice" },
    { id: "U002", name: "Bob" },
    // más datos...
  ];

  tableOptions: UniversalTable<any> = {
    columns: [
      {
        columnDef: "id",
        header: "ID",
        cell: (element: any) => `${element.id}`,
      },
      {
        columnDef: "name",
        header: "Nombre",
        cell: (element: any) => `${element.name}`,
      },
    ],
    data: this.userDataArray,
  };
}
