import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private httpClient: HttpClient) { }


  // ================
  // Bar Chart
  // ================
  getBarChart(){
    return this.httpClient.get<any>('http://localhost:3000/api/chart/barchart')
    .pipe(
      map(result => result)
    )
  }
  // =============
  // Line Chart 
  // =============
  getLineChart(){
    return this.httpClient.get<any>('http://localhost:3000/api/chart/linechart')
    .pipe(
      map(result => result)
    )
  }
  // ================
  // Doghunt Chart 
  // ================
  getDoghuntChart(){
    return this.httpClient.get<any>('http://localhost:3000/api/chart/doghunt')
    .pipe(
      map(res => res)
    )
  }
  // ================
  // Pie Chart 
  // ================
  getpieChart(){
    return this.httpClient.get<any>('http://localhost:3000/api/chart/piechart')
    .pipe(
      map(res => res)
    )
  }
  // ========================
  // Ploar Chart
  // =========================
  getpolarChart(){
    return this.httpClient.get<any>('http://localhost:3000/api/chart/polarchart')
    .pipe(
      map(res => res)
    )
  }
  // ===================
  // Radar Chart
  // ==================
  getRadarChart(){
    return this.httpClient.get<any>('http://localhost:3000/api/chart/radarchart')
    .pipe(
      map(res => res)
    )
  }

}
