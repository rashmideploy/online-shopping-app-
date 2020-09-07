import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbccomponentComponent } from './abccomponent.component';

describe('AbccomponentComponent', () => {
  let component: AbccomponentComponent;
  let fixture: ComponentFixture<AbccomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbccomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
