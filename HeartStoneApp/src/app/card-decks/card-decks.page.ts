import { Component, OnInit } from '@angular/core';
import { CardDeck } from './shared/card.model';
import { CardService } from './shared/card.service';



@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage { // implements OnInit {
  ALLOWED_DECKS = ['classes','factions','qualities','types','races'];
  cardDecks:CardDeck[] = [];
  
  extractAllowedDecks (cardDecks: CardDeck[]){
    this.ALLOWED_DECKS.forEach ((deckName:string) => {
      this.cardDecks.push({name:deckName, types:cardDecks[deckName]});
      //debugger;
    })
  }

  private getCardDecks() {
    this.cardService.getAllCardDecks().subscribe(
      (cardDeckService:CardDeck[])=>{
        this.extractAllowedDecks(cardDeckService);
      }
    )
  }

  constructor(private cardService:CardService) {
    this.getCardDecks();
  }

  public alerta = function(){
    alert("The cardDecks = " + JSON.stringify(this.cardDecks));
  };

//  ngOnInit() {}

}
