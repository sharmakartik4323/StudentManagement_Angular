import { User } from "./user";

export class Role {
    id: number;
    role1: string;
    users: User[];
  
    constructor() {
      this.id = 0;
      this.role1 = '';
      this.users = [];
    }
  }
