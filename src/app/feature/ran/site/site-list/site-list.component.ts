import { Component, OnInit } from '@angular/core';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-site-list',
  templateUrl: 'site-list.component.html'
})
export class SiteListComponent implements OnInit {

  // messages: Message[];

  loading = false;
  // total = 0;
  total = 400;
  page = 1;
  limit = 20;

  /*constructor(private messageService: MessageService) {
  }*/

  ngOnInit(): void {
    // this.getMessages();
  }

  getMessages(): void {
    this.loading = true;
    /*this.messageService.getMessages({ page: this.page, limit: this.limit }).subscribe(res => {
      this.total = res.total;
      this.messages = res.messages;
      this.loading = false;
    });*/
  }

  goToPage(n: number): void {
    this.page = n;
    // this.getMessages();
  }

  onNext(): void {
    this.page++;
    // this.getMessages();
  }

  onPrev(): void {
    this.page--;
    // this.getMessages();
  }
}
