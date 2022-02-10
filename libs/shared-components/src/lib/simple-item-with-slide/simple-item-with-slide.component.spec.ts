import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleItemWithSlideComponent } from './simple-item-with-slide.component';

describe('SimpleItemWithSlideComponent', () => {
  let component: SimpleItemWithSlideComponent;
  let fixture: ComponentFixture<SimpleItemWithSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleItemWithSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleItemWithSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
