import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesUpdateComponent } from './tvseries-update.component';

describe('TvseriesUpdateComponent', () => {
  let component: TvseriesUpdateComponent;
  let fixture: ComponentFixture<TvseriesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
