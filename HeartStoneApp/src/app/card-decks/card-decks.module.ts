import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardDecksPage } from './card-decks.page';

// Añadimos el servicio de cartas implementado
import { CardService } from './shared/card.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from '../components/card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardDecksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  //Servicio de cartas implementado (Consumo API)
  providers: [
    CardService
  ],
  declarations: [
    CardDecksPage,
    CardListComponent
  ]
})
export class CardDecksPageModule { }
