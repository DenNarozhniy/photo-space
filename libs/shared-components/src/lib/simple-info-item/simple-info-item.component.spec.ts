import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInfoItemComponent } from './simple-info-item.component';

describe('SimpleInfoItemComponent', () => {
  let component: SimpleInfoItemComponent;
  let fixture: ComponentFixture<SimpleInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
