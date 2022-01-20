import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  // value="Ap";
  // val="sahana";
//   isSpeacial:boolean=true;
//   c1="blue";
//   c2="purple";
//   colval=2
//   display()
//   {
//     console.log("inside function");
//   }
displayResult:string
// @Pipe({name: 'reverse'})
// export class ReversePipe implements PipeTransform {
//     transform(value: string): string {
//         return value.split('').reverse().join('');
//     }
// }
// @Pipe({name:'reverseNumber'})  
// export class reverseNumber implements PipeTransform
// {  
//   transform(value:number)
//   {  
//     let rev=0,d;  
//     while(value>0){  
//       d=value%10;  
//       rev=(rev*10)+d;  
//       value=(value/10)|0;  
//     }  
//     return rev;  
//   }  
// }  
}
