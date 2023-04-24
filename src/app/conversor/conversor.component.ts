import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
 
  convertevalor : number = 0;
  valorkm : number = 0;
  valorcm : number = 0;
  valorml : number = 0;

  convertmedida(){
  
   
   this.valorkm = this.convertevalor / 1000;
   this.valorcm = this.convertevalor * 100;
   this.valorml = this.convertevalor * 1000;   
    
  }

}