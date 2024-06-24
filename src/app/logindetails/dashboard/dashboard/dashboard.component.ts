import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   
//public data="I am Coming From Parent"

public data=[
  {
    name: "Angular",
    fee: 15000
  },
  {
    name:"Roopa",
    age:30
  }
]
 public message:any
method1(e:any){
this.message=e
}


}