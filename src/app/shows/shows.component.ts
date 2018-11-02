import { Component, OnInit } from '@angular/core';

import { ShowsService } from '../services/shows.service'

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  title = 'Popular shows';
  shows: any = []

  constructor(private showService: ShowsService) { }

  getShows(): void {
    this.showService.getShows()
      .subscribe(shows => this.shows = shows.slice(0, 49))
      
  }

  ngOnInit() {
    this.getShows()
  }

}
