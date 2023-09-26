import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NewCardComponent } from './new-card/new-card.component';
import { DirectivesCComponent } from './directives-c/directives-c.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [CommonModule,
  CardComponent,
  NewCardComponent,
  DirectivesCComponent,
  
  ],


  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng';

cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

 addCard(title: string) {
  this.cardsTitle.push(title);
}

deleteCard(title:string): void{
  const index = this.cardsTitle.indexOf(title);
  if(index !== -1){
    this.cardsTitle.splice(index,1);
  }
}

}
