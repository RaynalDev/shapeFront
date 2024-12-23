import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shape } from '../models/shape';

@Injectable({
  providedIn: 'root',
})
export class ShapesService {
  private apiUrl = 'http://localhost:5126/api/shapes';
  constructor(private http: HttpClient) {}

  getShapes(): Observable<Shape[]> {
    return this.http.get<Shape[]>(this.apiUrl);
  }
}
