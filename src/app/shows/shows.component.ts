import { Component, OnInit } from '@angular/core';

import { ShowsService } from '../services/shows.service'

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: any = []

  constructor(private showService: ShowsService) { }

  getShows(): void {
    this.showService.getShows()
      .subscribe(shows => this.shows = shows)
      
  }

  ngOnInit() {
    this.getShows()
  }

}
