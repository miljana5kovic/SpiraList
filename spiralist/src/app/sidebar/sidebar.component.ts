import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed: boolean = false;
  toggleCollapse() : void { this.isCollapsed = !this.isCollapsed; }
}
