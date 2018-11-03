import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class ShowsService {

  shows: any = []

  constructor(private http: HttpClient) { }

  private showsUrl = 'https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/shows'
  private showSearchUrl = 'https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/search/shows?q='

  getShows(): Observable<any> {
    return this.http.get(this.showsUrl)    
  }

  getShowInfo(id): Observable<any> {
    return this.http.get(`${this.showsUrl}/${id}?embed[]=seasons&embed[]=akas&embed[]=cast`)
  }

  searchShow(query): Observable<any> {
    return this.http.get(`${this.showSearchUrl}${query}`)
  }

  
}
