import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { ShowsService } from '../services/shows.service'

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  
  show: any = {}
  id: number = +this.route.snapshot.paramMap.get('id')

  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getShowInfo(id): void {
      this.showService.getShowInfo(id)
        .subscribe(show => this.show = show)
  }

  ngOnInit() {
    this.getShowInfo(this.id)
  }

}
