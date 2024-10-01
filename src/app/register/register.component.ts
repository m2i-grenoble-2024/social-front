import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../entities';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User = {
    email:'',
    password:'',
    username:''
  };

  constructor(private auth:AuthService, private router:Router) {}

  handleSubmit() {
    this.auth.postUser(this.user).subscribe(() => this.router.navigate(['/login']));
  }
}
