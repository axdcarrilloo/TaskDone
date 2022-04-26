import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateActivityComponent } from './dialog-update-activity.component';

describe('DialogUpdateActivityComponent', () => {
  let component: DialogUpdateActivityComponent;
  let fixture: ComponentFixture<DialogUpdateActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
