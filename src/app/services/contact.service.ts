import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from 'src/environments/environment';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api: string;

  constructor(private http: HttpClient) {
    this.api = Environment.API;
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public postContact(contact: Contact): Observable<any> {
    const uri = `${this.api}/subscribe`;
    return this.http.post(uri, contact, { headers: this.headers });
  }

}





