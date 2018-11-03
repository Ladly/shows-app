# ShowsApp

Application that displays popular TV Shows as well as details of it.

[Link to app](https://ladly.github.io/shows-app/)

## Getting started

Clone repo: git clone https://github.com/Ladly/shows-app.git.

Install dependencies: run `yarn/npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

For deployment on gh-pages to see search input go to: src/app/navigation/navigation.component.html and change currentLocation === '/' to currentLocation === '/shows-app/' 

## Infrastructure decisions and limitations

This project is created for practice purpose and like that it is suitable to be hosted on gh pages.

Endpoint used is tvmaze:

- [Documentation](http://api.tvmaze.com)

- http://api.tvmaze.com/shows

Important to notice: this api is served on http so gh pages will not display it directly. I used [cors-anywhere](https://cors-anywhere.herokuapp.com/) to display data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

More details about project progress can be found on trello link below.

## Project management

I use [trello](https://trello.com/b/Tefvejua).

## Authors

[Vuk Ivanovic](https://www.linkedin.com/in/vuk-ivanovic/).

## Licence

This project is licensed under MIT licence
