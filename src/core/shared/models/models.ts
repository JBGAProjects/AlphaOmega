export interface LoginForm {
  username: string;
  password: string;
}

export interface UniversalTable<T> {
  columns: TableColumn[];
  data: T[];
}

export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}
