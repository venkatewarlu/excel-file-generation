import { Component } from '@angular/core';
import { ExcelGeneratorService } from "./excel-generator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExcelGeneratorService]
})
export class AppComponent {
  title = 'excel-file-generator';
  constructor(public excelGeneratorService: ExcelGeneratorService) {

  }

  //this method calls the service method to get the excel data and sends the response to downLoadFile method.
  public generateExcel(): void {
    this.excelGeneratorService.generateExcel().subscribe(async res => {
      this.downLoadFile(res);
    })

  }


  // This method downloads the excel file.
  public downLoadFile(data: any): void {
    // const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none");
    a.href = url;
    a.download = "Report.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
