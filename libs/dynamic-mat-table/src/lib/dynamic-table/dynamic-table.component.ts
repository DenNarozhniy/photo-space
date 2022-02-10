import { MatCheckboxEmit } from './../interfaces/table-interfaces';
import { MATERIAL_COLUMN_TYPE } from './../../../../constants/dynamic-mat-table.constants';
import { Component, OnInit, EventEmitter, ViewChild, Output, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'photo-space-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data;
  @Input() displayedColumns;
  @Input() displayedColumnsNames;
  @Input() columns;
  @Input() mainTitle;
  @Input() saveName;
  @Output() onCheckboxChanged = new EventEmitter<MatCheckboxEmit>();
  @Output() onEditItem = new EventEmitter<any>();
  @Output() onDeleteItem = new EventEmitter<any>();
  @Output() onCreateItem = new EventEmitter<any>();
  @Output() onItemDetails = new EventEmitter<any>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public dataSource;
  public MATERIAL_COLUMN_TYPE = MATERIAL_COLUMN_TYPE;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.dataSource.data = this.data;
    }
  }

  onCheckboxChange(event, key, item): void {
    const data: MatCheckboxEmit = {
      item,
      key,
      value: event.checked
    }
    this.onCheckboxChanged.emit(data);
  }

  itemDetails(row): void {
    this.onItemDetails.emit(row);
  }

  editItem(row): void {
    this.onEditItem.emit(row);
  }

  deleteItem(row): void {
    this.onDeleteItem.emit(row);
  }

}
