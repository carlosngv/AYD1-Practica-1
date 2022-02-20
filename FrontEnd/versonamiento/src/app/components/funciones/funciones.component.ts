import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { FuncionesService } from 'src/app/services/funciones.service';
@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {
  //inputs
  palabra_palindroma: string = '';
  numero_fibonacci: number = 0;
  numero_primo: number = 0;
  numero_potencia: number = 0;
  numero_raiz: number = 0;
  //salidas
  salida_palindromo: string = '';
  salida_fibonacci: string = '';
  salida_primos: string = '';
  salida_potencia: string = '';
  salida_raiz: string = '';

  constructor(private funciones_serv: FuncionesService) {
  }

  ngOnInit(): void {
  }

  //funciones
  validar_palindromo() {
    this.funciones_serv.validar_palindromo(this.palabra_palindroma).subscribe(res => {
      let respuesta = res.palindromo;
      if (respuesta == true) {
        this.salida_palindromo = "Respuesta: Si es palindromo";
      } else {
        this.salida_palindromo = "Respuesta: No es palindromo";
      }
      setTimeout(() => {
        this.limpiar_valores();
      }, 3000);
    });
  }

  calcular_fibonacci() {
    this.funciones_serv.calcular_fibo(this.numero_fibonacci).subscribe(res => {
      let respuesta = res.fibonacci;
      this.salida_fibonacci = "Respuesta: " + respuesta;
      setTimeout(() => {
        this.limpiar_valores();
      }, 3000);
    })
  }


  validar_primo() {
    this.funciones_serv.validar_primo(this.numero_primo).subscribe(res => {
      this.salida_primos = res.primo;
      setTimeout(() => {
        this.limpiar_valores();
      }, 3000);
    });
  }

  calcular_potencia() {
    this.funciones_serv.calcular_potencia(this.numero_potencia).subscribe(res => {
      this.salida_potencia = "Respuesta: " +  res.potencia_cubo;
      setTimeout(() => {
        this.limpiar_valores();
      }, 3000);
    });
  }

  calcular_raiz() {
    this.funciones_serv.calcular_raiz(this.numero_raiz).subscribe(res => {
      this.salida_raiz = "Respuesta: " + res.raiz_cubica;
      setTimeout(() => {
        this.limpiar_valores();
      }, 3000);
    });
  }


  limpiar_valores() {
    //inputs
    this.palabra_palindroma = '';
    this.numero_fibonacci = 0;
    this.numero_primo = 0;
    this.numero_potencia = 0;
    this.numero_raiz = 0;
    //salidas
    this.salida_palindromo = '';
    this.salida_fibonacci = '';
    this.salida_primos = '';
    this.salida_potencia = '';
    this.salida_raiz = '';
  }



}
