import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsButtonComponent } from './button.component';

describe('PsButtonComponent', () => {
  let component: PsButtonComponent;
  let fixture: ComponentFixture<PsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
