import { CoreRoutingModule } from './core.routing.module';

describe('Core.RoutingModule', () => {
  let coreRoutingModule: CoreRoutingModule;

  beforeEach(() => {
    coreRoutingModule = new CoreRoutingModule();
  });

  it('should create an instance', () => {
    expect(coreRoutingModule).toBeTruthy();
  });
});
