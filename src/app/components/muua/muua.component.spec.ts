import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuuaComponent } from './muua.component';

describe('MuuaComponent', () => {
  let component: MuuaComponent;
  let fixture: ComponentFixture<MuuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
