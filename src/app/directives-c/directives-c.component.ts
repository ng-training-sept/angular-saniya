import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-directives-c',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './directives-c.component.html',
  styleUrls: ['./directives-c.component.scss']
})
export class DirectivesCComponent {

  users = [
      
      {username: 'Saniya', address:'Biratnagar', age: 22},
      {username: 'Riya', address:'Kathmandu', age: 21},
      {username: 'Lisha', address:'Pokhara', age: 20},
      {username: 'Shilpa', address:'Birgunj', age: 10},  
 
   ];
   
}
