import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookData!: IBook;
  bookId!: string;
  bookIdInDb!: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];

    this.bookService.getBookById(this.bookId).subscribe((data) => {
      this.bookData = Object.values(data)[0];
      this.bookIdInDb = Object.keys(data)[0];
    });
  }

  onDeleteHandler() {
    this.bookService.deleteBook(this.bookIdInDb).subscribe(
      (response) => {
        this.router.navigate(['/books'])
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
