import { AuthService } from './../../service/auth.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 
  userName: string | null = null
  private subscription: Subscription = new Subscription();

constructor( private authService: AuthService,
  private router: Router,private eRef: ElementRef) 
  {

  }
  
  ngOnInit(): void {
    this.subscription = this.authService.currentUser$.subscribe(user => {
      this.userName = user;
    });

    const savedUser = localStorage.getItem('LoggedUser');
    if (savedUser) {
      this.authService.setCurrentUser(savedUser);
    }
  }

  dropdownOpen = false;

  dropDownItems = [
    { name: 'MY PROFILE', icon: 'person', router: '/profile' },
    { name: 'INBOX', icon: 'mail', router: '/mail' },
    { name: 'TASKBAR', icon: 'task', router: '/tasks' },
    { name: 'SETTINGS', icon: 'settings', router: '/settings' }
  ];

  DropdownClick() {
    debugger
    this.dropdownOpen = !this.dropdownOpen;
  }

  DropdownClose() {
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  logout(): void {
    localStorage.removeItem('LoggedUser');
    this.router.navigate(["/login"])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
