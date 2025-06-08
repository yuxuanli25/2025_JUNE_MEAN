import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  appInfo = {
    name: 'Angular Modular App',
    version: '1.0.0',
    description: 'A simple demonstration of modular Angular architecture',
    author: 'Developer'
  };
} 