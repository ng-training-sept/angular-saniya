import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service'; 
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule,MatButtonModule,MatMenuModule,RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {
  
  ngOnInit(): void {
    
  }


  private readonly authService = inject(AuthService);

  login(): void {
    this.authService.authenticate();
  }
}
