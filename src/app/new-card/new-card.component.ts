import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatInputModule,MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent {

  Username : string  ='';
  
  isUsernameEmpty():boolean {
    return this.Username.trim() === '';
  }

onClick() {
  
  this.Username ='';
}


  
}
