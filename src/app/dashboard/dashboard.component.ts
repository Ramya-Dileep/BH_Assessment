import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TablecontentComponent } from './tablecontent/tablecontent.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,TablecontentComponent,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
