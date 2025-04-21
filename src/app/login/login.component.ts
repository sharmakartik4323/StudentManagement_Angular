import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request';
import { AuthService } from '../services/auth.service';
import { OtpVerification } from '../models/otp-verification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  otpVerification: OtpVerification = new OtpVerification();
  message: string = '';
  loginSuccess: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.loginRequest).subscribe(
      (response) => {
        console.log('Login successful:', response);
        if (response) {
          console.warn(response.accessToken);
          localStorage.setItem('jwt_token', response.accessToken);
        this.loginSuccess = true;
        this.router.navigate(['/app']);
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.message = 'Invalid username or password.';
      }
    );
  }

  ngOnInit(): void {
    this.login();
  }

  Clear_Rec() {
    this.loginRequest.username = '';
    this.loginRequest.password = '';
  }

  // OTP Verification method
  verifyOtp(): void {
    this.authService.otpVerification(this.otpVerification, this.loginRequest.username, this.loginRequest.password).subscribe(
      (response) => {
        if (response.success) {
          console.log('OTP Verified successfully:', response);
          this.otpVerification.otp="";
          this.otpVerification.userId=0;
        } else {
          console.log('Invalid OTP:', response);
        }
      },
      (error) => {
        console.log('Error during OTP verification. Please try again later.');
      }
    );
  }
  }