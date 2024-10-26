import { Component, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private fakeHttpService: FakeHttpService) {}

  ngOnInit() {
    this.cards = this.fakeHttpService.getData();
  }
}
