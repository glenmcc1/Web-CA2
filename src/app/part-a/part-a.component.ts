import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {

Celcius : number = 0;
  Fahrenhet : number = 0;

  constructor(private router: Router) {  }

   navigate() {
        this.router.navigate(["home"]);
        this.router.navigate(["part-b"]);
    }

  CelciusToFahrenhet() {
    this.Fahrenhet = this.Celcius * 9/5 + 32;
    //this.miles = this.kilometers * 0.621371192237;
  }

  fahrenthetToCelcius() {
    this.Celcius= this.Fahrenhet - 32 * 5/9
    //this.kilometers = this.miles / 0.621371192237; 
  }

  ngOnInit() {
  }
}
