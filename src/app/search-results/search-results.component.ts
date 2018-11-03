import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {

  searchResults: any[] = []
  inputValue: string = ''

  constructor(private showsServices: ShowsService) { }

  changeInputValue(e): void{
    this.inputValue = e.target.value
    this.search()
  }

  search(): void {
      this.showsServices.searchShow(this.inputValue)
        .subscribe(searchResults => this.searchResults = searchResults.slice(0,10))
  }

  clearInputValue(e): void {
    this.inputValue = ''
    this.searchResults = []
  }

  ngOnInit() {
  }

}
