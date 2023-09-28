import { Component, Input,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule  } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card-item.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  @Input() cards: Card[] = [];

     goToItemDetails(data: Card): void {
    this.router.navigate(['card-des', data.id], {state: {data}, relativeTo: this.route}).then();
  }
}