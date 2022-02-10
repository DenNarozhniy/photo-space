import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public pageObservable = new Subject<number>();
  public sizeObservable = new Subject<number>();

  pageConfig(i: number) {
      this.pageObservable.next(i);
  }
  sizeConfig(i: number) {
      this.sizeObservable.next(i);
  }

  constructor(
    private dialog: MatDialog
  ) { }

  public open<T>(
    dialogComponent: ComponentType<T> | TemplateRef<T>,
    data: any
  ) {
    // by the default disable possibility to close dialog on outside click
    const disableOutsideClickClose = data.disableClose !== false;

    return this.dialog.open(dialogComponent, {
      width: data.width ? data.width : '500px',
      panelClass: data.panelClass ? data.panelClass : '',
      disableClose: disableOutsideClickClose,
      data: data,
    });
  }

  public prompt<T>(
    dialogComponent: ComponentType<T> | TemplateRef<T>,
    data: any
  ) {
    return this.open<typeof dialogComponent>(dialogComponent as any, data).afterClosed();
  }

}
