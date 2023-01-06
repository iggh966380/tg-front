import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUiComponent } from './basic-ui.component';

describe('BasicUiComponent', () => {
  let component: BasicUiComponent;
  let fixture: ComponentFixture<BasicUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
