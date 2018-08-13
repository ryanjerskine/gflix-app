import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsAllComponent } from './tvshows-all.component';

describe('TvshowsAllComponent', () => {
  let component: TvshowsAllComponent;
  let fixture: ComponentFixture<TvshowsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
