import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() book!: Book;
  @Output() view = new EventEmitter<string>();

  onView() {
    this.view.emit(this.book.key);
  }

  getCoverUrl(): string {
    if (this.book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg`;
    }
    return 'https://via.placeholder.com/180x240?text=No+Cover';
  }
}
