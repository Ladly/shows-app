import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentLocation: string = ''

  constructor(
    private router: Router,
    private location: Location
    ) {  }

  logo = 'ShowsApp'

  getCurrentLocation(): void {
    this.router.events.subscribe(val => this.currentLocation = location.pathname)
  }

  ngOnInit() {
    this.getCurrentLocation()
    }

}
