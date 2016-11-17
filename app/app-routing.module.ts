import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { BooksComponent }      from './books.component';
import { BookDetailComponent }  from './book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'books',     component: BooksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}