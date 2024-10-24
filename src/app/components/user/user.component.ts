import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor} from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,  // Declare this as a standalone component
  imports: [HttpClientModule, NgIf, NgFor, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User(0, '');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch all users
  getUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Add a new user
  addUser(): void {
    this.userService.addUser(this.newUser).subscribe((data: User) => {
      this.users.push(data);
      this.newUser = new User(0, ''); // Reset newUser
    });
  }

  // Update a user
  updateUser(user: User): void {
    this.userService.updateUser(user.id, user).subscribe((updatedUser: User) => {
      const index = this.users.findIndex(u => u.id === updatedUser.id);
      this.users[index] = updatedUser;
    });
  }

  // Delete a user
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
    });
  }
}
