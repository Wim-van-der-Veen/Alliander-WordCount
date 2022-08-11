import { WordFrequencyAnalyzer } from './word-frequency-analyzer';

describe('WordFrequencyAnalyzer', () => {
  let component: WordFrequencyAnalyzer;

  beforeEach(async () => {
    component = new WordFrequencyAnalyzer();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
