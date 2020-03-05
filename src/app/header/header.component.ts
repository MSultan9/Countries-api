import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service'
import { CountryDetailService } from '../country-detail.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkOn = false
  allCountries;
  renderedCountries;

  constructor(private countriesService: CountriesService, private detailService: CountryDetailService) {
    this.countriesService.fetchCountries()
      .subscribe(data => {
        this.allCountries = data
        this.renderedCountries = this.allCountries.filter(item => item.alpha2Code !== "IL")
        this.detailService.setCountries(this.renderedCountries)
      });
  }

  ngOnInit() {
  }

  darkMode() {
    document.body.classList.toggle('dark')
    this.darkOn = document.body.classList.contains('dark')
  }

}
