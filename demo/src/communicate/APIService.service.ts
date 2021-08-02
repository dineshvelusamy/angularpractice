import { Inject, Injectable } from "@angular/core";
import { CommunicatorService } from "./CommunicatorService.service";

@Injectable()
export class APIService {

    subscriptionRef: any;

    constructor(@Inject("APIAddress") public httpAddress: string,
        @Inject('commSvc') public commSvc: any) {
        console.log("API Service activated");
        this.subscriptionRef = this.commSvc.streamObservable.subscribe(this.onDataChanged.bind(this));
    }

    onDataChanged(data: string) {
        console.log(`Passing ${data} to the api address ${this.httpAddress}`);
    }

    removeSubscription() {
        console.log("Removing subscription");
        this.subscriptionRef.unsubscribe();
    }
}