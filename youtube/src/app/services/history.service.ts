import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: Array<String> = [];

  constructor() {}

  addEntry(id: string) {
    if (this.history.findIndex(x => x === id) !== -1) {
      this.history.splice(this.history.findIndex(x => x === id), 1);
      this.history.push(id);
    } else {
      this.history.push(id);
    }
  }

  getHistory() {
    return this.history;
  }
}
