import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualAreaComponent } from './mutual-area.component';

describe('MutualAreaComponent', () => {
  let component: MutualAreaComponent;
  let fixture: ComponentFixture<MutualAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
