import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

@Injectable()
export class EpicsService {
  constructor() {
  }

  getEpics() {
    return combineEpics(
    );
  }
}
