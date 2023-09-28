import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NewCardComponent } from './new-card/new-card.component';
import { DirectivesCComponent } from './directives-c/directives-c.component';
import { HeaderComponent } from './components/header/header.component';
import { SportsComponent } from './forms/sports/sports.component';
import { RouterOutlet } from '@angular/router';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardDesComponent } from './components/card/card-des/card-des.component';
import { HomeComponent } from './forms/home/home.component';
import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [CommonModule,
  CardComponent,
  NewCardComponent,
  DirectivesCComponent,
  HeaderComponent,
  CardItemComponent,
  SportsComponent,
  RouterOutlet,
  CardDesComponent,
  HomeComponent,
  PageNotFoundComponent
  ],


  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

 addCard(title: string) {
  this.cardsTitle.push(title);
}

deleteCard(title:string): void{
  const index = this.cardsTitle.indexOf(title);
  //index0f() returns -1 if element index oe element not found
  if(index !== -1){
    this.cardsTitle.splice(index,1);
    // removes one element from that index
  }
}





}
