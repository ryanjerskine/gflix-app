import { TvshowsModule } from './tvshows.module';

describe('TvshowsModule', () => {
  let tvshowsModule: TvshowsModule;

  beforeEach(() => {
    tvshowsModule = new TvshowsModule();
  });

  it('should create an instance', () => {
    expect(tvshowsModule).toBeTruthy();
  });
});
