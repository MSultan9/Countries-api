import { Component, OnInit } from '@angular/core';
import { CountryDetailService } from '../country-detail.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  allCountries;
  renderedCountries;
  countries;
  search = ""
  regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  selectedRegion = ""

  constructor(private detailService: CountryDetailService) {
    this.detailService.countriesState.subscribe(data => {
      this.allCountries = [...data]
      this.renderedCountries = this.allCountries.filter(item => item.alpha2Code !== "IL")
      this.countries = [...this.renderedCountries]
    });
  }

  ngOnInit() { }

  onInputChange() {
    this.FilterCountries()
  }

  onSelectChange() {
    this.FilterCountries()
  }

  FilterCountries() {
    if (this.selectedRegion == 'All' || this.selectedRegion == '') {
      this.countries = this.renderedCountries.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
      this.selectedRegion = ""
    } else
      this.countries = this.renderedCountries.filter(item => item.region === this.selectedRegion && item.name.toLowerCase().includes(this.search.toLowerCase()))
  }

  navigate(country) {
    this.detailService.getCountry(country)
  }

}
