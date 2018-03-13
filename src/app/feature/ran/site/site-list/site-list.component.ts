import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/support';
import { Site } from '@app/core/model';

const log = new Logger('SiteListComponent');

@Component({
  selector: 'app-site-list',
  templateUrl: 'site-list.component.html'
})
export class SiteListComponent implements OnInit {

  sites: Site[];

  total = 400;
  page = 1;
  perPage = 20;
  loading = false;

  ngOnInit(): void {
    log.debug('init');
    this.sites = SITES;
  }

  goToPage(page: number): void {
    this.page = page;
  }

  onNext(): void {
    this.page++;
  }

  onPrev(): void {
    this.page--;
  }
}

const SITES = [{
    ranCode: '160181.14',
    name: 'Descoperirea monetară de la Chilia Veche - Gârla Tatanir I. Locul descoperirii se află la Vest de localitate.',
    class: 'descoperire monrtară',
    type: 'Descoperire izolată',
    county: 'Tulcea',
    city: 'Chilia Veche, com. Chilia Veche',
    chronology: 'Epoca medievală / sec. XII',
    lastUpdate: '08.03.2018'
  },
  {
    ranCode: '160181.13',
    name: 'Aşezarea medievală de la Chilia Veche-la S de sat. Aşezarea se află la Sud de sat.   ',
    class: 'locuire civilă',
    type: 'aşezare',
    county: 'Tulcea',
    city: 'Chilia Veche, com. Chilia Veche',
    chronology: 'Epoca medievală',
    lastUpdate: '08.03.2018'
  }];
