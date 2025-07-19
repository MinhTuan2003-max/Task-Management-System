import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
