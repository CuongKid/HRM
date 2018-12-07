import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAreaComponent } from './salary-area.component';

describe('SalaryAreaComponent', () => {
  let component: SalaryAreaComponent;
  let fixture: ComponentFixture<SalaryAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
