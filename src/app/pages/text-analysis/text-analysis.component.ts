import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, Subscription } from 'rxjs';

import { TextService } from 'src/app/services/text.service';
import { WordFrequency } from '../../models/word-frequency';
import { WordFrequencyAnalyzer } from '../../models/word-frequency-analyzer';


@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.scss']
})
export class TextAnalysisComponent implements OnInit, OnDestroy {

  text$: BehaviorSubject<string>;

  words$: Observable<WordFrequency[]>;
  wordsSorted$: Observable<WordFrequency[]>;

  wordCount$: Observable<number>;
  wordFrequency$ = new BehaviorSubject(0);
  mostFrequentNWords$ = new BehaviorSubject<WordFrequency[]>([]);

  private subscriptions: Subscription[] = [];

  private converter = new WordFrequencyAnalyzer

  noWord = {getWord: () => '--'};

  private _word = 'text';
  private word2find$ = new BehaviorSubject<string>(this._word);
  get word() { return this._word; }
  set word(newWord: string) {
    this._word = newWord;
    this.word2find$.next(newWord);
  }

  private _count = 3;
  private mostN$ = new BehaviorSubject<number>(this._count);
  get count() { return this._count; }
  set count(newCount: number) {
    this._count = newCount;
    this.mostN$.next(newCount);
  }

  constructor(
    private textService: TextService,
  ) {

    this.text$ = this.textService.text$;

    this.words$ = this.text$.pipe(map(this.converter.analysis));
    this.wordsSorted$ = this.words$.pipe(map(this.converter.sortWords));
    this.wordCount$ = this.words$.pipe(map(words => words.length));

    this.subscriptions.push(combineLatest([this.text$, this.word2find$]).subscribe(
      ([text, thisWord]) =>
        this.wordFrequency$.next(this.converter.calculateFrequencyForWord(text, thisWord))
    ));

    this.subscriptions.push(combineLatest([this.text$, this.mostN$]).subscribe(
      ([text, mostN]) => 
        this.mostFrequentNWords$.next(this.converter.calculateMostFrequentNWords(text, mostN))
    ));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    while (this.subscriptions.length) {
      const subscription = this.subscriptions.pop();
      subscription!.unsubscribe();
    }
  }

}
