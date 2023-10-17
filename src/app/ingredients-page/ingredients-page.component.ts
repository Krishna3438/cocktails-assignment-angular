import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.css']
})
export class IngredientsPageComponent implements OnInit {
  drink_details: any
  ingredients: String[] = [];
  constructor() { }

  ngOnInit() {
    const drinkDetailsString = localStorage.getItem('drink_details');
    if (drinkDetailsString != null) {
      const details = JSON.parse(drinkDetailsString)
      this.drink_details = details
    }
    Object.keys(this.drink_details).map((data: any) => {
      if (data.toLowerCase().includes('ingredient') && this.drink_details[data] != null) {
        this.ingredients.push(this.drink_details[data])
      }
    })
  }

}
