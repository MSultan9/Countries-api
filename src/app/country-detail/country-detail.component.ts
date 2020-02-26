import { Component, OnInit } from '@angular/core';
import { CountryDetailService } from '../country-detail.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  details
  borders = []

  constructor(private detailService: CountryDetailService, private router: Router) {
    this.detailService.currentState.subscribe(data => {
      this.details = data;
      if (this.details == '')
        this.goBack()
      else {
        this.borders = []
        if (this.details.borders.length > 0)
          this.details.borders.forEach(element => {
            let border = this.detailService.getBorder(element)
            if (border)
              this.borders.push(border)
          });
      }
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/countries']);
  }

  navigate(border) {
    this.router.navigate([`/countries/${border}`]);
    this.detailService.getCountry(border)
  }

}
