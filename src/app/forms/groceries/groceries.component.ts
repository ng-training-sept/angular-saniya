import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card-item/card-item.model';
import { CardItemComponent } from 'src/app/components/card-item/card-item.component';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule,CardItemComponent],
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent {

  groceryCards: Card[] = [];

  ngOnInit(): void {
      this.groceryCards = [
          {
              id: "1",
              name: 'Football',
              price: 1500,
              imageUrl: 'https://th.bing.com/th/id/OIP.BrwfaRaYp8fw2ztDqGqdIQHaE8?w=295&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7',
              description: 'Football description'
          },
          {
              id: "2",
              name: 'Football Boot',
              price: 6000,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
              description: 'Football description'
          }
      ];
  }


}
