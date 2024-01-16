import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BHeadComponent } from './components/b-head/b-head.component';
import { BBackComponent } from './components/b-back/b-back.component';
import { BLegComponent } from './components/b-leg/b-leg.component';
import { BTailComponent } from './components/b-tail/b-tail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BHeadComponent,BBackComponent, BLegComponent, BTailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mythological_basilisk';
}
