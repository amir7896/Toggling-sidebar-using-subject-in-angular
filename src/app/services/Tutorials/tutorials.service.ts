import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private _httpClient: HttpClient) { }

  getTutorials(){
    return this._httpClient.get('http://localhost:3000/api/tutorials');
  }
}
