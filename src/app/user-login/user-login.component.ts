import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private authService: AuthService)
  {
    this.loginForm = this.fb.group(
      {
        userName : new FormControl('', Validators.required),
        password : new FormControl('', [Validators.required])

      }
     )
  }

  onLogin() {
    if (this.loginForm.valid) {
    const userName = this.loginForm.get('userName')?.value;
    
    localStorage.setItem('LoggedUser', userName);
    
    this.authService.setCurrentUser(userName);
  
      this.router.navigate(['/dashboard']).then(success => {
        console.log('Navigation success?', success);
      });
    } else {
      console.log('Form is invalid');
    }
  }


  ngOnInit(): void {
    console.log('UserLoginComponent loaded');
  }

}
