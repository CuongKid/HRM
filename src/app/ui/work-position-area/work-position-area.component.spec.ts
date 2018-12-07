import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPositionAreaComponent } from './work-position-area.component';

describe('WorkPositionAreaComponent', () => {
  let component: WorkPositionAreaComponent;
  let fixture: ComponentFixture<WorkPositionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPositionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPositionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
