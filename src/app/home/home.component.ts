import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { States } from '../models/States.model';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!:States[]
  constructor(private _homeService: HomeServiceService) { }

  ngOnInit(): void {
     this._homeService.getStates().subscribe(results => this.data = results)
  }

}
