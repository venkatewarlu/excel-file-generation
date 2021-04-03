import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { saveAs } from 'file-saver/';

@Injectable({
  providedIn: 'root'
})
export class ExcelGeneratorService {

  constructor(private http: HttpClient) { }

  //Service method which will get the excel data from the server api
  public generateExcel(): Observable<Blob> {
    return this.http.get("http://localhost:4000/excel/generate-excel-file", { responseType: 'blob' }).pipe(
      map((res: Blob) => res));
  }

}
