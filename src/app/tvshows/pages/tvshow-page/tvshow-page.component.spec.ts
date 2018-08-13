import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowPageComponent } from './tvshow-page.component';

describe('TvshowPageComponent', () => {
  let component: TvshowPageComponent;
  let fixture: ComponentFixture<TvshowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
