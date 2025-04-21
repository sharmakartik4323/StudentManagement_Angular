import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { OtpVerification } from '../models/otp-verification';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://localhost:7095/api/Authentication/Account';

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/Login`, loginRequest);
  }
  
  otpVerification(model: OtpVerification, username: string, password: string): Observable<any> {
    const params = { username, password };  
    return this.httpClient.post<any>(`${this.apiUrl}/otp-verification`, model, { params });
  }
  
  logout() {
    localStorage.removeItem('jwt_token');
  }
  
  getToken() {
    return localStorage.getItem('jwt_token');
  }

  getUserRole(): string {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    const decoded: any = jwt_decode.jwtDecode(token);  
    return decoded.role;  
  }
  return '';
}

  isAuthenticated(): boolean {
    return !!this.getToken();  
  }

  // Method to handle access denied
  accessDenied(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/access-denied`);
  }
}
