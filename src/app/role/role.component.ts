import { Component } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})

export class RoleComponent {

  roleList: Role[] = [];
  newRole: Role = new Role();
  editRole: Role = new Role();

  constructor(private roleService: RoleService) {}

  GetAll() {
    this.roleService.getAllRoles().subscribe(
      (response) => {
        this.roleList = response;
      },
      (error) => {
        console.log('Unable to access API');
      }
    );
  }

  ngOnInit() {
    this.GetAll();
  }

  saveClick() {
    this.roleService.createRole(this.newRole).subscribe(
      (response) => {
        this.GetAll();
        this.Clear_Rec();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }

  Clear_Rec() {
    this.newRole.role1 = '';
  }

  deleteClick(id: number) {
    let ans = window.confirm('Want to delete Data?');
    if (!ans) return;
    this.roleService.deleteRole(id).subscribe(
      (response) => {
        this.GetAll();
      },
      (error) => {
        console.log('Unable to call API');
      }
    );
  }
  
}
