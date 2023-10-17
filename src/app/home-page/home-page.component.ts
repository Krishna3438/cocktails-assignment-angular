import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  drinks: string[] = ['Mojito', 'Margarita', 'Gimlet', 'Gunner'];
  constructor(private router: Router) {
  }

  handleRoute(drink: string) {
    this.router.navigate(['/details-page'], { queryParams: { selectedDrink: drink } })
  }

}
