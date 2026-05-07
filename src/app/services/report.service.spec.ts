import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReportService } from './report.service';
import { OpenLibraryResponse } from '../models/book.model';

describe('ReportService', () => {
  let service: ReportService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReportService]
    });
    service = TestBed.inject(ReportService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return books from API', () => {
    const mockResponse: OpenLibraryResponse = {
      works: [
        {
          key: '/works/OL1234567W',
          title: 'Test Book',
          author_name: ['Test Author'],
          first_publish_year: 2020,
          cover_i: 12345
        }
      ]
    };

    service.getBooks().subscribe(response => {
      expect(response.works.length).toBe(1);
      expect(response.works[0].title).toBe('Test Book');
    });

    const req = httpMock.expectOne(r => r.url.includes('openlibrary.org'));
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle HTTP error gracefully and return empty works', () => {
    service.getBooks().subscribe(response => {
      expect(response.works).toEqual([]);
    });

    const req = httpMock.expectOne(r => r.url.includes('openlibrary.org'));
    req.error(new ErrorEvent('Network error'));
  });

  it('should update searchQuery signal', () => {
    service.searchQuery.set('mathematics');
    expect(service.searchQuery()).toBe('mathematics');
  });
});
