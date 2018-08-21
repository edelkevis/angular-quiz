import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInDepthComponent } from './component-in-depth.component';

describe('ComponentInDepthComponent', () => {
  let component: ComponentInDepthComponent;
  let fixture: ComponentFixture<ComponentInDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
