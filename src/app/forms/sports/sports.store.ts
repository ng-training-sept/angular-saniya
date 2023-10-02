import { HttpClient } from "@angular/common/http";
import { Injectable, Signal, WritableSignal, computed, inject, signal } from "@angular/core";
import { Card } from "src/app/components/card-item/card-item.model";
import { routes } from "./sports.routes";

export type SportsState = {
    sports: Card[];
  }
  
  @Injectable()
  export class SportsStore {
    updateSport(id: any, value: any) {
        this.httpClient.post<Card>('http://localhost:3000/sports',this.sports).subscribe(res => {
            this.state.mutate(state => state.sports.push(res));
    
    } )};
  
    private readonly httpClient = inject(HttpClient);
  
    private state: WritableSignal<SportsState> = signal<SportsState>({
      sports: []
    });
  
    sports: Signal<Card[]> = computed(() => this.state().sports);
  
    fetchSports(): void {
      this.httpClient.get<Card[]>('http://localhost:3000/sports').subscribe(response => {
        this.state.set({ sports: response });
      });
    }
  
    saveSport(sport: Card): void {
      this.httpClient.post<Card>('http://localhost:3000/sports', sport).subscribe(res => {
        this.state.mutate(state => state.sports.push(res));
      });
    }
  }