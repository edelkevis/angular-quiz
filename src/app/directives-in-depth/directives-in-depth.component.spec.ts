import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesInDepthComponent } from './directives-in-depth.component';

describe('DirectivesInDepthComponent', () => {
  let component: DirectivesInDepthComponent;
  let fixture: ComponentFixture<DirectivesInDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesInDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesInDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
