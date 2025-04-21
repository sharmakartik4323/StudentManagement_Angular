export class SMTPSettings {
    primaryDomain: string;
    primaryPort: number;
    usernamePassword: string;
    fromEmail: string;
  
    constructor() {
      this.primaryDomain = '';
      this.primaryPort = 0;
      this.usernamePassword = '';
      this.fromEmail = '';
    }
  }
  