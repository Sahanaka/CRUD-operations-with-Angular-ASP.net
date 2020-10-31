import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesDeleteComponent } from './tvseries-delete.component';

describe('TvseriesDeleteComponent', () => {
  let component: TvseriesDeleteComponent;
  let fixture: ComponentFixture<TvseriesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
