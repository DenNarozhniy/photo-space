import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextEditorComponent } from './field-text-editor.component';

describe('FieldTextEditorComponent', () => {
  let component: FieldTextEditorComponent;
  let fixture: ComponentFixture<FieldTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
