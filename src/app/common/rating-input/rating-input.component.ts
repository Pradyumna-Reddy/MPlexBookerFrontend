import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css']
})
export class RatingInputComponent implements OnInit {

  @Output() rating = new EventEmitter()
  @Input() previousRating : any
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.previousRating)
  }
  changeRating(evt: any) {
    this.rating.emit(evt.target.value)
  }

}
