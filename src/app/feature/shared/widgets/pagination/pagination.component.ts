import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html'
})
export class PaginationComponent {

  @Input() page: number;
  @Input() total: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() {}

  getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.total) {
      max = this.total;
    }
    return max;
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  totalPages(): number {
    return Math.ceil(this.total / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.perPage * this.page >= this.total;
  }

  getPages(): number[] {

    const currentPage = this.page || 1;
    const pagesToShow = this.pagesToShow || 5;
    const pageCount = Math.ceil(this.total / this.perPage);

    const pages: number[] = [];
    pages.push(currentPage);

    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        const minPage = Math.min.apply(null, pages);
        if (minPage > 1) {
          pages.push(minPage - 1);
        }
      }
      if (pages.length < pagesToShow) {
        const maxPage = Math.max.apply(null, pages);
        if (maxPage < pageCount) {
          pages.push(maxPage + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }
}
