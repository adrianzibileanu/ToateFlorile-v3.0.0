import { Component, OnInit } from '@angular/core';
import {Service} from "../services/service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: any[] = [];
  nextToken: string | null = null;

  constructor(private http: HttpClient) { }


  images = [1, 2, 3].map((n) => `assets/images/tmp/review${n}.png`);

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews(){
    const apiKey = '';
    const placeId = '';
    let url = '';
    if(this.nextToken){
      url += `&pagetoken=${this.nextToken}`;
    }
    this.http.get(url).subscribe((data:any) => {
      this.reviews = this.reviews.concat(data.result.reviews);
      this.nextToken = data.next_page_token;
    })
  }

  loadMore(){
    if(this.nextToken){
      this.loadReviews();
    }
  }
}
