import { TvshowsRoutingModule } from './tvshows.routing.module';

describe('Tvshows.RoutingModule', () => {
  let tvshowsRoutingModule: TvshowsRoutingModule;

  beforeEach(() => {
    tvshowsRoutingModule = new TvshowsRoutingModule();
  });

  it('should create an instance', () => {
    expect(tvshowsRoutingModule).toBeTruthy();
  });
});
