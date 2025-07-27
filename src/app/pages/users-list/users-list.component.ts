import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  totalPages: number = 0;
  currentPage = 1;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.userService.getUsers(page).subscribe((res) => {
      this.users = res.data;
      this.totalPages = res.total_pages;
      this.currentPage = page;
    });
  }

  onPageChange(event: any): void {
    this.loadUsers(event.pageIndex + 1);
  }

  viewUser(id: number): void {
    this.router.navigate(['/user', id]);
  }
}
