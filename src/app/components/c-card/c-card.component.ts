import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/card';
import { FakeHttpService } from '../../data-access/fake-http.service';

@Component({
  selector: 'app-c-card',
  templateUrl: './c-card.component.html',
  styleUrls: ['./c-card.component.css']
})
export class CCardComponent implements OnInit {
  cards: Card[] = [];
  newTitle: string = '';
  newContent: string = '';

  constructor(private fakeHttpService: FakeHttpService) {}

  ngOnInit() {
    this.cards = this.fakeHttpService.getData();
  }

  addCard() {
    if (this.newTitle && this.newContent) {
      const newCard: Card = {
        id: this.cards.length + 1,
        title: this.newTitle,
        content: this.newContent,
      };
      this.fakeHttpService.addData(newCard);
      this.cards = this.fakeHttpService.getData();
      this.newTitle = '';
      this.newContent = '';
    } else {
      alert('Lütfen başlık ve içerik girin!');
    }
  }

  removeCard(id: number) {
    this.fakeHttpService.removeData(id);
    this.cards = this.fakeHttpService.getData();
  }
}
