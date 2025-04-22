import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tablecontent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablecontent.component.html',
  styleUrl: './tablecontent.component.css'
})
export class TablecontentComponent {
  tableData = [
    { name: 'Programming in C', type: 'Document', date: '12 Aug 2024', author: 'Morny Hasu' },
    { name: 'Login and Sign UP UI', type: 'Animation', date: '25 Dec 2024', author:'Alex Madus' },
    { name: 'Nft Website Pages', type: 'Image', date: '5 Sept 2024', author: 'Normu Nalij' },
    { name: 'Square Dashboard', type: 'Document', date: '17 Jun 2024', author: 'William sen'}
  ];
}
