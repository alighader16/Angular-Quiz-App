import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

ngOnInit(): void {
  const userId = +this.route.snapshot.paramMap.get('id')!;
  this.userService.getUser(userId).subscribe({
    next: (res) => {
      this.user = res.data;
    },
    error: () => {
      this.user = null;
    }
  });
}


  goBack(): void {
    this.router.navigate(['/']);
  }
}
