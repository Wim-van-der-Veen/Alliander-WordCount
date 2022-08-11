import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TWordSpecs } from '../interfaces/words';

import { WordFrequency } from './word-frequency';

describe('WordFrequency', () => {
  let component: WordFrequency;

  const data: TWordSpecs = 
    { word: 'text', count: 3 };

  beforeEach(async () => {
    component = new WordFrequency(data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
