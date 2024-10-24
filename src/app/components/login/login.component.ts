import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Specify that this is a standalone component
  imports: [CommonModule, FormsModule], // Import necessary modules
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  attempts: number = 0; // Track number of failed attempts
  maxAttempts: number = 3; // Maximum number of attempts
  loginDisabled: boolean = false; // Disable login button

  // Updated valid user for demonstration
  private readonly validUsername: string = 'sravanthi'; // Updated username
  private readonly validPassword: string = '12345'; // Updated password

  // Function to handle login
  onLogin() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      // Successful login
      this.errorMessage = '';
      alert('Login successful!'); // You can redirect to another page here
    } else {
      // Increment the attempt counter
      this.attempts++;
      this.errorMessage = 'You have entered wrong credentials';

      // Disable the login button after 3 failed attempts
      if (this.attempts >= this.maxAttempts) {
        this.loginDisabled = true;
        this.errorMessage = 'You have exceeded the maximum number of attempts.';
      }
    }
  }
}
