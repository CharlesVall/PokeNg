import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { SidebarButtons } from './sidebar-buttons/sidebar-buttons';
import { SidebarBottom } from './sidebar-bottom/sidebar-bottom';

@Component({
  selector: 'app-sidebar',
  imports: [CardModule, SidebarButtons, SidebarBottom],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
}
