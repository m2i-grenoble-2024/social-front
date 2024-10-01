import { Component } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    password:'',
    username:''
  };
  feedback = '';

  constructor(private auth:AuthService, private router:Router) {}

  handleSubmit() {
    this.auth.login(this.credentials).subscribe({
      next:() => this.router.navigate(['/']),
      error: () => this.feedback = 'Invalid credentials'
    });
  }
}
