import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { BookDetailComponent } from './book-detail.component';
import { BooksComponent }      from './books.component';
import { BookService }          from './book.service';
import { BookSearchComponent }  from './book-search.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    BooksComponent,
    BookSearchComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
