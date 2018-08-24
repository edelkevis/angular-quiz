import { PizzaMakerModule } from './pizza-maker.module';

describe('PizzaMakerModule', () => {
  let pizzaMakerModule: PizzaMakerModule;

  beforeEach(() => {
    pizzaMakerModule = new PizzaMakerModule();
  });

  it('should create an instance', () => {
    expect(pizzaMakerModule).toBeTruthy();
  });
});
