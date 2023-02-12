import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIurl = "https://localhost:7298/api";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIurl + '/inspections');
  }

  addInspection(data:any) {
    return this.http.post(this.inspectionAPIurl + '/inspections', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIurl + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string, data:any) {
    return this.http.delete(this.inspectionAPIurl + `/inspections/${id}`, data);
  } 

  // Inspection Types

  getInspectionTypesList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIurl + '/inspectionTypes');
  }

  addInspectionTypes(data:any) {
    return this.http.post(this.inspectionAPIurl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIurl + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string, data:any) {
    return this.http.delete(this.inspectionAPIurl + `/inspectionTypes/${id}`, data);
  } 

  // Statuses

  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIurl + '/status');
  }

  addStatus(data:any) {
    return this.http.post(this.inspectionAPIurl + '/status', data);
  }

  updateStatus(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIurl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string, data:any) {
    return this.http.delete(this.inspectionAPIurl + `/status/${id}`, data);
  } 
}
