import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  sendWhatsAppMessage() {
    const phoneNumber = '5567998012295';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Doper.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(url, '_blank');
  }
}
