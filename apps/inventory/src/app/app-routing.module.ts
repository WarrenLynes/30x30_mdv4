import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KicksComponent } from './kicks/kicks.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './kicks/list/list.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './kicks/detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: KicksComponent },
  { path: 'login', component: LoginComponent },
  {path: 'lostnfound', component: NotFoundComponent},
  { path: '**', redirectTo: 'lostnfound', pathMatch: 'full' }
];

@NgModule({
  declarations: [ AuthComponent, LoginComponent, KicksComponent, ListComponent, DetailComponent, NotFoundComponent ],
  imports: [
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatListModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
