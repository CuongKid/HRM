import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationBackgroundAreaComponent } from './education-background-area.component';

describe('EducationBackgroundAreaComponent', () => {
  let component: EducationBackgroundAreaComponent;
  let fixture: ComponentFixture<EducationBackgroundAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationBackgroundAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationBackgroundAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
