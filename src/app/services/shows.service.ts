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

  getShows(): Observable<any> {
    return this.http.get(this.showsUrl)    
  }

  
}
