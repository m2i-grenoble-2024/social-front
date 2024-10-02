import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validate-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './validate-email.component.html',
  styleUrl: './validate-email.component.css'
})
export class ValidateEmailComponent implements OnInit{
  @Input()
  jwt!:string;
  feedback:string = '';
  email:string = '';
  showForm = false;

  constructor(private auth:AuthService){}


  ngOnInit(): void {
      this.auth.validateEmail(this.jwt).subscribe({
        next: () =>  this.feedback = 'You have successfully validated your email',
        error: () => this.feedback = 'Your validation link is expired'   
      })
  }

  resend() {
    this.auth.resendEmail(this.email).subscribe({
      next: () => this.feedback = 'Email sent again, please check your email',
      error: (err) => {
        if(err.status == 404) {

          this.feedback = 'There does not seem to have a user associated to this email'
        }
        if(err.status == 400) {
          this.feedback = 'This account is already active and valid';
        }
        
      }
    })
  }
}
