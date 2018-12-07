import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAreaComponent } from './institute-area.component';

describe('InstituteAreaComponent', () => {
  let component: InstituteAreaComponent;
  let fixture: ComponentFixture<InstituteAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
