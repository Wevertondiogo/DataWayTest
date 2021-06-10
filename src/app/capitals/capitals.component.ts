import { Component, OnInit } from '@angular/core';
import { Cities } from '../models/cities.models';
import { CapitalsService } from '../services/capitals.service';

import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

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

exportGrid(e) {
  const workbook = new Workbook(); 
  const worksheet = workbook.addWorksheet("Main sheet"); 
  exportDataGrid({ 
      worksheet: worksheet, 
      component: e.component
  }).then(function() {
      workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
      }); 
  }); 
  e.cancel = true; 
}
}