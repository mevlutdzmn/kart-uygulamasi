import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class FakeHttpService {
  private data: Card[] = [];

  constructor() {
    this.generateInitialData();
  }

  private generateInitialData() {
    for (let i = 1; i <= 5; i++) {
      this.data.push({
        id: i,
        title: `Card Başlığı ${i}`,
        content: `Card İçeriği ${i}`,
      });
    }
  }

  getData(): Card[] {
    return this.data;
  }

  addData(newCard: Card) {
    this.data.push(newCard);
  }

  removeData(id: number) {
    this.data = this.data.filter((card) => card.id !== id);
  }
}
