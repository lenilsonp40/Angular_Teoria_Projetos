import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
   <!--<router-outlet></router-outlet> -->
   <h1>components</h1>
    `,


})
export class AppComponent {
  title = 'Projeto-Dener';
}
