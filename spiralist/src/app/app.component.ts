import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraphicsScreenComponent } from './components/graphics-screen/graphics-screen.component';

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, SidebarComponent, GraphicsScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spiralist';
}
