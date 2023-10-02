import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card-item/card-item.model';
import { CardItemComponent } from 'src/app/components/card-item/card-item.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'environment';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, CardItemComponent,HttpClientModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  private readonly http = inject(HttpClient);
  sports: Card[] = [];

    ngOnInit(): void {
        this.http.get<Card[]>(`${environment.baseUrl}/sports`)
        .subscribe(sports => this.sports = sports);
    }
  }


