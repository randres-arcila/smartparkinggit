import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranquillaComponent } from './barranquilla.component';

describe('BarranquillaComponent', () => {
  let component: BarranquillaComponent;
  let fixture: ComponentFixture<BarranquillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarranquillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarranquillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
