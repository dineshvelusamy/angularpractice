import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'a-comp',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css']
})
export class AComponentComponent implements OnInit {

  inputText:string;
  // constructor(punlic commSvc:CommunicatorService) { 
  constructor(@Inject('commSvc') public commSvc:any) { 
    this.inputText="";
  }

  ngOnInit(): void {
  }
  onPublish() {
    console.log("data published " + this.inputText);
    this.commSvc.publish(this.inputText);
  }

}
