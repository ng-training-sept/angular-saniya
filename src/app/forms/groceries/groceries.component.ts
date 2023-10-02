import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card-item/card-item.model';
import { CardItemComponent } from 'src/app/components/card-item/card-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'environment';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule,CardItemComponent,HttpClientModule],
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent {

  grocery: Card[] = [];
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Card[]>(`${environment.baseUrl}/grocery`)
    .subscribe(grocery => this.grocery = grocery);}}