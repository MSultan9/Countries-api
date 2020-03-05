import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailService {

  countries;
  allCountries = new BehaviorSubject('');
  countriesState = this.allCountries.asObservable();
  private country = new BehaviorSubject('');
  currentState = this.country.asObservable();

  constructor() { }

  setCountries(countries) {
    this.countries = countries;
    this.allCountries.next(countries);
  }

  getCountry(country) {
    if (typeof country == 'string') {
      let border = this.countries.filter(item => item.alpha3Code == country)
      this.country.next(border[0])
    } else
      this.country.next(country)
  }

  getBorder(country) {
    let border = this.countries.filter(item => item.alpha3Code == country)
    if (border.length > 0)
      return { name: border[0].name, code: border[0].alpha3Code }
  }
}
