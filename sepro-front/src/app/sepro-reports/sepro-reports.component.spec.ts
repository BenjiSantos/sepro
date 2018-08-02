import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeproReportsComponent } from './sepro-reports.component';

describe('SeproReportsComponent', () => {
  let component: SeproReportsComponent;
  let fixture: ComponentFixture<SeproReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeproReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeproReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
