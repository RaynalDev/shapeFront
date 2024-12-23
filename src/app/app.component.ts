import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShapeComponent } from './shape/shape.component';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, ShapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'shape-portrait';
}
