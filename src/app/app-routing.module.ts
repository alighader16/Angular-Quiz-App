import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
