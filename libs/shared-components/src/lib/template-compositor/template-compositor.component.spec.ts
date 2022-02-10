import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCompositorComponent } from './template-compositor.component';

describe('TemplateCompositorComponent', () => {
  let component: TemplateCompositorComponent;
  let fixture: ComponentFixture<TemplateCompositorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCompositorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCompositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
