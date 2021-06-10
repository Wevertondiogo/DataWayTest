import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../models/cities.models';
import { States } from '../models/States.model';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  statesData!:States[];
  citiesData!:Cities[];
  citiesDataHistoric!: Cities[];

  constructor(private _homeService: HomeServiceService) { }
  
  ngOnInit(): void {
     this._homeService.getStates().subscribe(results => this.statesData = results)
     this._homeService.getCityInHistoric().subscribe(results=> this.citiesDataHistoric = results )
    }
    
    onValueChanged(e) {
      const id = e.value;
      if(e.element.id === "state") {
        this._homeService.getCityById(id).subscribe(results=> this.citiesData = results)
      } else {
        //this._homeService.setLocale(id).subscribe(results=> console.log(results))
        const cityObj: Cities = { id:e.value, nome: e.event.target.innerText}
        this._homeService.setCityInHistoric(cityObj).subscribe(()=>      this._homeService.getCityInHistoric().subscribe(results=> this.citiesDataHistoric = results )
        )
      }
  }

}
