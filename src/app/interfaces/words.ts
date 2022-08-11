export type TWordSpecs = {
  word: string;
  count: number;
}

export interface IWordFrequency {
  getWord(): string;
  getFrequency(): number;
};

export interface IWordFrequencyAnalyzer {
  calculateHighestFrequency(text: string): number;
  calculateFrequencyForWord (text: string, word: string): number;
  calculateMostFrequentNWords (text: string, n: number): IWordFrequency[];
};
  
