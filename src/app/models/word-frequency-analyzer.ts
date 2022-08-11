import * as wc from 'src/app/util/word-count';
import { IWordFrequencyAnalyzer } from '../interfaces/words';
import { WordFrequency } from './word-frequency';


export class WordFrequencyAnalyzer implements IWordFrequencyAnalyzer {

  analysis(text: string): WordFrequency[] {
    const expanded = wc.expandedText(text);
    const matches = Array.from(expanded.matchAll(wc.wordExp));
    const words: string[] = [];
    const wordCounts: number[] = [];
    for (const match of matches) {
      // first item of the match is the full matched text,
      //   second item is the (first) matched group
      //   which is the word we need
      const word = match[1].toLowerCase();
      const index = words.indexOf(word);
      if (index < 0) {
  	      words.push(word);
          wordCounts.push(1);
      }
      else
        wordCounts[index]++;
    }

    const result: WordFrequency[] = [];
    words.forEach((word: string, index: number) => 
      result.push(new WordFrequency({ word, count: wordCounts[index]}))
    );
    return result ;
  }

  sortWords(wordFrequencies: WordFrequency[]): WordFrequency[] {
    return wordFrequencies.sort((wordA, wordB) => wordB.getFrequency() - wordA.getFrequency());
  }

  calculateHighestFrequency(text: string): number {
    const analysed = this.analysis(text);
    if (!analysed.length)
      return 0;
    return this.sortWords(analysed)[0].getFrequency();
  }

  calculateFrequencyForWord (text: string, word: string): number {
    const analysed = this.analysis(text);
    if (!analysed.length)
      return 0;
    const wordFrequency = analysed.find(item => item.getWord()===word);
    return wordFrequency ? wordFrequency.getFrequency() : 0;
  }

  calculateMostFrequentNWords (text: string, n: number): WordFrequency[] {
    const analysed = this.analysis(text);
    if (!analysed.length)
      return [];
    return this.sortWords(analysed).slice(0, n);
  }

}