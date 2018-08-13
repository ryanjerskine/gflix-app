import { MoviesRoutingModule } from './movies.routing.module';

describe('Movies.RoutingModule', () => {
  let moviesRoutingModule: MoviesRoutingModule;

  beforeEach(() => {
    moviesRoutingModule = new MoviesRoutingModule();
  });

  it('should create an instance', () => {
    expect(moviesRoutingModule).toBeTruthy();
  });
});
