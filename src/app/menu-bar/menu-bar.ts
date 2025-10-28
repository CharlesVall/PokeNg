import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Mobilebar } from './mobilebar/mobilebar';

@Component({
  selector: 'app-menu-bar',
  imports: [Sidebar, Mobilebar],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss'
})
export class MenuBar {

}
