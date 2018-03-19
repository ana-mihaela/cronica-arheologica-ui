import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/support';
import { Site } from '@app/core/model';
import { TableParams } from '@app/feature/shared';

const log = new Logger('SiteListComponent');

import { SITES } from '../data/sites';

@Component({
  selector: 'app-site-list',
  templateUrl: 'site-list.component.html'
})
export class SiteListComponent implements OnInit {

  sites: Site[];
  selectedSite: Site;

  total = 400;
  page = 1;
  perPage = 20;
  loading = false;

  ngOnInit(): void {
    this.sites = SITES;
    log.debug('init');
  }

  onTableReload(params: TableParams): void {
    log.debug(params);
  }

  onSelectItemChange(item: Site): void {
    this.selectedSite = item;
  }
}

