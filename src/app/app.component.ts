import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proyect';

name: string = "Jorge";
age: number = 32;
friends: Array<string> = ["2", "3"];
random: Array<any> = ["Hola", true, 25];
  
resultado: number|string = '';
data1: number = 0;
data2: number = 0;

public setData1(event :any){
  this.data1 = Number(event.target.value)
}
public setData2(event :any){
  this.data2 = Number(event.target.value)
}




public calculator(number1: number,number2: number,operation:string): number | any {
  switch (operation) {
    case '+':
      return this.resultado = number1 + number2;
    case "-":
      return this.resultado = number1 + number2;
    case "*":
      return this.resultado = number1 * number2;
    case "/":
      return this.resultado = number1 / number2;

    
    default:
      this.resultado = "operación incorrecta"
      break;
  }
}

}
