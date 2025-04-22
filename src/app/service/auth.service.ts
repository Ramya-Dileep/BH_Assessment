import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  setCurrentUser(userName: string) {
    this.currentUserSubject.next(userName);
  }

  getCurrentUser(): string | null {
    return this.currentUserSubject.value;
  }
}
