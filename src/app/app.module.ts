import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Burayı kontrol edin
import { AppComponent } from './app.component';
import { ACardComponent } from './components/a-card/a-card.component';
import { BCardComponent } from './components/b-card/b-card.component';
import { CCardComponent } from './components/c-card/c-card.component';
import { CardListComponent } from './ui/card-list/card-list.component';
import { FakeHttpService } from './data-access/fake-http.service';

@NgModule({
  declarations: [
    AppComponent,
    ACardComponent,
    BCardComponent,
    CCardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Burayı kontrol edin
  ],
  providers: [FakeHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
