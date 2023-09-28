import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../card-item/card-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-des',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule,],
  templateUrl: './card-des.component.html',
  styleUrls: ['./card-des.component.scss']
})
export class CardDesComponent implements OnInit{
  id!: string;
  data!: Card;
  private readonly route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
   this.data = history.state?.data;
  }
}



