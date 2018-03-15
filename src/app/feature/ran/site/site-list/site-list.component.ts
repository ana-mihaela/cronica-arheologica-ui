import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/support';
import { Site } from '@app/core/model';
import { TableParams } from '@app/feature/shared';

const log = new Logger('SiteListComponent');
const now = new Date();

@Component({
  selector: 'app-site-list',
  templateUrl: 'site-list.component.html'
})
export class SiteListComponent implements OnInit {

  startDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  sites: Site[];
  selectedSite: Site;

  total = 400;
  page = 1;
  perPage = 20;
  loading = false;

  ngOnInit(): void {
    log.debug('init');
    this.sites = SITES;
  }

  onTableReload(params: TableParams): void {
    log.debug(params);
  }

  onSelectItemChange(item: Site): void {
    this.selectedSite = item;
  }
}

const SITES = [{
    ranCode: '160181.14',
    name: 'Descoperirea monetară de la Chilia Veche - Gârla Tatanir I.',
    class: 'descoperire monrtară',
    type: 'Descoperire izolată',
    county: 'Tulcea',
    city: 'Chilia Veche, com. Chilia Veche',
    chronology: 'Epoca medievală / sec. XII',
    lastUpdate: '08.03.2018'
  },
  {
    ranCode: '160181.13',
    name: 'Aşezarea medievală de la Chilia Veche-la S de sat.',
    class: 'locuire civilă',
    type: 'aşezare',
    county: 'Tulcea',
    city: 'Chilia Veche, com. Chilia Veche',
    chronology: 'Epoca medievală',
    lastUpdate: '08.03.2018'
  }, {
    ranCode: '160181.14',
    name: 'Descoperirea monetară de la Chilia Veche - Gârla Tatanir I.',
    class: 'descoperire monrtară',
    type: 'Descoperire izolată',
    county: 'Tulcea',
    city: 'Chilia Veche, com. Chilia Veche',
    chronology: 'Epoca medievală / sec. XII',
    lastUpdate: '08.03.2018'
  },
  {
    ranCode: '160181.13',
    name: 'Aşezarea medievală de la Chilia Veche-la S de sat.',
    class: 'locuire civilă',
    type: 'aşezare',
    county: 'Tulcea',
    city: 'Chilia Veche, com. Chilia Veche',
    chronology: 'Epoca medievală',
    lastUpdate: '08.03.2018'
  }];
