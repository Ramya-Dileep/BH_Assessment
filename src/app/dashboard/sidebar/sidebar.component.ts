import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  items = [
    { name: 'Dashbord', icon: 'dashboard', router: '/dashboard' },
    { name: 'File Manager', icon: 'folder', router: '/files' },
    { name: 'Tasks', icon: 'task', router: '/tasks' },
    { name: 'Letter Box', icon: 'mail', router: '/mail' }
  ];

}
