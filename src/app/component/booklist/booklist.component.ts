import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addToLibrary(book: Book): void {
    alert(`${book.name} has been added to your library!`);
  }
}