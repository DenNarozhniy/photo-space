import { DialogService } from './../../../../services/src/lib/dialogs/dialog.service';
import { Component, OnInit, ViewContainerRef, ViewChild, Inject, ComponentFactoryResolver } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private contentComponentRef: any;
	public submitText: string;
	public cancelText: string;
	public hideDialogClose = false;

	@ViewChild('contentPlaceholder', { read: ViewContainerRef, static: true }) contentPlaceholder: ViewContainerRef;

	get isValid() {
		if (!this.data.payload.fields) {
			return true;
		}
		return this.contentComponentRef.instance.isValid();
	}

    get hideHeader() {
        return this.data.hideHeader;
    }

    get hideFooter() {
        return this.data.hideFooter;
    }

	constructor(
		public dialogRef: MatDialogRef<DialogComponent>,
		public dialogService: DialogService,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private _componentFactoryResolver: ComponentFactoryResolver,
	) {

	}

	ngOnInit() {
		this.hideDialogClose = this.data.hideDialogClose;
		const component = this.data.component;
		const cFactory = this._componentFactoryResolver.resolveComponentFactory(component);
		this.contentComponentRef = this.contentPlaceholder.createComponent<typeof component>(cFactory);
        this.contentComponentRef.instance.payload = this.data.payload;
        this.contentComponentRef.instance.dialog = this;
	}

	submitClicked() {
		if (!this.isValid) {
			this.contentComponentRef.instance.validate();
			return;
		}
		this.dialogRef.close(this.contentComponentRef.instance.payload);
	}

    customClicked() {
        this.data.payload.buttons.custom.customCallback.call(this, this.contentComponentRef.instance.payload);
        this.dialogRef.close();
    }

	dismissClicked() {
		this.dialogRef.close();
	}

	close() {
		this.dialogRef.close();
	}

	switchPage(i: number) {
		this.dialogService.pageConfig(i);
	}

	switchSize(i: number) {
		this.dialogService.sizeConfig(i);
	}

}
