import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor() { }
  soma(n1:number, n2:number){
    return n1 + n2;
  
  }
  media(n1:number, n2:number){
    return (n1+ n2)/2
    
  }
}
