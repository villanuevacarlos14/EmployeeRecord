import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public Get(id: number) {
    return this.http.get<IEmployee>(`${environment.apiUrl}/Employee/${id}`);
  }
  public GetAll() {
    return this.http.get<IEmployee[]>(`${environment.apiUrl}/Employee`);
  }
  public Add(payload: IEmployee) {
    return this.http.post<IEmployee>(`${environment.apiUrl}/Employee`,payload);
  }
  public Update(payload: IEmployee) {
    return this.http.put<IEmployee>(`${environment.apiUrl}/Employee`,payload);
  }
  public Delete(id: number) {
    return this.http.delete<IEmployee>(`${environment.apiUrl}/Employee/${id}`);
  }
}
