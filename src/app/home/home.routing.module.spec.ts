import { HomeRoutingModule } from './home.routing.module';

describe('Home.RoutingModule', () => {
  let homeRoutingModule: HomeRoutingModule;

  beforeEach(() => {
    homeRoutingModule = new HomeRoutingModule();
  });

  it('should create an instance', () => {
    expect(homeRoutingModule).toBeTruthy();
  });
});
