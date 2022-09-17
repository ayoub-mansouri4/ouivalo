import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  constructor(public http:HttpClient) { }
  public sendData(json_object:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/sendDataToServer",json_object);
  }
}
