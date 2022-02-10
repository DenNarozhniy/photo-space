export interface MatTableWpConfig {
  data: any;
  columns: MatTableWpMap[];
  displayedColumns: string[];
  displayedColumnsNames: string[];
  forbidDragAndDrop?: boolean;
  hideCheckboxes?: boolean;
}

export interface MatTableWpMap {
  key: string;
  label: string;
  cell: (el: any)=>string;
  type: string;
  copyBtn?: boolean;
  availableOptions?: MatActionOptions;
}

export interface MatCheckboxEmit {
  value: boolean;
  key: string;
  item: any;
}

export interface MatActionOptions {
  delete?: boolean;
  edit?: boolean;
  itemDetail?: boolean;
}
