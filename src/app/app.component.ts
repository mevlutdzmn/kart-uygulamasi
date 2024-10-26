import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-a-card></app-a-card>
      <app-b-card></app-b-card>
      <app-c-card></app-c-card>
      <app-card-list></app-card-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
