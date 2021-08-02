import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'b-comp',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css']
})
export class BComponentComponent implements OnInit {

  itemDataList = Array<string>();
  constructor(@Inject('commSvc') public commSvc:any) {
    let _this=this;
    this.itemDataList.push("Ram");
    this.itemDataList.push("Sam");
    //1.Closure
    this.commSvc.subscribeData().subscribe(onReceiveData);
    function onReceiveData(data:string) {
      _this.itemDataList.push(data);
    }
   }

  // constructor(@Inject('commSvc') public commSvc:any) {
  //   this.itemDataList.push("Ram");
  //   this.itemDataList.push("Sam");
  //2.Closure
  //   // this.commSvc.subscribeData().subscribe(this.onReceiveData.bind(this));

  //3.closure
  //   this.commSvc.subscribeData().subscribe((data:string)=>{
  //     this.itemDataList.push(data);
  //   });
  //  }

  ngOnInit(): void {
  }

  //Callback method
  // onReceiveData(data:string) {
  //   console.log(data);
  //   this.itemDataList.push(data);
  // }
}
