import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAppComponent } from './city-app.component';

describe('CityAppComponent', () => {
  let component: CityAppComponent;
  let fixture: ComponentFixture<CityAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
