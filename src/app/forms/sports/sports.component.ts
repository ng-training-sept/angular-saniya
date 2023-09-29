import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card-item/card-item.model';
import { CardItemComponent } from 'src/app/components/card-item/card-item.component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  

  sportCards: Card[] = [];

    ngOnInit(): void {
        this.sportCards = [
            {
                id: "1",
                name: 'Football',
                price: 1500,
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
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


