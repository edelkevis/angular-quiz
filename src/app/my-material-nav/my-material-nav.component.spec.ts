
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyMaterialNavComponent } from './my-material-nav.component';

describe('MyMaterialNavComponent', () => {
  let component: MyMaterialNavComponent;
  let fixture: ComponentFixture<MyMaterialNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MyMaterialNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMaterialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
