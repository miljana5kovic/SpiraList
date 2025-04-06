import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PropDefinerComponent } from '../prop-definer/prop-definer.component';

@Component({
  selector: 'sidebar',
  imports: [CommonModule, MatIconModule, PropDefinerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed: boolean = false;
  toggleCollapse() : void { this.isCollapsed = !this.isCollapsed; }
}
