import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DearPuppyComponent } from './dear-puppy.component';

describe('DearPuppyComponent', () => {
  let component: DearPuppyComponent;
  let fixture: ComponentFixture<DearPuppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DearPuppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DearPuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
