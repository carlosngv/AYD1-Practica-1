import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  public path: String;

  constructor(public httpClient: HttpClient) { 
    this.path = 'http://localhost:3000/';
  }



  validar_palindromo(palabra: string): Observable<any>{
    var ruta = this.path + 'palindromo/' + palabra;
    return this.httpClient.get(ruta);
  }

  calcular_fibo(numero: number): Observable<any>{
    var ruta = this.path + 'fibo/' + numero;
    return this.httpClient.get(ruta);
  }

  validar_primo(numero:number):Observable<any>{
    var ruta = this.path + 'primo/' + numero;
    return this.httpClient.get(ruta);
  }

  calcular_potencia(numero:number):Observable<any>{
    var ruta = this.path + 'potencia/' + numero;
    return this.httpClient.get(ruta);
  }


  calcular_raiz(numero:number):Observable<any>{
    var ruta = this.path + 'raiz/' + numero;
    return this.httpClient.get(ruta);
  }


}
