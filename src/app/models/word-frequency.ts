import { IWordFrequency, TWordSpecs } from '../interfaces/words';

export class WordFrequency implements IWordFrequency {

  constructor(
    private word: TWordSpecs,
  ) {}

  getWord(): string {
    return this.word.word;
  }

  getFrequency(): number {
    return this.word.count;
  }

}