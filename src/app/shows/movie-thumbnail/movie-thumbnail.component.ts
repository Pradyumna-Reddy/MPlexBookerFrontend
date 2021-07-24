import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  imagepath="https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg"
  numbers = [1, 2, 3, 4, 5]
  @Input() movie: any
  constructor() { }

  ngOnInit(): void {
  }

}
