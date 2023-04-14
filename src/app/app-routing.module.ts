import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'books',
        component: BooksComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
  // { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
