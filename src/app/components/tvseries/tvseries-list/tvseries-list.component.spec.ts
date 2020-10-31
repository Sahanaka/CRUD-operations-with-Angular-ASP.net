import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesListComponent } from './tvseries-list.component';

describe('TvseriesListComponent', () => {
  let component: TvseriesListComponent;
  let fixture: ComponentFixture<TvseriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
