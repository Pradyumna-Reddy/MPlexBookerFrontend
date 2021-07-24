import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: any[] = []
  visibleShows: any[] = []
  visibleMovies: any[] = []
  filteredMovies: any[] = []
  searchForm = new FormGroup({
    date: new FormControl(''),
    query: new FormControl('')
  })
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.shows = this.router.snapshot.data['shows']
    this.visibleShows = this.shows //.filter((val) => new Date(val.date) > new Date(Date.now()))
    this.visibleMovies = this.visibleShows.map((val) => val.movie)
    this.allMovies()
  }

  allMovies(){
    this.filteredMovies = this.visibleMovies
  }

  search(formValues: any) {
    if(formValues.date) {

    }
    if(formValues.query){
      this.filterByName(formValues.query)
    }
    if(!formValues.date && !formValues.query) {
      this.allMovies()
    }
  }

  filterByName(query: string) {
    if(query != null || query != '') {
      this.filteredMovies = this.visibleMovies.filter((movie) => movie.name == query)
    }
  }

}

function getUniqueListBy(arr: any[], key: string) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}
