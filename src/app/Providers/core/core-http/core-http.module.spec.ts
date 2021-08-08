import { CoreHttpModule } from './core-http.module';

describe('CoreHttpModule', () => {
  let coreHttpModule: CoreHttpModule;

  beforeEach(() => {
    coreHttpModule = new CoreHttpModule();
  });

  it('should create an instance', () => {
    expect(coreHttpModule).toBeTruthy();
  });
});
