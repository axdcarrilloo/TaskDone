import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingResponsibleComponent } from './assing-responsible.component';

describe('AssingResponsibleComponent', () => {
  let component: AssingResponsibleComponent;
  let fixture: ComponentFixture<AssingResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssingResponsibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssingResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
