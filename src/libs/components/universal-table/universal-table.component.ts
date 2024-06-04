import { AngularMaterialModule, UniversalTable } from "@alphaOmega/core";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "universal-table",
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: "./universal-table.component.html",
  styleUrl: "./universal-table.component.scss",
})
export class UniversalTableComponent<T> implements OnInit {
  @Input({ required: true }) options!: UniversalTable<T>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumns!: string[];
  dataSource!: MatTableDataSource<T>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.options.data);
    this.displayedColumns = this.options.columns.map((c) => c.columnDef);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
