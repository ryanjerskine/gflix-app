import { AccountRoutingModule } from './account.routing.module';

describe('Account.RoutingModule', () => {
  let accountRoutingModule: AccountRoutingModule;

  beforeEach(() => {
    accountRoutingModule = new AccountRoutingModule();
  });

  it('should create an instance', () => {
    expect(accountRoutingModule).toBeTruthy();
  });
});
