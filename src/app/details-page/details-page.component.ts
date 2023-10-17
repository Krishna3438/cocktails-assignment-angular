import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './../Services/details.service'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  drinks: any;
  filtered_drinks: any;
  getDrinks = true;
  selectedOption = "";
  constructor(private router: Router, private route: ActivatedRoute, private detailsService: DetailsService) {
  }

  ngOnInit() {
    this.getDrinks = true;
    this.route.queryParams.subscribe((params: any) => {
      this.detailsService.getDrinkDetailsService(params['selectedDrink']).subscribe((data: any) => {
        this.getDrinks = false;
        this.drinks = data.drinks
        this.filtered_drinks = this.drinks
      });
    })
  }

  getIngredients(drink: any) {
    localStorage.setItem('drink_details', JSON.stringify(drink));
    this.router.navigate(['/ingredients-page'])
  }

  onChange(event: any) {
    this.filtered_drinks = this.drinks.filter((drink: any) => drink.strAlcoholic === event.value)
  }

}
