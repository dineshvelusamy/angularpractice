import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'b-comp',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css']
})
export class BComponentComponent implements OnInit, OnDestroy {

  itemDataList = Array<string>();
  subscriptionRef : any;
  constructor(@Inject('commSvc') public commSvc:any) {
    let _this=this;
    this.itemDataList.push("Ram");
    this.itemDataList.push("Sam");
    //Type 1.Closure
    // this.commSvc.subscribeData().subscribe(onReceiveData);
    // function onReceiveData(data:string) {
    //   _this.itemDataList.push(data);
    // }
   }

  // constructor(@Inject('commSvc') public commSvc:any) {
  //   this.itemDataList.push("Ram");
  //   this.itemDataList.push("Sam");
  // Type 2.Closure
  //   // this.commSvc.subscribeData().subscribe(this.onReceiveData.bind(this));

  //Type 3.closure
  //   this.commSvc.subscribeData().subscribe((data:string)=>{
  //     this.itemDataList.push(data);
  //   });
  //  }

  ngOnInit(): void {
    //Type 2 closure
    this.subscriptionRef = this.commSvc.subscribeData().subscribe(this.onReceiveData.bind(this));
  }

  //Callback method
  onReceiveData(data:string) {
    console.log(data);
    this.itemDataList.push(data);
  }
  
  ngOnDestroy(): void {
    this.subscriptionRef.unsubscribe();
  }
}
