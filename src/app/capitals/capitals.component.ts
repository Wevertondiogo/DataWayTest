import { Component, OnInit, ViewChild } from '@angular/core';
import { Cities } from '../models/cities.models';
import { CapitalsService } from '../services/capitals.service';

import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.scss']
})
export class CapitalsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  districts!: Cities[];
  constructor(private _capitalsService: CapitalsService) { }

  ngOnInit(): void {
    this._capitalsService.getMunicipios().subscribe(results=> this.districts = results)
  

}

exportGridToPDF() {
  const doc = new jsPDF();
  exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance
  }).then(() => {
      doc.save('DataGrid.pdf');
  })
}

exportGridToExcel(e) {
  const workbook = new Workbook(); 
  const worksheet = workbook.addWorksheet("Main sheet"); 
  exportDataGrid({ 
      worksheet: worksheet, 
      component: e.component
  }).then(()=> {
      workbook.xlsx.writeBuffer().then((buffer: BlobPart)=> { 
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
      }); 
  }); 
  e.cancel = true; 
  
}
}