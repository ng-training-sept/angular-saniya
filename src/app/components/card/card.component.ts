import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';
import { Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule,ReversePipe,MatInputModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

//   para: string ='Nelumbo nucifera, also known as Sacred lotus, Indian lotus, or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is sometimes colloquially called a water lily, though this more often refers to members of the family Nymphaeaceae. '

//   imageUrl: string='https://th.bing.com/th?q=Beauty+of+Flowers&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NP&setlang=en&adlt=strict&t=1&mw=247';
 
//   numOfLikes : number = 0;
//   numOfShares : number = 0;


//   onLike(): void {
 
//   this.numOfLikes++;
// }
   
//     onShare(): void {
  
//     this.numOfShares++;
// }
  

// 
@Input({required:true}) titles: string[] = [];



@Output() titleEvent$ =new EventEmitter<string>();

@Output() deleteEvent$ =new EventEmitter<string>();

onAddCard(title: string): void{
  this.titleEvent$.emit(title);
}

onDeleteCard(){
  this.deleteEvent$.emit();
}
}
