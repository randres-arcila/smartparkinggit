import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrocarrilComponent } from './ferrocarril.component';

describe('FerrocarrilComponent', () => {
  let component: FerrocarrilComponent;
  let fixture: ComponentFixture<FerrocarrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerrocarrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrocarrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
