import { Component, OnInit } from '@angular/core';
import { Cities } from '../models/cities.models';
import { CapitalsService } from '../services/capitals.service';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.scss']
})
export class CapitalsComponent implements OnInit {
  districts!: Cities[];
  constructor(private _capitalsService: CapitalsService) { }

  ngOnInit(): void {
    this._capitalsService.getMunicipios().subscribe(results=> {
      this.districts = results;
      console.log(results)
    })
  }

}
