export class ExistingUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phoneNumber: string;
    role: number;
    password: string;
    constructor() {
      this.id = 0;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.gender = '';
      this.phoneNumber = '';
      this.role = 0;
      this.password = '';
    }
}
