import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCardComponent } from './book-card.component';
import { Book } from '../../models/book.model';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  const mockBook: Book = {
    key: '/works/OL1234567W',
    title: 'Introduction to Angular',
    author_name: ['John Doe'],
    first_publish_year: 2022,
    cover_i: 54321
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = mockBook;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the book title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Introduction To Angular');
  });

  it('should emit the book key when view button is clicked', () => {
    let emittedKey = '';
    component.view.subscribe((key: string) => emittedKey = key);
    component.onView();
    expect(emittedKey).toBe('/works/OL1234567W');
  });

  it('should generate cover URL when cover_i is provided', () => {
    const url = component.getCoverUrl();
    expect(url).toContain('54321');
    expect(url).toContain('covers.openlibrary.org');
  });

  it('should return placeholder URL when no cover', () => {
    component.book = { ...mockBook, cover_i: undefined };
    const url = component.getCoverUrl();
    expect(url).toContain('placeholder');
  });
});
