import { Component, Inject, OnInit } from '@angular/core';
import { APIService } from '../APIService.service';

@Component({
  selector: 'a-comp',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css'],
  providers:[APIService, {provide:"APIAddress", useValue:"http://google.com/update"}]
})
export class AComponentComponent implements OnInit {

  inputText:string;
  // constructor(punlic commSvc:CommunicatorService) { 
  constructor(@Inject('commSvc') public commSvc:any,
  public apiSvc : APIService) { 
    this.inputText="";
  }

  ngOnInit(): void {
  }
  onPublish() {
    // console.log("data published " + this.inputText);
    this.commSvc.publish(this.inputText);
    // this.apiSvc.onDataChanged("Component A injecting api service");
  }

}
