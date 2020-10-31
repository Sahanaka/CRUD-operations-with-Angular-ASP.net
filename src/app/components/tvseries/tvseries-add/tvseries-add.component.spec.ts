import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesAddComponent } from './tvseries-add.component';

describe('TvseriesAddComponent', () => {
  let component: TvseriesAddComponent;
  let fixture: ComponentFixture<TvseriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
