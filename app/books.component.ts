import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  moduleId: module.id,
  selector: 'my-books',
  templateUrl: 'books.component.html',
  styleUrls: [ 'books.component.css' ]

})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.create(name)
      .then(book => {
        this.books.push(book);
        this.selectedBook = null;
      });
  }

  delete(book: Book): void {
    this.bookService
        .delete(book.id)
        .then(() => {
          this.books = this.books.filter(h => h !== book);
          if (this.selectedBook === book) { this.selectedBook = null; }
        });
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBook.id]);
  }

}

