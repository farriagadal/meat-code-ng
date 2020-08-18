import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private api: string;

  constructor(private http: HttpClient) {
    this.api = Environment.API;
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public getAllArticles(): Observable<any> {
    const uri = `${this.api}/articles`;
    return this.http.get(uri, { headers: this.headers });
  }

  public getFilteredArticles(category: string): Observable<any> {
    const uri = `${this.api}/articles?filter=${category}`;
    return this.http.get(uri, { headers: this.headers });
  }

}





