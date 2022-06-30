import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  prefixe = "http://localhost:3000/api";

  constructor(private http:HttpClient) {
    
  }

  sendCommande(data:any){
    return this.http.post(this.prefixe, data);
  }

  getCommande(){
    return this.http.get(this.prefixe);
  }
}
