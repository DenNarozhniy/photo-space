import { MatTableWpMap } from './interfaces/table-interfaces';
import { Injectable } from "@angular/core";

@Injectable()
export class DynamicMTableHelpers {

public prepareDynamicTableDataToShow(data: any, tableDefinitionConfic: MatTableWpMap[]) {
  const tempData = {
    data: [...data],
    displayedColumns: tableDefinitionConfic.map(item => item.key),
    displayedColumnsNames: tableDefinitionConfic.map(item => item.label),
    columns: [...tableDefinitionConfic]
  };
  return {...tempData};
}

}
