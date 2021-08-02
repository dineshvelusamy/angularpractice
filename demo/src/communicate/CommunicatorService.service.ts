import { Subject } from "rxjs";

export class CommunicatorService {

    //Create streams
    private stream = new Subject<string>();
    streamObservable = this.stream.asObservable();

    publish(data:string) {
        console.log("Data received "+data);
        this.stream.next(data);
    }

    subscribeData() {
        return this.streamObservable;
    }
}