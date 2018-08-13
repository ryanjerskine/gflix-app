import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsPageComponent } from './tvshows-page.component';

describe('TvshowsPageComponent', () => {
  let component: TvshowsPageComponent;
  let fixture: ComponentFixture<TvshowsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
